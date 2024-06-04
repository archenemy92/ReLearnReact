import React, { FC, useState } from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import Button from "../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  changeUserCredentialsAction,
  setUserCredentialsAction
} from "../../../store/SplitBillSlice";

interface ISplitBillWithUserProps {}

export const SplitBillWithUser: FC<ISplitBillWithUserProps> = () => {
  const user = useSelector((state: RootState) => state.splitBill.selectedUser);

  const [billValue, setBillValue] = useState("");
  const [ownExpense, setOwnExpense] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [billPayer, setBillPayer] = useState("");

  const dispatch = useDispatch();

  const onlyNumbersQuery = (value: string) => {
    return value.replace(/[^0-9]/g, "");
  };

  return (
    <Box className="formContainer">
      <form className="form" onChange={(e) => e.preventDefault()}>
        <Box className="formField">
          <Box className="description">Bill value: </Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={billValue}
              onChange={(e) =>
                setBillValue(onlyNumbersQuery(e.currentTarget.value))
              }
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">Your expense: </Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={ownExpense}
              onChange={(e) =>
                setOwnExpense(onlyNumbersQuery(e.currentTarget.value))
              }
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">{user && user.name} expanse:</Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={(Number(billValue) - Number(ownExpense)).toString()}
              disabled
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">Who is pay the bill?:</Box>
          <Box className="inputContainer">
            <Select
              className="input"
              value={billPayer}
              onChange={(e) => setBillPayer(e.target.value)}
            >
              <MenuItem value="you">You</MenuItem>
              <MenuItem value="user">{user && user.name}</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description" />
          <Button
            onClick={() => {
              dispatch(
                setUserCredentialsAction({
                  bill: billValue,
                  ownExpense: userExpense,
                  debtorExpense: ownExpense,
                  payer: billPayer,
                  id: user!.id || ""
                })
              );
              dispatch(
                changeUserCredentialsAction({
                  billValue: +billValue,
                  ownExpense: +userExpense,
                  userExpense: +ownExpense,
                  id: user!.id || "",
                  payer: billPayer
                })
              );
              setBillValue("");
              setOwnExpense("");
              setUserExpense("");
              setBillPayer("");
            }}
            disabled={!billPayer || !billValue}
            backgroundColor={"#fda949"}
          >
            split
          </Button>
        </Box>
      </form>
    </Box>
  );
};
