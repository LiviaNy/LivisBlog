import { FC } from "react";
import Title from "../../common/components/title";
import LoginForm from "../components/loginForm";
import "./login.scss";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="login-page">
      <Title title={"Login"} />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
