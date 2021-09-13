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

export interface commentParams {
  id: number;
  title: string;
  content: string;
  userid?: number;
}

export interface getAllServiceResult {
  comments: commentParams[];
}

export const Comments = {
  getCommentsFromHospital: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM hospital WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromRoom: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM room WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromNursery: async (userId: number): Promise<commentParams[]> => {
    const query = `SELECT * FROM nursery WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getById: async (
    commentId: number,
    type: commentTypes
  ): Promise<commentParams[]> => {
    const query = `SELECT * FROM ${type} WHERE id = ?`;
    const comment = await ((db.query(query, [
      commentId,
    ]) as unknown) as SqlResultComments);
    return comment.results;
  },
};
