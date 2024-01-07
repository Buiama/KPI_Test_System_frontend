import { FC } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

export interface HyperLinkProps {
  source: string;
  text: string;
}

const HyperLink: FC<HyperLinkProps> = ({ source, text }) => (
  <Link href={source}>
    <Typography variant="body2Medium">{text}</Typography>
  </Link>
);

export default HyperLink;
