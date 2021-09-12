import {
  Comments,
  commentTypes,
  GetAllRequest,
} from "../models/commentsModels";

const getAllComments = async ({
  userId,
  type,
}: GetAllRequest): Promise<any> => {
  return await Comments.getComments({ userId, type });
};

export const commentsService = {
  getAllComments,
};
