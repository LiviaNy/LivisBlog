import { FC } from "react";
import CreateCommentForm from "../../comment/components/CreateCommentForm";

interface CreateCommentProps {}

const CreateComment: FC<CreateCommentProps> = () => {
  return (
    <div className="create-comment">
      <p>You may leave your thoughts here.</p>
      <CreateCommentForm />
    </div>
  );
};

export default CreateComment;
