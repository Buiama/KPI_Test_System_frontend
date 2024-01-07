import {Box, Typography} from "@mui/material";
import Image from "next/image";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";

import KPITopLogo from "../../../../../../public/logos/top.png";

import * as styles from "./NavBar.styles";

const NavBar = () => (
  <Box sx={styles.wrapper}>
      <Typography variant="h4Bold">KPI Test System&nbsp;</Typography>
      <Box sx={styles.image}>
        <Image src={KPITopLogo} alt="KPI logo"/>
      </Box>
    <Box sx={styles.linkWrapper}>
      <HyperLink source="/login" text="Вхід" />
      <Button link="/registration" text="Реєстрація" size="small" />
    </Box>
  </Box>
);

export default NavBar;
