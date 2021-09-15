export const fetchCommentList = (payload: any) => {
  return {
    type: "FETCH_COMMENT_LIST",
    payload,
  };
};
