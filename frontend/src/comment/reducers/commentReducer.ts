const intialCommentList = { comments: [] };
export const commentReducer = (state: any = intialCommentList, action: any) => {
  switch (action.type) {
    case "FETCH_COMMENT_LIST": {
      const newState = {
        comments: [...action.payload.comments],
      };
      return newState;
    }
    default:
      return state;
  }
};
