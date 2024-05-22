import { Box, styled } from "@mui/material";

type MainContentContainerType = {};

export const MainContentContainer = styled(Box)<MainContentContainerType>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
` as typeof Box;
