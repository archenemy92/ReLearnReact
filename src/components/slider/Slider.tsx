import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { FC, useEffect } from "react";

const MAX = 10;
const MIN = 1;
const marks = [
  {
    value: MIN,
    label: ""
  },
  {
    value: MAX,
    label: ""
  }
];

interface ISliderProps {
  countTitle?: string;
  onChange: (value: number, countTitle?: string) => void;
  value?: number;
}

export const CustomSlider: FC<ISliderProps> = ({
  onChange,
  countTitle,
  value
}) => {
  const [val, setVal] = React.useState<number>(value ? value : MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  useEffect(() => {
    onChange(val, countTitle);
  }, [val]);

  useEffect(() => {
    if (value === 1) setVal(MIN);
  }, [value]);

  return (
    <Box sx={{ width: 200, margin: "30px 0 10px 0" }}>
      <Slider
        marks={marks}
        step={1}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: "pointer" }}
        >
          {MIN} min
        </Typography>
        {val}
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: "pointer" }}
        >
          {MAX} max
        </Typography>
      </Box>
    </Box>
  );
};
