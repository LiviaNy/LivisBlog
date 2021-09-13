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

export const Comments = {
  getCommentsFromHospital: async (userId: number): Promise<any> => {
    const query = `SELECT * FROM hospital WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromRoom: async (userId: number): Promise<any> => {
    const query = `SELECT * FROM room WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },

  getCommentsFromNursery: async (userId: number): Promise<any> => {
    const query = `SELECT * FROM nursery WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments.results;
  },
};
