import { FC } from "react";

import Title from "../../../common/components/Title";
import LoginForm from "../../components/LoginForm";
import { LoginPageProps } from "../../models/loginModels";

import "./login.scss";

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="login-page">
      <Title title={"Login"} />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
