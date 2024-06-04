import { FC, useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../../store/SplitBillSlice";
import { v4 as uuidv4 } from "uuid";
import { Form } from "../../Form/DynamicForm";
import { RootState } from "../../../store/store";

interface IAddUserProps {}

export const AddUser: FC<IAddUserProps> = () => {
  const [userName, setUserName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const userForm = useSelector(
    (state: RootState) => state.formsSlice.addUserForm
  );

  const dispatch = useDispatch();

  /*const addUserHandler = () => {
    if (userName) {
      dispatch(
        addUserAction({
          id: uuidv4(),
          name: fields ? fields["Name"] : ""
        })
      );
    }
    setAvatarURL("");
    setUserName("");
    setIsOpen(!isOpen);
  };*/

  return (
    <Box
      sx={{
        backgroundColor: "beige",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        marginTop: "10px",
        "& .container": {
          justifyContent: "end"
        }
      }}
    >
      {
        <Box>
          {/*  <form onChange={(e) => e.preventDefault()}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>Name: </span>
              <TextField
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>Image URL: </span>
              <TextField
                value={avatarURL}
                onChange={(e) => setAvatarURL(e.currentTarget.value)}
              />
            </Box>
          </form>*/}
          <Form fields={userForm}/>
        </Box>
      }
      {/*<Box
        sx={{
          margin: "10px 15px 10px 0"
        }}
      >
        <Button backgroundColor={"#fda949"} onClick={addUserHandler}>
          button
        </Button>
      </Box>*/}
    </Box>
  );
};
