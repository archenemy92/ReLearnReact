import { Box, Card } from "@mui/material";
import Button from "../common/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { FC, useState } from "react";

interface IStepProps {
  step: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  nameCount: string;
}

export const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const countHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "add") {
      setCount((count) => count + step);
    }
    if (e.currentTarget.id === "remove") {
      setCount((count) => count - step);
    }
  };
  const stepHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.id === "add") {
      setStep((step) => step + 1);
    }
    if (e.currentTarget.id === "remove") {
      if (step === 1) return;
      setStep((step) => step - 1);
    }
  };

  return (
    <Card>
      <Step nameCount={"Step"} onClick={stepHandler} step={step} />
      <Step nameCount={"Count"} onClick={countHandler} step={count} />
      <DateTime count={count} />
    </Card>
  );
};

const Step: FC<IStepProps> = ({ nameCount, onClick, step }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Button onClick={(e) => onClick(e)} id="remove">
        <RemoveIcon />
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {nameCount}: {step}
      </Box>
      <Button onClick={(e) => onClick(e)} id="add">
        <AddIcon />
      </Button>
    </Box>
  );
};

interface DateTimeProps {
  count: number;
}

const DateTime: FC<DateTimeProps> = ({ count }) => {
  const date = new Date();
  const addDays = (date: any, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date: any) => {
    const options = {
      month: "long",
      weekday: "long",
      day: "numeric",
      year: "numeric"
    };
    return date.toLocaleDateString("uk-UA", options);
  };

  const message = (num: number): string => {
    if (num === 0) return `today`;
    if (num < 0) {
      const str = num.toString().replace(/-/g, "");
      return `${str} days ago was`;
    }
    return `${num} days from today is`;
  };

  const calcDate = addDays(date, count);
  return (
    <Box>
      {message(count)} : {formatDate(calcDate)}
    </Box>
  );
};
