import { useRef } from "react";

export const useDropdownHTML = () => {
    const menuItemRef = useRef<HTMLLIElement | null>(null);

    const handleDropdown = () => {
        const ulElement = menuItemRef.current?.parentNode as HTMLElement;
        if (ulElement) {
            const divElement = ulElement.parentNode as HTMLElement;
            divElement.style.borderRadius = "10px";
        }
    };

    return [menuItemRef, handleDropdown] as const;
};