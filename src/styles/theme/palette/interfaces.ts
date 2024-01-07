import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    darkBlue?: Palette["primary"];
    blue?: Palette["primary"];
    LightBlue?: Palette["primary"];
  }

  interface PaletteOptions {
    darkBlue?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    LightBlue?: PaletteOptions["primary"];
  }
}
