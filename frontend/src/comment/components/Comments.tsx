import { FC, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Comment,
  commentApiResDelete,
  CommentsProps,
} from "../models/commmentModels";
import { del, put } from "../../common/services/apiService";
import Input from "../../common/components/Input";
import { ApiError } from "../../common/models/apiModels";

import "./Comment.scss";

const Comments: FC<CommentsProps> = (comments) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
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
      const modifyComment = await put(`/comment/${id}`, {
        type,
        title,
        content,
      });

      if (!modifyComment.response.ok) {
        throw new Error((modifyComment.parsedBody as ApiError).message);
      }

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
              <p className="error">{errorMessage}</p>
              <div className="button-holder">
                <button
                  className="modify"
                  onClick={() => {
                    modifyOnclick(title, content, x.id, x.type);
                  }}
                >
                  Modify
                </button>{" "}
                <button
                  className="delete"
                  onClick={() => {
                    deleteOnClick(x.id, x.type);
                  }}
                >
                  Delete
                </button>{" "}
              </div>
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
