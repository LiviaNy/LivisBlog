import { FC } from "react";
import { useSelector } from "react-redux";
import { Comment } from "../models/commmentModels";
import "./commentHolder.scss";

interface CommentHolderProps {
  type: string;
}

const CommentsHolder: FC<CommentHolderProps> = (type) => {
  const comments: Comment[] = useSelector<any, any>(
    (state) => state.commentReducer.comments
  );

  const filtered: Comment[] = comments.filter((x) => x.type === type.type);
  return (
    <div className="comments">
      <p>read comments below</p>
      {filtered.map((x: Comment, index: number) => (
        <div key={index} className="comment">
          <h1>{x.title}</h1>
          <p>{x.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsHolder;
