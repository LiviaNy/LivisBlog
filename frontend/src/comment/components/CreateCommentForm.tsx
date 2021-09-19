import { FC, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router";

import Input from "../../common/components/Input";
import Button from "../../common/components/Button";
import { post } from "../../common/services/apiService";
import { ApiError, apiServiceOutput } from "../../common/models/apiModels";
import { ApiCallBody } from "../models/commmentModels";

import "./createCommentForm.scss";

interface CreateCommentFromProps {}

const CreateCommentFrom: FC<CreateCommentFromProps> = () => {
  const history = useHistory();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const body: ApiCallBody = {
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
      const newComment:apiServiceOutput = await post("/comment", body, false);
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
        <option id="value" value="select" defaultValue="Choose category">
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
