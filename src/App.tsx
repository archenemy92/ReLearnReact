import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { MainContent } from "./components/Content/MainContent";
import { Stepper } from "./components/Stepper/Stepper";
import { Counter } from "./components/counter/Counter";
import { CheckListManager } from "./components/ChecklistManager/CheckListManager";
import { TipCalculator } from "./components/TipCalculator/TipCalculator";
import { SplitBill } from "./components/SplitBill/SplitBill";

const App = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <SplitBill />
    </Box>
  );
};

export default App;
