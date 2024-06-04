import { FC, ReactNode, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IServiceTipProps {
  children?: ReactNode;
  onPercentChange: (percent: number, owner: "my" | "friend") => void;
  tipOwner: "my" | "friend",
  price: number;
}

export const ServiceTip: FC<IServiceTipProps> = ({children, tipOwner,price, onPercentChange}) => {
  const [percent, setPercent] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setPercent(event.target.value as string);
  };

  useEffect(() => {
  onPercentChange(Number(percent), tipOwner)
  }, [percent]);

  useEffect(() => {
    if (!price) setPercent("")
  }, [price]);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }}>
      <Box>
        {children}
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            id="tipSelect"
            value={percent}
            onChange={handleChange}
          >
            <MenuItem value={5}>5 %</MenuItem>
            <MenuItem value={10}>10 %</MenuItem>
            <MenuItem value={20}>20 %</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
