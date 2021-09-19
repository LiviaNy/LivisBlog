import { FC, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router";

import Button from "../../common/components/Button";
import Input from "../../common/components/Input";
import { post } from "../../common/services/apiService";
import { ApiError } from "../../common/models/apiModels";
import { LoginFormProps, LoginResponse } from "../models/loginModels";

import "./loginForm.scss";

const LoginForm: FC<LoginFormProps> = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<undefined | string>();
  const [userError, setUserError] = useState<undefined | string>();
  const [passwordError, setPasswordError] = useState<undefined | string>();

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setUserError("");
    setPasswordError("");
    if (!username || password.length < 8) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const loginUser = await post("/login", { username, password }, false);
      if (!loginUser.response.ok)
        throw new Error((loginUser.parsedBody as ApiError).message);
      const token = await (loginUser.parsedBody as LoginResponse).token;
      localStorage.setItem("token", token);
      history.push("/blog");
    } catch (error: any) {
      const errorMessage = error.message || error;
      if (
        errorMessage.toLowerCase().includes("username") &&
        errorMessage.toLowerCase().includes("password")
      ) {
        setErrorMessage(errorMessage);
      } else if (errorMessage.toLowerCase().includes("password")) {
        setPasswordError(errorMessage);
      } else if (errorMessage.toLowerCase().includes("username")) {
        setUserError(errorMessage);
      } else {
        setErrorMessage(errorMessage);
      }
    }
  };

  const validateUsername = {
    validate: (input: string): boolean => !!input,
    error: userError || "Username is required.",
  };
  const validatePassword = {
    validate: (input: string): boolean => input.length > 7,
    error: passwordError || "Password must be at least 8 characters.",
  };

  return (
    <form onSubmit={login} className="from">
      <p className="error-message">{errorMessage}</p>
      <Input
        type="text"
        onChange={setUsername}
        validation={validateUsername}
        placeholder="username"
        defaultError={userError}
      />
      <Input
        type="password"
        onChange={setPassword}
        validation={validatePassword}
        placeholder="Password"
        defaultError={passwordError}
      />
      <Button title="LOGIN" onClick={login} type="submit" />
    </form>
  );
};

export default LoginForm;
