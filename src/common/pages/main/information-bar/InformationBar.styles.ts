import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  minHeight: "100vh",
  width: "fit-content",
  padding: "2vh 3vw 5vh 3vw",
  backgroundColor: "lightBlue.400",
};

export const buttonContainer: SxProps<Theme> = {
  marginTop: "auto",
};

export const buttonSettingsContainer: SxProps<Theme> = {
  marginTop: "5vh",
};