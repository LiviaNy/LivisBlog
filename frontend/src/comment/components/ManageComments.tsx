import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { User, UserState } from "../../users/models/userModels";
import { Comment } from "../../comment/models/commmentModels";
import { CommentState, ManageCommentsProps } from "../models/commmentModels";
import Comments from "./Comments";

const ManageComments: FC<ManageCommentsProps> = () => {
  const comments: CommentState = useSelector<RootState, CommentState>(
    (state) => state.commentReducer
  );

  const user: User = useSelector<RootState, UserState>(
    (state) => state.userReducer
  );

  const filtered: Comment[] = comments.comments.filter(
    (x) => x.userid === user.userId
  );

  const props = {
    comments: filtered,
    isModifier: true,
  };

  return (
    <div className="comments">
      <Comments comments={props} />
    </div>
  );
};

export default ManageComments;
