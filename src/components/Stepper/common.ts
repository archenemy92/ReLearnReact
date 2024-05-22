import { SxProps, Theme } from "@mui/material";

export const commonButtonStyle: SxProps<Theme> = {
  "&:hover": {
    backgroundColor: "#d4e080"
  },
  "&:disabled": {
    color: "#fff",
    backgroundColor: "gray"
  }
};
