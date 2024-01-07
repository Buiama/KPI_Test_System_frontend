import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  height: "100vh",
  width: "100vw",
};

export const mainContent: SxProps<Theme> = {
  display: "flex",
  minHeight: "80vh",
  padding: "0 3vw 200px 3vw",
  alignItems: "center",
};

export const textContent: SxProps<Theme> = {
  width: "50%",
  marginLeft: "5%",
};

export const buttonContainer: SxProps<Theme> = {
  padding: "12px 0",
};

export const bottomImage: SxProps<Theme> = {
  width: "100vw",
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 'auto',
};
