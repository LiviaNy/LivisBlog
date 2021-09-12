import { FC } from "react";
import "./title.scss";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="title">
      <p>{title}</p>
    </div>
  );
};

export default Title;
