import { Box, styled } from "@mui/material";

type FooterContainerType = {};

export const FooterContainer = styled(Box)<FooterContainerType>`
    display: inherit;
    width: inherit;
    height: inherit;
    justify-content: center;
    flex-wrap: wrap;
` as typeof Box;
