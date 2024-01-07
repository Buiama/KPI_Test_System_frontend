import { SxProps, Theme } from "@mui/system";

export const button = (
  size: "small" | "large",
  variant: "contained" | "outlined" | "text"
): SxProps<Theme> => ({
  borderRadius: "4px",
  textTransform: "none",
  minHeight: "fit-content",
  minWidth: "fit-content",
  height: size === "small" ? "45px" : "52px",
  width: size === "small" ? "141px" : "480px",
  maxWidth: "100vw",
  ...(variant === "contained" && {
    backgroundColor: "blue.400",
    "&:hover, &.Mui-focused": {
      backgroundColor: "blue.400",
    },
  }),
  ...(variant !== "contained" && {
    borderColor: "blue.400",
    color: "blue.400",
    "&:hover": {
      borderColor: "blue.400",
    },
  }),
});
