import React, { FC } from "react";
import { Box, Checkbox } from "@mui/material";
import Button from "../common/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { checkedAction, clearList, deleteAction } from "../../store/ListSlice";
import { SelectList } from "../List/SelectList";
import {
  clearListButtonStyle,
  deleteItemButtonStyle,
  listContainerStyle,
  listItemContainerStyle,
  mainContainerStyle,
  selectBlockContainerStyle
} from "./ListContentStyles";

interface IListContentProps {}

export const ListContent: FC<IListContentProps> = () => {
  const list = useSelector((state: RootState) => state.listSlice.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={mainContainerStyle}>
      <Box sx={listContainerStyle}>
        {list.map((el) => {
          return (
            <Box key={el.id} sx={listItemContainerStyle}>
              <Checkbox
                checked={el.checked}
                onClick={() => dispatch(checkedAction(el.id))}
              />
              <span
                style={{
                  textDecoration: `${el.checked ? "line-through" : "none"}`,
                  margin: "0 10px 0 0",
                  color: "#fff"
                }}
              >
                {el.count} {el.value}
              </span>
              <Button
                onClick={() => dispatch(deleteAction(el.id))}
                sx={deleteItemButtonStyle}
              >
                <CloseIcon />
              </Button>
            </Box>
          );
        })}
      </Box>
      <Box sx={selectBlockContainerStyle}>
        <SelectList />
        <Button
          children="Clear List"
          onClick={() => dispatch(clearList())}
          disabled={!list.length}
          sx={clearListButtonStyle}
        />
      </Box>
    </Box>
  );
};
