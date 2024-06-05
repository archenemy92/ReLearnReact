import { SxProps, Theme } from "@mui/material";

export const getStyle = (
  propsStyle?:  SxProps<Theme> ,
  commonStyle?:  SxProps<Theme>
): SxProps<Theme> => {
  return {
    ...propsStyle,
    ...commonStyle
  } as  SxProps<Theme> ;
};


