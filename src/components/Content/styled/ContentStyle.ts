import { Box, styled } from "@mui/material";

type ContentContainerType = {};

export const ContentContainer = styled(Box)<ContentContainerType>`
    display: inherit;
    width: inherit;
    height: inherit;
    justify-content: center;
    flex-wrap: wrap;
` as typeof Box;
