import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ sx, ...props }) => {
  return (
    <Link to={props?.linkTo}>
      <Button
        variant="contained"
        sx={{
          ...sx,

          mt: 5,
          backgroundColor: "#3CB371",

          fontWeight: 600,
          color: "white",
          "&:hover": {
            backgroundColor: "#297580",
          },
        }}
        size={props?.size ? props?.size : "small"}
        onClick={props?.onClick}
      >
        {props?.text}
      </Button>
    </Link>
  );
};

export default CustomButton;
