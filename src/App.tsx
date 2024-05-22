import React from "react";
import "./App.css";
import { MainContent } from "./components/Content/MainContent";
import { Stepper } from "./components/Stepper/Stepper";
import { Box } from "@mui/material";
import { Counter } from "./components/counter/Counter";
import { CheckListManager } from "./components/ChecklistManager/CheckListManager";

const App = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <CheckListManager />
    </Box>
  );
};

export default App;
