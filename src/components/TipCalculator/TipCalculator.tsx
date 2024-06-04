import { ChangeEvent, FC, useState } from "react";
import { Box, Card, TextField } from "@mui/material";
import { ServiceTip } from "./ServiceTip";
import Button from "../common/Button/Button";

interface ITipCalculatorProps {}

export const TipCalculator: FC<ITipCalculatorProps> = ({}) => {
  const [price, setPrice] = useState(0);
  const [percents, setPercents] = useState({
    myLikely: 0,
    friendLikely: 0
  });

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrice(Number(e.currentTarget.value.replace(/[^0-9]/g, "")));
  };

  const handlePercentChange = (value: number, owner: "my" | "friend") => {
    if (owner === "my")
      setPercents((s) => ({
        ...s,
        myLikely: value
      }));
    if (owner === "friend")
      setPercents((s) => ({
        ...s,
        friendLikely: value
      }));
  };

  const myPercent = Math.round(price *(percents.myLikely / 100));
  const friendPercent = Math.round(price * (percents.friendLikely / 100));
  const totalTip = (myPercent + friendPercent) / 2;
  const totalPrice = price + totalTip;
  
  return (
    <Card
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TextField value={price} onChange={handlePriceChange} />
      <ServiceTip price={price} tipOwner="my" onPercentChange={handlePercentChange}>
        myTip
      </ServiceTip>
      <ServiceTip price={price} tipOwner="friend" onPercentChange={handlePercentChange}>
        friendTip
      </ServiceTip>
      <Box>
        {!!price && (
          <p>
            you must pay {totalPrice}$ ({`${price}$`} + {`${totalTip}$`})
          </p>
        )}
      </Box>
      <Button onClick={() => {
        setPrice(0)
       // setPercents({myLikely: 0, friendLikely: 0})
      }}>reset </Button>
    </Card>
  );
};
