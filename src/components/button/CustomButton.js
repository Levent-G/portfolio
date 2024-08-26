import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const CustomButton = ({ sx, ...props }) => {
  const { theme } = useTheme();
  return (
    <Link to={props?.linkTo}>
      <Button
        variant="contained"
        sx={{
          ...sx,

          mt: 5,
          backgroundColor: theme.primaryColor,

          fontWeight: 600,
          color: "white",
          "&:hover": {
            backgroundColor:"#000000",
          },
        }}
        size={props?.size ? props?.size : "small"}
        onClick={props?.onClick}
        className={props?.className}
        fullWidth={props?.fullWidth}
      >
        {props?.icon}{props?.text}
      </Button>
    </Link>
  );
};

export default CustomButton;
