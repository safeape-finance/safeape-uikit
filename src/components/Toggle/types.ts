import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
};

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {scale?: "sm" | "lg"};
