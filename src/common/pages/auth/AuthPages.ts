import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  marginTop: "-1.5%",
  flexDirection: "column",
  gap: "32px",
  width: "100vw",
  minHeight: "100vh",
};

export const textContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "8px",
};

export const inputContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "24px",
};

export const rowInput: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "24px",
  marginBottom: "15px",
};

export const buttonContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "16px",
};

export const smallTextContent: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};
