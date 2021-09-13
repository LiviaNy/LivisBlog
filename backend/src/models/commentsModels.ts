import { db } from "../db/connection";
import { errorService } from "../services";

export enum commentTypes {
  "hospital" = "hospital",
  "room" = "room",
  "nursery" = "nursery",
}

export interface SqlResultComments {
  results: [];
  fields: [];
}

export interface commentParams {
  id: number;
  title: string;
  content: string;
  userid?: number;
}

export interface getAllServiceResult {
  comments: commentParams[];
}

export interface SqlCreateResult {
  results: { insertId: number };
  fields: unknown[];
}

export const Comments = {
  getCommentsFromHospital: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM hospital WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromRoom: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM room WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromNursery: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM nursery WHERE userid = ?;`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getById: async (
    commentId: number,
    type: commentTypes
  ): Promise<commentParams[]> => {
    const query = `SELECT * FROM ${type} WHERE id = ?;`;
    const comment = await ((db.query(query, [
      commentId,
    ]) as unknown) as SqlResultComments);
    return comment.results;
  },

  create: async (
    userId: number,
    type: commentTypes,
    title: string,
    content: string
  ): Promise<SqlCreateResult> => {
    const query = `INSERT INTO ${type} (title, content, userid) VALUES (?, ?, ?);`;
    const newComment = (db.query(query, [
      title,
      content,
      userId,
    ]) as unknown) as SqlCreateResult;
    return newComment;
  },
};
