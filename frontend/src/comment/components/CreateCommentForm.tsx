import { FC, SyntheticEvent, useState } from "react";
import Input from "../../common/components/input";
import Button from "../../common/components/button";
import { post } from "../../services/apiService";
import { ApiError } from "../../services/models/apiModels";
import "./createCommentForm.scss";
import { useHistory } from "react-router";

interface CreateCommentFromProps {}

const CreateCommentFrom: FC<CreateCommentFromProps> = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const body = {
    type,
    title,
    content,
  };

  const postComment = async (e: SyntheticEvent) => {
    e.preventDefault();

    setErrorMessage("");
    if (title.length < 1) {
      setErrorMessage("Title is required");
      return;
    }
    if (content.length < 1) {
      setErrorMessage("Please tell us your thoughts.");
      return;
    }
    if (!type) {
      setErrorMessage("Please choose category");
      return;
    }
    try {
      const newComment = await post("/comment", body, false);
      if (!newComment.response.ok)
        throw new Error((newComment.parsedBody as ApiError).message);
    } catch (error: any) {
      setErrorMessage(error.message || error);
    }
    history.push(`/blog/${type}`);
  };
  return (
    <form className="form">
      <p className="error">{errorMessage}</p>
      <select name="type" id="types" onChange={(e) => setType(e.target.value)}>
        <option id="value" value="select" disabled>
          Please choose category
        </option>
        <option value="hospital">What to put in your Hospital Bag?</option>
        <option value="room">Ultimate chekclist of baby essentials</option>
        <option value="nursery">Daycare packing list</option>
      </select>
      <Input type="text" onChange={setTitle} placeholder="Title"></Input>
      <Input type="text" onChange={setContent} placeholder="Content"></Input>
      <Button
        title="Submit your thoughts"
        onClick={postComment}
        type={"submit"}
      ></Button>
    </form>
  );
};

export default CreateCommentFrom;
