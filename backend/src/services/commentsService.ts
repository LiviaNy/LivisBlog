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
): Promise<commentParams> => {
  const comment = await Comments.getById(commentId, type);
  if (!comment[0]) throw errorService.notFoundError("Id not found.");
  if (comment[0].userid !== userId)
    throw errorService.forbiddenError("Forbidden action.");
  return comment[0];
};

const createComment = async (
  userId: number,
  type: commentTypes,
  title: string,
  content: string
): Promise<commentParams> => {
  if (!type) throw errorService.badRequestError("Missintparameter(s): type");
  if (!title) throw errorService.badRequestError("Missintparameter(s): title");
  if (!content)
    throw errorService.badRequestError("Missintparameter(s): content");
  return {
    id: (await Comments.create(userId, type, title, content)).results.insertId,
    title,
    content,
  };
};

const modifyComment = async (
  type: commentTypes,
  title: string,
  newContent: string,
  commentId: number
): Promise<commentParams> => {
  if (!type) throw errorService.badRequestError("Missintparameter(s): type");
  if (!title) throw errorService.badRequestError("Missintparameter(s): title");
  if (!newContent)
    throw errorService.badRequestError("Missintparameter(s): content");
  if (!commentId)
    throw errorService.badRequestError("Missintparameter(s): commentId");
  await Comments.modifyContent(type, title, newContent, commentId);
  return {
    id: commentId,
    title,
    content: newContent,
  };
};

export const commentsService = {
  getAllComments,
  getCommentById,
  createComment,
  modifyComment,
};
