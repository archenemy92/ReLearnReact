import React, { FC, useMemo } from "react";
import { CustomSlider } from "../slider/Slider";
import { Box, TextField } from "@mui/material";
import { ContentHOC } from "./common";

interface IStepProps {
  count?: number;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    title?: string
  ) => void;
  onChange: (value: number, countTitle?: string) => void;
  fieldTitle?: string;
  type?: "input" | "slider" | "default";
}

export const Step: FC<IStepProps> = ({
  fieldTitle,
  onClick,
  count,
  type = "default",
  onChange
}) => {
  const contentType = useMemo(() => {
    if (type === "slider") {
      return ContentHOC(
        <CustomSlider onChange={onChange} countTitle={fieldTitle} value={count} />,
        onClick,
        fieldTitle,
        type,
      );
    }
    if (type === "input") {
      return ContentHOC(
        <TextField
          variant="outlined"
          value={count}
          onChange={(e) =>
            onChange &&
            onChange(+e.currentTarget.value.replace(/[^0-9]/g, ""), "Count")
          }
        />,
        onClick,
        fieldTitle
      );
    }
    if (type === "default") {
      return ContentHOC(
        <>
          {fieldTitle}: {count}
        </>,
        onClick,
        fieldTitle
      );
    }
  }, [type, fieldTitle, count, onClick, onChange]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
      }}
    >
      {contentType}
    </Box>
  );
};
