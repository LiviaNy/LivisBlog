import { FC, useState } from "react";
import { Comment, commentApiResDelete } from "../models/commmentModels";
import "./Comment.scss";
import { useHistory } from "react-router-dom";
import { del } from "../../services/apiService";

interface CommentsProps {
  comments: {
    comments: Comment[];
    isModifier: boolean;
  };
}

const Comments: FC<CommentsProps> = (comments) => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const modifyOnclick = () => {
    history.push("/change");
  };

  const deleteOnClick = async (
    id: number | undefined,
    type: string | undefined
  ) => {
    if (id && type) {
      try {
        (await del(`/comment/${id}/${type}`, {}))
          .parsedBody as unknown as commentApiResDelete;
      } catch (error: any) {
        console.log(error);

        const errorMessage = error.message || error;
        setErrorMessage(errorMessage);
      }
    }
  };
  return (
    <div className="comment-holder">
      {comments.comments.comments.map((x: Comment, index: number) => (
        <div key={index} id={`${x.id}`} className="comment">
          <h1>{x.title}</h1>
          <p>{x.content}</p>
          {comments.comments.isModifier ? (
            <div className="modifier">
              <button className="modify" onClick={modifyOnclick}>
                Modify
              </button>{" "}
              <p className="error">{errorMessage}</p>
              <button
                className="delete"
                onClick={() => {
                  deleteOnClick(x.id, x.type);
                }}
              >
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
