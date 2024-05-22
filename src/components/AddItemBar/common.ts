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

export const generateListFromNumber = (number: number): number[] => {
  if (!isNaN(number) && number > 0) {
    return Array.from({ length: number }, (_, i) => i + 1);
  }
  return [];
};
