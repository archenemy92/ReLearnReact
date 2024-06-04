import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { contentContainerStyle, mainContainerStyle } from "./SplitBillStyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { UserCard } from "./components/UserCard";
import { SplitBillWithUser } from "./components/SplitBillWithUser";
import { AddUser } from "./components/AddUser";

interface ISplitBillProps {}

export const SplitBill: FC<ISplitBillProps> = () => {
  const users = useSelector((state: RootState) => state.splitBill.users);
  const id = useSelector((state: RootState) => state.splitBill.selectedUser);
  const [isOpenCalculate, setIsOpenCalculate] = useState(false);

  const dispatch = useDispatch();

  const openCalculateHandler = () => {
    setIsOpenCalculate((open) => !open);
  };

  useEffect(() => {
    if (id) {
      setIsOpenCalculate(true)
    }
  }, [id]);

  return (
    <Box sx={mainContainerStyle}>
      <Box sx={contentContainerStyle}>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            boxSizing: "border-box"
          }}
        >
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                onOpen={openCalculateHandler}
                isOpen={isOpenCalculate}
              />
            );
          })}
        </Box>
        <AddUser />
      </Box>
      <Box sx={contentContainerStyle}>
        {isOpenCalculate && <SplitBillWithUser />}
      </Box>
    </Box>
  );
};
