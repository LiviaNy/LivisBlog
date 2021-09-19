import { FC } from "react";

import "./button.scss";
import { ButtonType } from "../models/commonModels";

const Button: FC<ButtonType> = ({ title, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
