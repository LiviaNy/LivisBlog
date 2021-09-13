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

  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const commentId = Number(req.params.commentId);
    const userId = req.user.userId;
    const type = req.body.type;
    const comment = await commentsService
      .getCommentById(commentId, type, userId)
      .catch((error: any) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    if (comment) res.status(200).json(comment);
  },
};
