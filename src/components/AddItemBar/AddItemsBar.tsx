import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Box, Input, SxProps, Theme } from "@mui/material";
import {
  containerStyle,
  duration, inputsContainerStyle,
  listContainerStyle,
  numberInputStyle,
  textInputStyle,
  transitionStyles
} from "./AddItemsBarStyle";
import { generateListFromNumber, getStyle } from "./common";
import Button from "../common/Button/Button";
import { Transition, TransitionStatus } from "react-transition-group";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addItem } from "../../store/ListSlice";

interface IAddItemsBarProps {
  sx?: SxProps<Theme>;
  sxNumberInputStyle?: SxProps<Theme>;
  sxTextInputStyle?: SxProps<Theme>;
  onClick?: () => void;
  selectNumber?: number;
  descriptions?: string;
}

export const AddItemsBar: FC<IAddItemsBarProps> = ({
  sx,
  sxTextInputStyle,
  sxNumberInputStyle,
  selectNumber = 5,
  descriptions = "add some"
}) => {
  const [number, setNumber] = useState(1);
  const [listNumber, setListNumber] = useState(1);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState<TransitionStatus>("entered");
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  const numberInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (+e.currentTarget.value < 1) return;
    setNumber(+e.currentTarget.value);
  };

  const queryInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.currentTarget.value.replace(/\d+/g, ""));
  };

  const onButtonClickHandler = () => {
    dispatch(addItem({ query, count: number }));
    setQuery("");
    setNumber(1);
    setListNumber(1);
  };
  const onListClickHandler = (num: number) => {
    setListNumber(num);
    setIsOpen(false);
  };
  const onKeyDownHandler = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === "Enter") onButtonClickHandler();
  };

  const list = generateListFromNumber(selectNumber);

  useEffect(() => {
    if (ref.current) {
      setElement(ref.current);
    }
  }, [ref.current]);

  useEffect(() => {
    if (element?.id) setFade(element?.id as TransitionStatus);
  }, [element?.id]);

  useEffect(() => {
    setNumber(listNumber);
  }, [listNumber]);

  return (
    <Box sx={getStyle(sx, containerStyle)}>
      <Box>{descriptions}</Box>
      <Box
        sx={inputsContainerStyle}
      >
        <Box
          className="transitionContainer"
          onWheel={() => setIsOpen(false)}
        >
          <Input
            type="number"
            sx={getStyle(sxNumberInputStyle, numberInputStyle)}
            onChange={numberInputHandler}
            value={number}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            onBlur={() => setIsOpen(false)}
          />
          <Transition
            nodeRef={ref}
            in={isOpen}
            timeout={duration}
            unmountOnExit
          >
            {(state: TransitionStatus) => (
              <Box sx={getStyle(listContainerStyle, transitionStyles[fade])}>
                {list.map((el) => {
                  return (
                    <span
                      ref={ref}
                      key={el}
                      id={state}
                      onClick={() => onListClickHandler(el)}
                    >
                      {el}
                    </span>
                  );
                })}
              </Box>
            )}
          </Transition>
        </Box>
        <Input
          sx={getStyle(sxTextInputStyle, textInputStyle)}
          onChange={queryInputHandler}
          onKeyDown={onKeyDownHandler}
          value={query}
        />
      </Box>
      <Button children="add" onClick={onButtonClickHandler} disabled={!query} />
    </Box>
  );
};
