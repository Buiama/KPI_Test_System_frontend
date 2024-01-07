import { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";

import { input } from "./Input.styles";

export interface InputProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outlined";
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: "password" | "email" | "text";
  value?: unknown;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({
  label,
  size = "large",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
  type = "text",
  value,
  onChange,
}) => (
  <TextField
    label={label}
    variant={variant}
    disabled={isDisabled}
    required={isRequired}
    type={type}
    value={value}
    onChange={onChange}
    sx={input(size)}
  />
);
export default Input;
