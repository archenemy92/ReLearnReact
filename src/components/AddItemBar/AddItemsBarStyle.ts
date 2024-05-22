import { SxProps, Theme } from "@mui/material";

export const duration = 300;

export const containerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
  width: "100%",
  backgroundColor: "#e4771d"
};
export const numberInputStyle: SxProps<Theme> = {
  zIndex: 3,
  backgroundColor: "beige",
  borderRadius: "20px",
  width: "60px",
  overflow: "hidden",
  "&::after": {
    display: "none"
  },
  "&::before": {
    display: "none"
  },
  "& input[type=number]": {
    textAlign: "center",
    MozAppearance: "textfield",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    }
  }
};
export const textInputStyle: SxProps<Theme> = {
  backgroundColor: "beige",
  borderRadius: "20px",
  textAlign: "center",
  width: "150px",
  "& input": {
    textAlign: "center"
  },
  "&::after": {
    display: "none"
  },
  "&::before": {
    display: "none"
  }
};

export const listContainerStyle: SxProps<Theme> = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  backgroundColor: "beige",
  cursor: "pointer",
  top: "110%",
  borderRadius: "20px",
  padding: "5px 0 5px 0"
};

export const transitionStyles: { [id: string]:  SxProps<Theme> } = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

export const inputsContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3,
  margin: "0 5px",
  "& .transitionContainer": {
    position: "relative",
    margin: "0 5px"
  }
}