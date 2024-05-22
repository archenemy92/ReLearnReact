import * as React from "react";
import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  changeSortInstanceAction,
  sortListItemsAction,
  sortType
} from "../../store/ListSlice";

interface ISelectListProps {}

export const SelectList: FC<ISelectListProps> = () => {
  const sort = useSelector((state: RootState) => state.listSlice.sortBy);
  const checked = useSelector((state: RootState) => state.listSlice.list);
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeSortInstanceAction(event.target.value as sortType));
  };

  useEffect(() => {
    dispatch(sortListItemsAction());
  }, [sort]);

  useEffect(() => {
    dispatch(sortListItemsAction());
  }, [checked]);

  return (
    <Box
      sx={{
        display:"flex",
        alignItems: "center",
        backgroundColor: "aqua",
        borderRadius: "20px",
        paddingLeft: "10px",
        height: "30px",
        "& fieldset": { display: "none" },
        "& label": {
          transform: "none",
          left: "10px",
          top: "8px"
        }
      }}
    >
      <Box>Sort: </Box>
      <FormControl sx={{ m: 1, minWidth: "100px" }} size="small">
        <Select
          labelId="select-small-label"
          id="select-small"
          placeholder="Sort By"
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value={"checked"}>By Checked</MenuItem>
          <MenuItem value={"desc"}>By Descending</MenuItem>
          <MenuItem value={"asc"}>By Ascending</MenuItem>
          <MenuItem value={"number"}>By Number</MenuItem>
          <MenuItem value={"default"}>By User</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
