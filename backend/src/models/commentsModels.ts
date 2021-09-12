import { db } from "../db/connection";

export enum commentTypes {
  "hospital" = "hospital",
  "room" = "room",
  "nursery" = "nursery",
}

export interface GetAllRequest {
  userId: number;
  type?: commentTypes;
}

export interface SqlResultComments {
  results: {};
  fields: {};
}

export const Comments = {
  getComments: async ({ userId, type }: GetAllRequest): Promise<any> => {
    const query = `SELECT * FROM ${type} WHERE userid = ?`;
    const comments = await ((db.query(query, [
      userId,
    ]) as unknown) as SqlResultComments);
    return comments;
  },
};
