export interface NavData {
  access: "user" | "visitor";
  navLabel: string;
  navPath: string;
  onClick?: () => void;
}

export interface User {
  userId: number;
  username: string;
}

export enum Types {
  ADD_USER = "ADD_USER",
  LOGIN = "LOGIN",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
}

export type Action = {
  user: User;
  password?: string;
};

export interface StoreInterface {
  username: string;
  userId: number;
}
