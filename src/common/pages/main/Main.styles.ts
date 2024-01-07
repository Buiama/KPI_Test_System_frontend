import { SxProps, Theme } from "@mui/system";

export const wrapper: SxProps<Theme> = {
    display: "flex",
    minWidth: "100vw",
    minHeight: "100vh",
};

export const right: SxProps<Theme> = {
    width: "85vw",
    height: "100vh",
    display: "flex",
}

export const transput: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
}

export const panel: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10vh",
}
export const dropdown: SxProps<Theme> = {
    display: "inline-flex",
    paddingBottom: "18px",
    flexDirection: "row",
    width: "23vw",
    justifyContent: "space-around",
    alignItems: "center",
}

export const buttons: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20vw",
}

export const editor: SxProps<Theme> = {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}
