import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { MainContent } from "./components/Content/MainContent";
import { Stepper } from "./components/Stepper/Stepper";
import { Counter } from "./components/counter/Counter";
import { CheckListManager } from "./components/ChecklistManager/CheckListManager";
import { TipCalculator } from "./components/TipCalculator/TipCalculator";
import { SplitBill } from "./components/SplitBill/SplitBill";
import RatingComponent from "./components/Rating/Rating";

const App = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <RatingComponent />
    </Box>
  );
};

export default App;
