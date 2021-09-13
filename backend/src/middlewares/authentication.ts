import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import HttpException from "../exceptions/httpException";

import { UserDetails } from "../models/Request";
import { errorService } from "../services";

export const authenticateRequest = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  const token: string | undefined = authHeader && authHeader.split(" ")[1];
  try {
    if (token == null) throw errorService.unauthorizedError("Invalid token.");

    jwt.verify(token, process.env.JWT_SECRETKEY as string, function (
      err,
      userData
    ) {
      if (err || !userData)
        throw errorService.unauthorizedError("Invalid token");
      if (userData) {
        if (!("userId" in userData))
          throw errorService.unauthorizedError("Invalid token");

        const userAuthData: UserDetails = {
          userId: (userData as UserDetails).userId,
        };

        if (
          isNaN(userAuthData.userId) ||
          userAuthData.userId < 1 ||
          userAuthData.userId !== Math.floor(userAuthData.userId)
        ) {
          throw errorService.unauthorizedError("Invalid token");
        }

        req.user = userAuthData;
      }
      next();
    });
  } catch (error:any) {
    next(new HttpException(error.errorStatus, error.errorMessage));
  }
};
