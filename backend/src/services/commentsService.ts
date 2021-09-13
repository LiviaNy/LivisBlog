import { errorService } from ".";
import {
  commentParams,
  Comments,
  commentTypes,
  getAllServiceResult,
} from "../models/commentsModels";

const fillCommentValues = (comment: commentParams): commentParams => {
  delete comment.userid;
  return comment;
};

const getAllComments = async (userId: number): Promise<getAllServiceResult> => {
  const hospitalComments: commentParams[] = (
    await Comments.getCommentsFromHospital(userId)
  ).map(fillCommentValues);
  const rooomCommenst = (await Comments.getCommentsFromRoom(userId)).map(
    fillCommentValues
  );
  const nurseryComments = (await Comments.getCommentsFromNursery(userId)).map(
    fillCommentValues
  );
  return {
    comments: [...hospitalComments, ...rooomCommenst, ...nurseryComments],
  };
};

const getCommentById = async (
  commentId: number,
  type: commentTypes,
  userId: number
): Promise<any> => {
  const comment = await Comments.getById(commentId, type);
  if (!comment[0]) throw errorService.notFoundError("Id not found.");
  if (comment[0].userid !== userId)
    throw errorService.forbiddenError("Forbidden action.");
  return comment;
};

export const commentsService = {
  getAllComments,
  getCommentById,
};
