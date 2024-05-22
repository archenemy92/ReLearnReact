import { Box, Card } from "@mui/material";
import { stepsData } from "../../mockData/stepsData";
import Button from "../common/Button/Button";
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NumOfSteps } from "./NumOfSteps";
import { commonButtonStyle } from "./common";
export const Stepper = () => {
  const [state, setState] = useState([...stepsData]);
  const [activeStep, setActiveStep] = useState(1);

  const step = useMemo(() => {
    return state
      .filter((step) => (step.num === activeStep ? step : null))
      .map(({ step, description, id }) => {
        return (
          <span key={uuidv4()}>
            {step}: {description}
          </span>
        );
      });
  }, [activeStep]);

  const stepHandler = (num: number) => {
    setActiveStep(num);
  };

  const prevStepHandler = () => {
    activeStep <= 1 ? setActiveStep(1) : setActiveStep((prev) => prev - 1);
  };

  const nextStepHandler = () => {
    activeStep >= state.length
      ? setActiveStep(activeStep)
      : setActiveStep((prev) => prev + 1);
  };

  return (
    <Card
      sx={{
        marginTop: "1rem",
        width: "50%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "10px"
        }}
      >
        <NumOfSteps
          state={state}
          activeStep={activeStep}
          stepHandler={stepHandler}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      >
        {step}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "1rem",
          width: "100%"
        }}
      >
        <Button
          onClick={prevStepHandler}
          backgroundColor={"#4a32a8"}
          color={"#fff"}
          disabled={activeStep <= 1}
          sx={commonButtonStyle}
        >
          prev
        </Button>
        <Button
          color={"#fff"}
          backgroundColor={"#4a32a8"}
          onClick={nextStepHandler}
          disabled={activeStep >= state.length}
          sx={commonButtonStyle}
        >
          next
        </Button>
      </Box>
    </Card>
  );
};
