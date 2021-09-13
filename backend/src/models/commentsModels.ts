import { db } from "../db/connection";

export enum commentTypes {
  "hospital" = "hospital",
  "room" = "room",
  "nursery" = "nursery",
}

export interface SqlResultComments {
  results: [];
  fields: [];
}

export interface CommentParams {
  id: number;
  type: commentTypes;
  title: string;
  content: string;
  userid?: number;
}

export interface GetAllServiceResult {
  comments: CommentParams[];
}

export interface SqlCreateResult {
  results: { insertId: number };
  fields: unknown[];
}

export interface SqlDeleteResult {
  results: { affectedRows: number };
  fields: unknown[];
}

export interface DeleteStatus {
  status: "successful";
}

export interface GetAllRequest {
  userId: number;
}

export interface GetByIdRequest {
  commentId: number;
  type: commentTypes;
  userId: number;
}

export interface GetByIdModelRequest {
  commentId: number;
  type: commentTypes;
}

export interface CreateRequest {
  userId: number;
  type: commentTypes;
  title: string;
  content: string;
}

export interface ModifyRequest {
  type: commentTypes;
  title: string;
  newContent: string;
  commentId: number;
}

export const Comments = {
  getCommentsFromHospital: async ({
    userId,
  }: GetAllRequest): Promise<CommentParams[]> => {
    const query = `SELECT * FROM hospital WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromRoom: async ({
    userId,
  }: GetAllRequest): Promise<CommentParams[]> => {
    const query = `SELECT * FROM room WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromNursery: async ({
    userId,
  }: GetAllRequest): Promise<CommentParams[]> => {
    const query = `SELECT * FROM nursery WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getById: async ({
    commentId,
    type,
  }: GetByIdModelRequest): Promise<CommentParams[]> => {
    const query = `SELECT * FROM ${type} WHERE id = ?;`;
    const comment = await ((db.query(query, [
      commentId,
    ]) as unknown) as SqlResultComments);
    return comment.results;
  },

  create: async ({
    userId,
    type,
    title,
    content,
  }: CreateRequest): Promise<SqlCreateResult> => {
    const query = `INSERT INTO ${type} (title, content, userid) VALUES (?, ?, ?);`;
    const newComment = (db.query(query, [
      title,
      content,
      userId,
    ]) as unknown) as SqlCreateResult;
    return newComment;
  },

  modifyContent: async ({
    type,
    title,
    newContent,
    commentId,
  }: ModifyRequest): Promise<SqlCreateResult> => {
    const query = `UPDATE ${type} SET title = ?, content = ? WHERE id = ?;`;
    const updatedComment = await ((db.query(query, [
      title,
      newContent,
      commentId,
    ]) as unknown) as SqlCreateResult);
    return updatedComment;
  },

  deleteComment: async ({
    type,
    commentId,
  }: GetByIdModelRequest): Promise<SqlDeleteResult> => {
    const query = `DELETE FROM ${type} WHERE id = ?;`;
    const deleteComment = await ((db.query(query, [
      commentId,
    ]) as unknown) as SqlDeleteResult);
    return deleteComment;
  },
};
