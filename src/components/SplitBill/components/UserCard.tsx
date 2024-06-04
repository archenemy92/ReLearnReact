import { FC } from "react";
import { Box } from "@mui/material";
import Button from "../../common/Button/Button";
import maleImg from "../../../commonFiles/boy.jpeg";
import femaleImg from "../../../commonFiles/girl.jpeg";
import nosex from "../../../commonFiles/nosex.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAction, UserType } from "../../../store/SplitBillSlice";
import { RootState } from "../../../store/store";

interface IUserCardProps {
  user: UserType;
  onOpen: () => void;
  isOpen: boolean;
}

export const UserCard: FC<IUserCardProps> = ({ user, onOpen, isOpen }) => {
  const { urlImage, sex, name, oweDescription, id } = user;

  const userId = useSelector(
    (state: RootState) =>
      state.splitBill.selectedUser && state.splitBill.selectedUser.id
  );

  const dispatch = useDispatch();
  const getImage = (): string => {
    if (!urlImage) {
      if (sex === "male") return maleImg;
      if (!sex) return nosex;
      return femaleImg;
    }
    return urlImage;
  };
  return (
    <Box
      sx={{
        backgroundColor: "beige",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        "&:last-child": {
          marginBottom: "0"
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            "& img": {
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              justifyContent: "space-between",
              margin: "10px 0 0 10px"
            }
          }}
        >
          <img alt={name} src={getImage()} />
          <Box
            sx={{
              "& div": {
                margin: "10px"
              }
            }}
          >
            <Box>{name}</Box>
            <Box>{oweDescription}</Box>
          </Box>
        </Box>
        <Button
          sx={{
            marginRight: "15px",
            width: "80px",
            "&:hover": {
              backgroundColor: isOpen ?"red": "green"
            }
          }}
          backgroundColor={"#fda949"}
          onClick={() => {
            onOpen();
            dispatch(selectUserAction(user));
          }}
        >
          {id === userId && isOpen ? "close" : "select"}
        </Button>
      </Box>
    </Box>
  );
};
