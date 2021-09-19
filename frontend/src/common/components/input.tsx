import { ChangeEvent, FC, useEffect, useState } from "react";

import { InputProps } from "../models/commonModels";

import "./input.scss";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  validation,
  onChange,
  defaultError,
}) => {
  const [text, setText] = useState<string>("");
  const [errorMessage, setErrrorMessage] = useState<undefined | string>();

  useEffect(() => {
    setErrrorMessage(defaultError);
  }, [defaultError]);

  const validate = (input: string): void => {
    if (!validation) return;
    setErrrorMessage(
      validation?.validate(input) ? undefined : validation.error
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    validate(e.target.value);
    setText(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="user-input">
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        value={text}
        required
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
