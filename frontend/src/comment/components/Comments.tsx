import { FC, useState } from "react";
import { Comment, commentApiResDelete } from "../models/commmentModels";
import "./Comment.scss";
import { useHistory } from "react-router-dom";
import { del, put } from "../../services/apiService";
import Input from "../../common/components/input";

interface CommentsProps {
  comments: {
    comments: Comment[];
    isModifier: boolean;
  };
}

const Comments: FC<CommentsProps> = (comments) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const history = useHistory();
  const modifyOnclick = async (
    title: string,
    content: string,
    id: number,
    type: string
  ) => {
    try {
      (await put(`/comment/${id}`, { type, title, content }))
        .parsedBody as unknown as commentApiResDelete;
      history.push(`/blog/${type}`);
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.message || error;
      setErrorMessage(errorMessage);
    }
  };

  const deleteOnClick = async (
    id: number | undefined,
    type: string | undefined
  ) => {
    if (id && type) {
      try {
        (await del(`/comment/${id}/${type}`, {}))
          .parsedBody as unknown as commentApiResDelete;
        history.push("/blog");
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
          {comments.comments.isModifier ? (
            <div className="input">
              <Input
                placeholder="Change title"
                type="text"
                onChange={setTitle}
              />
            </div>
          ) : (
            <div className="empty" />
          )}
          <p>{x.content}</p>
          {comments.comments.isModifier ? (
            <div>
              <Input
                placeholder="Change content"
                type="text"
                onChange={setContent}
              />
            </div>
          ) : (
            <div className="empty" />
          )}
          {comments.comments.isModifier ? (
            <div className="modifier">
              <button
                className="modify"
                onClick={() => {
                  modifyOnclick(title, content, x.id, x.type);
                }}
              >
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
