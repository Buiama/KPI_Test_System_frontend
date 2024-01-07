import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2vh 3vw",
};

export const linkWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "3rem",
  justifyContent: "flex-end"
};

export const image: SxProps<Theme> = {
  display: "flex",
  flex: "300",
  justifyContent: "center",
};
