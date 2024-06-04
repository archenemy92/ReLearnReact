import {
  Box,
  Button,
  ButtonOwnProps,
  styled,
} from "@mui/material";
import { JSX } from "react";
import { ButtonSizesType, isHex } from "../../common";
import { ICustomButtonType } from "./Button";

interface ICustomButton extends Omit<ButtonOwnProps, "size"> {
  size?: ButtonSizesType;
  children?: any;
  type?: ButtonSizesType;
  background?: string;
}

export const CustomButton = styled(Button)<ICustomButton>`
  min-width: 0;
  width: ${(props) => {
    return `${props.size}px`;
  }};
  background-color: ${(props) =>
    isHex(props.background, "customButton") ? props.background : "#fff"};
` as (props: ICustomButton) => JSX.Element;

interface ButtonContainerType extends ICustomButtonType {}

export const ButtonContainer = styled(Box)<ButtonContainerType>`
  display: flex;
  align-items: center;
` as (props: ButtonContainerType) => JSX.Element;
