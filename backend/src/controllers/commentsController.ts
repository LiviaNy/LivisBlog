import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/httpException";
import { commentsService } from "../services/commentsService";

export const commentsController = {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = req.user.userId;
    const comments = await commentsService
      .getAllComments({ userId })
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
      .getCommentById({ commentId, type, userId })
      .catch((error: any) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    if (comment) res.status(200).json(comment);
  },

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userId = req.user.userId;
    const type = req.body.type;
    const title = req.body.title;
    const content = req.body.content;
    const newComment = await commentsService
      .createComment({ userId, type, title, content })
      .catch((error) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    res.status(200).json(newComment);
  },

  async modify(req: Request, res: Response, next: NextFunction): Promise<void> {
    const type = req.body.type;
    const title = req.body.title;
    const newContent = req.body.content;
    const commentId = Number(req.params.commentId);
    const changedComment = await commentsService
      .modifyComment({ type, title, newContent, commentId })
      .catch((error: any) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    res.status(200).json(changedComment);
  },

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const type = req.body.type;
    const commentId = Number(req.params.commentId);
    const deleteComment = await commentsService
      .deleteComment({ type, commentId })
      .catch((error: any) => {
        next(new HttpException(error.errorStatus, error.errorMessage.message));
      });
    if (deleteComment) res.status(200).json(deleteComment);
  },
};
