import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
const CustomProgress = ({ sx, ...props }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.mode === "red" ? "#495e61" : "#495e61",
    },
  }));
  return (
    <BorderLinearProgress
      {...sx}
      {...props}
      variant={props?.variant}
      value={props?.value}
    />
  );
};

export default CustomProgress;
