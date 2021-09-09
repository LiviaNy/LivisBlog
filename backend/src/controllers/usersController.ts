import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";
import { userService } from "../services/";

export const userController = {
  async addUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { username, password } = req.body;
    const registeredUser = await userService
      .register(username, password)
      .catch((error) => {
        next(
          new HttpException(
            error.errorStatus,
            error.errorMessage?.message || "DB error"
          )
        );
      });
    if (registeredUser) res.status(200).json(registeredUser);
  },
  async loginUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { username, password } = req.body;
    const loginData = await userService
      .login(username, password)
      .catch((error) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });

    if (loginData) {
      res.status(200).json(loginData);
    }
  },
};
