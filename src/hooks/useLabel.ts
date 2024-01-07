import { ChangeEvent, useState } from "react";

const useLabel = (placeholder: string) => {
    const [label, setLabel] = useState(placeholder);

    const labelToPlaceholder = (event: ChangeEvent<HTMLInputElement>) => {
        setLabel(event.target.value ? "" : placeholder);
    };

    return [label, labelToPlaceholder] as const;
};

export default useLabel;