import { FC, useState } from "react";
import { Icon } from "@mui/material";
import { generateListFromNumber } from "../common/commonFunctions";
import StarIcon from "@mui/icons-material/Star";

interface IRatingProps {
  numOfRatingsPoint?: number;
  pointColor?: string;
  pointSize?: number;
  onRatingStatus?: (value: number) => void
}

const Rating: FC<IRatingProps> = ({
  numOfRatingsPoint = 10,
  pointColor = "red",
  pointSize = 20
}) => {
  const ratingPoints = generateListFromNumber(numOfRatingsPoint);
  const [checked, setChecked] = useState<null | number>(null);
  const [hover, setHover] = useState<null | number>(null);

  return (
    <>
      {ratingPoints.map((point, i) => {
        return (
          <Icon
            onMouseEnter={() => setHover(point)}
            onMouseLeave={() => setHover(checked)}
            key={point}
            onClick={() => setChecked(point)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: `${pointSize}px`,
              height: `${pointSize}px`,
              "& svg": {
                stroke: pointColor || "black",
                fill: `${(hover && hover >= point) || checked === point ? pointColor : "none"}`,
                width: "100%",
                height: "100%"
              }
            }}
          >
            <StarIcon />
          </Icon>
        );
      })}
      <span style={{ color: pointColor }}>: {hover}</span>
    </>
  );
};

export default Rating;
