import { createTheme } from "@mui/material/styles";

import customPalette from "./palette";
import customTypography from "./typography";

export const theme = createTheme({
  typography: customTypography,
  palette: customPalette,
});
