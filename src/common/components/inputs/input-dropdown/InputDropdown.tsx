import {ChangeEvent, FC} from "react";
import { MenuItem, TextField } from "@mui/material";

import { useDropdownHTML } from "@/hooks/useDropdownHTML";
import useLabel from "@/hooks/useLabel";

import { dropdown, inputDropdown } from "./InputDropdown.styles";

export interface DropdownOption {
    value: number | string;
    label: string;
}

export interface InputDropdownProps {
    options: DropdownOption[];
    placeholder: string;
    size?: "small" | "medium" | "large";
    variant?: "standard" | "outlined";
    isDisabled?: boolean;
    isRequired?: boolean;
    value?: unknown;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputDropdown: FC<InputDropdownProps> = ({
       options,
       placeholder,
       size = "medium",
       variant = "outlined",
       isDisabled = false,
       isRequired = false,
       value,
       onChange,
   }) => {
    const [label, setLabel] = useLabel(placeholder);
    const [menuItemRef, setStyles] = useDropdownHTML();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e);
        if (onChange) {
            onChange(e);
        }
    };
    return (
        <TextField
            select
            label={label}
            InputLabelProps={{ shrink: false }}
            variant={variant}
            disabled={isDisabled}
            required={isRequired}
            sx={inputDropdown(size)}
            value={value}
            onChange={handleChange}
            onFocus={setStyles}
        >
            {options.map((option) => (
                <MenuItem
                    ref={menuItemRef}
                    key={option.value}
                    value={option.value}
                    sx={dropdown()}
                >
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default InputDropdown;