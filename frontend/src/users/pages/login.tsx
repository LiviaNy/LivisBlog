import { FC } from "react";
import Title from "../../common/components/title";
import LoginForm from "../components/loginForm";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="register-page">
      <Title title={"title goes here"} />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
