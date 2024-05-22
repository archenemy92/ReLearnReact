import { createEmptyObjectsArray } from "../common";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import Button from "../common/Button/Button";
import React from "react";

interface INumOfSteps {
  state: {
    id: string;
    num: number;
    step: string;
    description: string;
    icon: string;
  }[];
  activeStep: number;
  stepHandler: (step: number) => void;
}

export const NumOfSteps = ({ state, activeStep, stepHandler }: INumOfSteps) => {
  const chunkedItems = [];
  const chunkSize = 5;
  for (let i = 0; i < state.length; i += chunkSize) {
    chunkedItems.push(state.slice(i, i + chunkSize));
  }
  return (
    <>
      {chunkedItems.map((chunk) => {
        const newArray = createEmptyObjectsArray(
          chunkSize,
          {
            id: uuidv4(),
            num: 0,
            step: "",
            description: "",
            icon: ""
          },
          chunk
        );

        return (
          <Box
            key={uuidv4()}
            sx={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem"
            }}
          >
            {newArray.map((step, i) => {
              console.log(
                "i---",
                i,
                "step---",
                step.num,
                "active---",
                activeStep
              );
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: `${100 / chunkSize}%`,
                    zIndex: 1
                  }}
                  key={uuidv4()}
                >
                  <Button
                    className={`${step.num <= activeStep - 1 ? "current" : "prev"}`}
                    key={step.id}
                    onClick={() => stepHandler(step.num)}
                    sx={{
                      zIndex: 2,
                      display: `${step.num === 0 && "none"}`,
                      position: "relative",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      backgroundColor: `${step.num === activeStep ? "red" : "gray"} `,
                      "&:hover": {
                        backgroundColor: `${step.num === activeStep ? "red" : "#d4e080"}`
                      },
                      "&:disabled": {
                        color: "#fff"
                      },
                      "&.current": {
                        backgroundColor: "#33FF50"
                      }
                    }}
                    color={"#fff"}
                    disabled={step.num === activeStep}
                  >
                    {step.num}
                  </Button>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </>
  );
};
