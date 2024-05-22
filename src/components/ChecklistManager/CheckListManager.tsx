import { Box } from "@mui/material";
import { FC } from "react";
import { Header } from "../Header/Header";
import { AddItemsBar } from "../AddItemBar/AddItemsBar";
import { Footer } from "../Footer/Footer";
import { ListContent } from "./ListContent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IChecklistManagerProps {}

export const CheckListManager: FC<IChecklistManagerProps> = () => {
  const state = useSelector((state: RootState) => state.listSlice.list);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        zIndex: 0
      }}
    >
      <Header
        sx={{
          backgroundColor: "#f3a125",
          width: "100%"
        }}
      />
      <AddItemsBar />
      <ListContent />
      {!!state.length && <Footer />}
    </Box>
  );
};
