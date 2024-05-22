import { style } from "../Content/styled/headerContainerStyle";
import { FC } from "react";
import logo from "../../commonFiles/logo.jpeg";
import { Box, SxProps, Theme } from "@mui/material";

interface IHeaderProps {
  sx?: SxProps<Theme>;
  descriptions?: string;
  alt?: string;
  src?: string;
}

export const Header: FC<IHeaderProps> = ({ sx, descriptions, alt, src }) => {
  const updatedStyle: SxProps<Theme> = {
    ...style,
    ...sx
  } as SxProps<Theme>;

  return (
    <Box sx={{ ...updatedStyle }} >
      <img src={src || logo} alt={alt || "logo"} />
      {descriptions && <Box>{descriptions}</Box>}
    </Box>
  );
};
