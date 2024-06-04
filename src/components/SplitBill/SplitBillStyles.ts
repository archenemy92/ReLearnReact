import { SxProps, Theme } from "@mui/material";

export const mainContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  padding: "0 10px"
};
export const contentContainerStyle: SxProps<Theme> = {
  margin: "5px",
  display: "flex",
  minWidth: "50%",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  "& .formContainer": {
    backgroundColor: "beige",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  "& .formField": {
    width: "calc(100% - 10px)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "5px",
    "& .description": {
      width: "50%"
    },
    "& .container": {
      width: "50%",
      justifyContent: "end"
    },
    "& .inputContainer": {
      width: "50%",
      "& .input": {
        width: "100%"
      }
    }
  }
};
