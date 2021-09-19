import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { compareSync } from "bcryptjs";

import { errorService } from "./errorService";
import { User, LoginResponse, RegistrationResponse } from "../models/User";

export const userService = {
  async register(
    username: string,
    password: string
  ): Promise<RegistrationResponse> {
    validate(username, password);
    const dbPassword = bcrypt.hashSync(password, 10);
    const user = await User.getUserByUsername(username);
    if (user.results.length !== 0)
      throw errorService.conflictError("Username is already taken");

    const savedUser = await User.registerUser(username, dbPassword);
    return {
      id: savedUser.results.insertId,
      username: username,
    };
  },

  async login(username: string, password: string): Promise<LoginResponse> {
    validate(username, password);
    const user = await User.getUserByUsername(username);
    if (
      user.results.length === 0 ||
      !compareSync(password, user.results[0].password)
    )
      throw errorService.conflictError("Username or password is incorrect.");
    return signToken(user.results[0]);
  },
};

function validate(username: string, password: string) {
  if (!username && !password) {
    throw errorService.badRequestError("Username and password is required.");
  } else if (!username) {
    throw errorService.badRequestError("Username is required.");
  } else if (!password) {
    throw errorService.badRequestError("Password is required.");
  } else if (password.length < 8) {
    throw errorService.notAcceptableError(
      "Password must be at least 8 characters."
    );
  }
}

function signToken(user: User): LoginResponse {
  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
    },
    process.env.JWT_SECRETKEY as string,
    {
      expiresIn: "1h",
    }
  );
  return {
    status: "ok",
    token,
  };
}
