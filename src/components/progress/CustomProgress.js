import React from "react";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 8,
  backgroundColor:
    theme.palette.mode === "light" ? "#e0e0e0" : "#303030",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundImage:
      theme.palette.mode === "light"
        ? "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)"
        : "linear-gradient(90deg, #bb86fc 0%, #3700b3 100%)",
    boxShadow: "0 2px 6px rgba(101, 71, 255, 0.6)",
  },
}));

const CustomProgress = ({ sx, ...props }) => {
  return <BorderLinearProgress sx={sx} {...props} />;
};

export default CustomProgress;
