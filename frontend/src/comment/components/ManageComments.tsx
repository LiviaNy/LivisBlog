import { FC } from "react";
import { useSelector } from "react-redux";
import { Comment } from "../models/commmentModels";
import Comments from "./Comments";

interface ManageCommentsProps {}

const ManageComments: FC<ManageCommentsProps> = () => {
  const comments: Comment[] = useSelector<any, any>(
    (state) => state.commentReducer.comments
  );
  const userId = useSelector<any, any>((state) => state.userReducer.userId);
  const filtered = comments.filter((x) => x.userid === userId);
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
