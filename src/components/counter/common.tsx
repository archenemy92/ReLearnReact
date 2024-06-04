import React, { JSX } from "react";
import Button from "../common/Button/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ContentHOC = (
  Component: JSX.Element,
  callback: (e: any, title?: string) => void,
  fieldTitle?: string,
  type?: "default" | "slider" | "input",
): JSX.Element => {
  return (
    <>
      {type === "slider" ? (
        Component
      ) : (
        <>
          <Button onClick={(e) => callback(e, fieldTitle)} id="remove">
            <RemoveIcon />
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {Component}
          </Box>
          <Button onClick={(e) => callback(e, fieldTitle)} id="add">
            <AddIcon />
          </Button>
        </>
      )}
    </>
  );
};
