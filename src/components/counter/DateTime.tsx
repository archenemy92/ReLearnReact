import React, { FC } from "react";
import { Box } from "@mui/material";

interface DateTimeProps {
  count: number;
}

export const DateTime: FC<DateTimeProps> = ({ count }) => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "10px 0"
      }}
    >
      {message(count)} : {formatDate(calcDate)}
    </Box>
  );
};
