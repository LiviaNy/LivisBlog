import { FC } from "react";
import { Comment } from "../models/commmentModels";
import "./Comment.scss";

interface CommentsProps {
  comments: {
    comments: Comment[];
    isModifier: boolean;
  };
}

const Comments: FC<CommentsProps> = (comments) => {
  return (
    <div className="comment-holder">
      {comments.comments.comments.map((x: Comment, index: number) => (
        <div key={index} id={`${x.id}`} className="comment">
          <h1>{x.title}</h1>
          <p>{x.content}</p>
          {comments.comments.isModifier ? (
            <div className="modifier">
              <button className="modify" onClick={() => {}}>
                Modify
              </button>{" "}
              <button className="delete" onClick={() => {}}>
                Delete
              </button>{" "}
            </div>
          ) : (
            <p>--- --- ---</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
