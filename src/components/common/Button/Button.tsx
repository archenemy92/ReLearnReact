import { ButtonContainer, CustomButton } from "./ButtonStyle";
import {
  ButtonBaseProps,
  createTheme,
  ThemeProvider
} from "@mui/material";
import {  useMemo } from "react";
import {  ButtonTypesType, isHex } from "../../common";

export interface ICustomButtonType
  extends Omit<ButtonBaseProps, "size" | "type" | "color"> {
  type?: ButtonTypesType;
  color?: string;
  backgroundColor?: string;
  children?: any;
}

const CustomButtonContainer = (props: ICustomButtonType) => {
  const {
    children,
    type,
    color,
    backgroundColor,
    ...otherProps
  } = props;

  const isLoader = useMemo(() => {
    return type === "loader" ? <>loader</> : null;
  }, [type]);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: color && isHex(color, "button") ? color : "#000"
      }
    }
  });

  return (
    <ThemeProvider theme={customTheme}>
      <ButtonContainer
        className="container"
      >
        <CustomButton
          type={type}
          background={backgroundColor}
          {...otherProps}
        >
          {children}
          {isLoader}
        </CustomButton>
      </ButtonContainer>
    </ThemeProvider>
  );
};

export default CustomButtonContainer;

