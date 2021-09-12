import { Types, User } from "../models/userModels";

export const userActions = {
  addUser: (user: User) => ({
    type: Types.ADD_USER,
    payload: user,
  }),
  login: (user: User) => ({
    type: Types.LOGIN,
    payload: user,
  }),
  updatePassword: (user: User, password: string) => ({
    type: Types.UPDATE_PASSWORD,
    payload: {
      user,
      password,
    },
  }),
};
