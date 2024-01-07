import { SxProps, Theme } from "@mui/system";

export const input = (size: "small" | "medium" | "large"): SxProps<Theme> => {
  return {
    maxWidth: "100vw",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "blue.400",
    },
    height: size === "small" ? "35px" : size === "medium" ? "35px" : "52px",
    width: size === "small" ? "156px" : size === "medium" ? "300px" : "480px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "&:hover fieldset, &.Mui-focused fieldset": {
        borderColor: "blue.400",
      },
    },
    "& .MuiInput-root:before, & .MuiInput-root:after": {
      borderBottomColor: "blue.400",
    },
  };
};
