import { commentParams, Comments } from "../models/commentsModels";

const fillCommentValues = (comment: commentParams): commentParams => {
  delete comment.userid;
  return comment;
};

const getAllComments = async (userId: number): Promise<any> => {
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

export const commentsService = {
  getAllComments,
};
