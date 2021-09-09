import { db } from "../db/connection";
import { errorService } from "../services/errorService";

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token?: string;
  message?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegistrationRequest {
  username: string;
  password: string;
}

export interface RegistrationResponse {
  id: number;
  username: string;
}

export interface SqlResultUser {
  results: Array<User>;
  fields: Array<unknown>;
}

export interface InsertId {
  insertId: number;
}

export interface SqlResultRegister {
  results: InsertId;
  fields: Array<unknown>;
}

export const User = {
  getUserByUsername: async (username: string): Promise<SqlResultUser> => {
    const query = "SELECT * FROM users WHERE username = ?";
    const dbResult: SqlResultUser = await ((db.query(query, [
      username,
    ]) as unknown) as SqlResultUser);
    return dbResult;
  },

  registerUser: async (
    username: string,
    dbPassword: string
  ): Promise<SqlResultRegister> => {
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const insertUserResult: SqlResultRegister = await ((db.query(query, [
      username,
      dbPassword,
    ]) as unknown) as SqlResultRegister);
    return insertUserResult;
  },
};
