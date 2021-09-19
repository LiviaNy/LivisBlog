import { errorService } from ".";
import {
  CommentParams,
  Comments,
  commentTypes,
  CreateRequest,
  DeleteStatus,
  GetAllRequest,
  GetAllServiceResult,
  GetByIdModelRequest,
  GetByIdRequest,
  ModifyRequest,
} from "../models/commentsModels";

const getAllComments = async (): Promise<GetAllServiceResult> => {
  const hospitalComments: CommentParams[] = await Comments.getCommentsFromHospital();
  const rooomCommenst = await Comments.getCommentsFromRoom();
  const nurseryComments = await Comments.getCommentsFromNursery();
  return {
    comments: [...hospitalComments, ...rooomCommenst, ...nurseryComments],
  };
};

const getHospitalComments = async ({
  userId,
}: GetAllRequest): Promise<GetAllServiceResult> => {
  const hospitalComments: CommentParams[] = await Comments.getCommentsFromHospital();

  return {
    comments: [...hospitalComments],
  };
};

const getRoomComments = async ({
  userId,
}: GetAllRequest): Promise<GetAllServiceResult> => {
  const rooomCommenst = await Comments.getCommentsFromRoom();

  return {
    comments: [...rooomCommenst],
  };
};

const getNurseryComments = async ({
  userId,
}: GetAllRequest): Promise<GetAllServiceResult> => {
  const nurseryComments = await Comments.getCommentsFromNursery();
  return {
    comments: [...nurseryComments],
  };
};

const getCommentById = async ({
  commentId,
  type,
  userId,
}: GetByIdRequest): Promise<CommentParams> => {
  const comment = await Comments.getById({ commentId, type });
  if (!comment[0]) throw errorService.notFoundError("Comment not found.");
  if (comment[0].userid !== userId)
    throw errorService.forbiddenError("Forbidden action.");
  return comment[0];
};

const createComment = async ({
  userId,
  type,
  title,
  content,
}: CreateRequest): Promise<CommentParams> => {
  if (!type) throw errorService.badRequestError("Missintparameter(s): type");
  if (!title) throw errorService.badRequestError("Missintparameter(s): title");
  if (!content)
    throw errorService.badRequestError("Missintparameter(s): content");
  return {
    id: (await Comments.create({ userId, type, title, content })).results
      .insertId,
    type,
    title,
    content,
  };
};

const modifyComment = async ({
  type,
  title,
  newContent,
  commentId,
}: ModifyRequest): Promise<CommentParams> => {
  if (!type) throw errorService.badRequestError("Missintparameter(s): type");
  if (!title) throw errorService.badRequestError("Missintparameter(s): title");
  if (!newContent)
    throw errorService.badRequestError("Missintparameter(s): content");
  if (!commentId)
    throw errorService.badRequestError("Missintparameter(s): commentId");
  await Comments.modifyContent({ type, title, newContent, commentId });
  return {
    id: commentId,
    type,
    title,
    content: newContent,
  };
};

const deleteComment = async ({
  type,
  commentId,
}: GetByIdModelRequest): Promise<DeleteStatus> => {
  if (!type) throw errorService.badRequestError("Missintparameter(s): type");
  if (!commentId)
    throw errorService.badRequestError("Missintparameter(s): commentId");
  const deleteComment = await Comments.deleteComment({ type, commentId });
  if (deleteComment.results.affectedRows === 0)
    throw errorService.badRequestError("Comment not found");
  return { status: "successful" };
};

export const commentsService = {
  getAllComments,
  getCommentById,
  createComment,
  modifyComment,
  deleteComment,
  getHospitalComments,
  getRoomComments,
  getNurseryComments,
};
