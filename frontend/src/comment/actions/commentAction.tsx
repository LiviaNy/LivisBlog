import { CommentList } from "../models/commmentModels";

export const fetchCommentList = (payload: CommentList) => {
  return {
    type: "FETCH_COMMENT_LIST",
    payload,
  };
};
