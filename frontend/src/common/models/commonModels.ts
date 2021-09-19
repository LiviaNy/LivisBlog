import { SyntheticEvent } from "react";

export type ButtonType = JSX.IntrinsicElements["button"] & {
  title: string;
  type?: string;
  onClick?: (e: SyntheticEvent) => void;
};

export interface HeaderInteface {}

export interface InputProps {
  type?: string;
  placeholder?: string;
  validation?: {
    validate: (text: string) => boolean;
    error: string;
  };
  onChange?: (text: string) => void;
  defaultError?: string | undefined;
}

export interface TitleProps {
  title: string;
}
