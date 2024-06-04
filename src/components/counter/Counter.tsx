import { Card } from "@mui/material";
import React, { useState } from "react";
import { DateTime } from "./DateTime";
import { Step } from "./Step";
import Button from "../common/Button/Button";

export const Counter = () => {
  const [state, setState] = useState({
    step: 1,
    count: 0
  });

  const countHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    countTitle?: string
  ) => {
    if (e.currentTarget.id === "add") {
      if (countTitle === "Step")
        setState((s) => ({
          ...s,
          step: s.step + 1
        }));
      if (countTitle === "Count")
        setState((s) => ({
          ...s,
          count: s.count + s.step
        }));
    }
    if (e.currentTarget.id === "remove") {
      if (countTitle === "Step")
        setState((s) => ({
          ...s,
          step: s.step === 1 ? 1 : s.step - 1
        }));
      if (countTitle === "Count")
        setState((s) => ({
          ...s,
          count: s.count - s.step
        }));
    }
  };

  const onChangeHandler = (value: number, countTitle?: string) => {
    if (countTitle === "Step")
      setState((s) => ({
        ...s,
        step: value
      }));
    if (countTitle === "Count")
      setState((s) => ({
        ...s,
        count: value
      }));
  };

  return (
    <Card
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Step
        type={"slider"}
        fieldTitle={"Step"}
        onClick={countHandler}
        onChange={onChangeHandler}
        count={state.step}
      />
      <Step
        type={"input"}
        fieldTitle={"Count"}
        onClick={countHandler}
        count={state.count}
        onChange={onChangeHandler}
      />
      <DateTime count={state.count} />
      <Button
        children={"RESET"}
        onClick={() => setState({ step: 1, count: 0 })}
      />
    </Card>
  );
};
