import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Footer = () => {
  const state = useSelector((state: RootState) => state.listSlice.list);

  const packed = state.filter((el) => {
    return el.checked;
  }).length;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "70px",
        textAlign: "center",
        backgroundColor: "aquamarine",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{
        padding: "0 10px 0 10px"
      }}>
        {" "}
        you have {state.length} items in your pack list, and you already packed{" "}
        {packed} {Math.round((packed / state.length) * 100)}%
      </p>
    </Box>
  );
};
