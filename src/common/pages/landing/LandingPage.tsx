import { Box, Typography } from "@mui/material";

import Button from "@/common/components/button";

import NavBar from "./common/NavBar";
import * as styles from "./LandingPage.styles";
import Image from "next/image";

import KPIBottomLogo from "../../../../public/logos/bottom.png";

const LandingPage = () => (
    <Box sx={styles.wrapper}>
        <NavBar/>
        <Box sx={styles.mainContent}>
            <Box sx={styles.bottomImage}>
                <Image src={KPIBottomLogo} width={1535} alt={"KPI"}/>
            </Box>
            <Box sx={styles.textContent}>
                <Typography variant="h2">
                    Компілюй та тестуй свій код у реальному часі<br></br><br></br>
                </Typography>
            </Box>
            <Box sx={styles.textContent}>
                <Typography variant="h5">
                    Знову контрольна з програмування?<br></br> Знову 50 камер та демонстрація екрану?
                </Typography>
                <Typography variant="h6">
                    З викорисатанням нашого сервісу такого більше не повториться
                </Typography>
                <Box sx={styles.buttonContainer}>
                    <Button
                        link="./registration"
                        text="Реєстрація"
                        variant="text"
                        size="small"
                    />
                </Box>
            </Box>
        </Box>
    </Box>
);

export default LandingPage;
