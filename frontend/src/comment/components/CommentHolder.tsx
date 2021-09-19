import { FC } from "react";
import { useSelector } from "react-redux";

import { Comment, CommentHolderProps } from "../models/commmentModels";
import Comments from "./Comments";

import "./commentHolder.scss";

const CommentsHolder: FC<CommentHolderProps> = (type) => {
  const comments: Comment[] = useSelector<any, any>(
    (state) => state.commentReducer.comments
  );
  const filtered: Comment[] = comments.filter((x) => x.type === type.type);
  const props = {
    comments: filtered,
    isModifier: false,
  };
  return (
    <div className="comments">
      <p>read comments below</p>
      <Comments comments={props} />
    </div>
  );
};

export default CommentsHolder;
