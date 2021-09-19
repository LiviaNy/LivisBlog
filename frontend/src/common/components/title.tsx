import { FC } from "react";

import { TitleProps } from "../models/commonModels";

import "./title.scss";

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="title">
      <p>{title}</p>
    </div>
  );
};

export default Title;
