import { FC } from "react";

import Title from "../../../common/components/Title";
import RegisterForm from "../../components/RegisterFrom";
import { RegisterFormProps } from "../../models/registerModel";

import "./register.scss";

export const RegisterPage: FC<RegisterFormProps> = () => {
  return (
    <div className="register-page">
      <Title title={"Register"} />
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
