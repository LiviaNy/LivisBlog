import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";
import { commentsService } from "../services/commentsService";

export const commentsController = {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = req.user.userId;
    const comments = await commentsService
      .getAllComments(userId)
      .catch((error: any) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    if (comments) {
      res.status(200).json(comments);
    }
  },
};
