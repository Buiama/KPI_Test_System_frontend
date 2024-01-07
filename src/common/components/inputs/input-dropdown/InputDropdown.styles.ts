import { blue, lightBlue } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

export const inputDropdown = (
    size: "small" | "medium" | "large"
): SxProps<Theme> => {
    return {
        maxWidth: "100vw",
        height:
            size === "small" ? "33px" : size === "medium" ? "41.83px" : "47.8px",
        width: size === "small" ? "156px" : size === "medium" ? "330px" : "380px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue.400",
        },
        "& .MuiInput-root:before, & .MuiInput-root:after": {
            borderColor: "blue.400",
        },
    };
};

export const dropdown = (): SxProps<Theme> => {
    return {
        "&:hover, :focus": {
            backgroundColor: blue[50],
        },
    };
};