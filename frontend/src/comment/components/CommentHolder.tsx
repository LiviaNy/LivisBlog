import { FC } from "react";
import { useSelector } from "react-redux";
import { Comment } from "../models/commmentModels";
import "./commentHolder.scss";
import Comments from "./Comments";

interface CommentHolderProps {
  type: string;
}

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
