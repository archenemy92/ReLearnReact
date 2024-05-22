import { SxProps, Theme } from "@mui/material";

export const style: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  "& img": {
    width: "300px",
    height: "100px",
    mixBlendMode: "multiply"
  }
};
