import { Box } from "@mui/system";
import Image from "next/image";

import Button from "@/common/components/button";

import Logo from "../../../../../public/logos/topSquare.png";

import {
    buttonContainer,
    buttonSettingsContainer,
    wrapper,
} from "./InformationBar.styles";
import {useRouter} from "next/router";

const InformationBar = () => {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('accessJwtToken');
        localStorage.removeItem('refreshJwtToken');
        router.push("/");
    };

    return (
        <Box sx={wrapper}>
            <Image src={Logo} alt={"Logo KPI"}/>
            <Box sx={buttonSettingsContainer}>
                <Button link="/settings" text="Налаштування" size="small" variant={"outlined"}/>
            </Box>
            <Box sx={buttonContainer}>
                <Button link="./" text="Вийти" size="small" variant={"outlined"} onClick={logout}/>
            </Box>
        </Box>
    );
};

export default InformationBar;
