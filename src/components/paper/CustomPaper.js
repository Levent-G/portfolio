import { Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";

const CustomPaper = ({ children, sx, ...props }) => {
  return (
    <Paper
      sx={{
        ...sx,
        padding: props?.padding,
        paddingTop: props?.pt,
        backgroundColor: props.bg ? props.bg : "white",
      }}
      {...props}
    >
      <Container maxWidth="xl">{children}</Container>
    </Paper>
  );
};

export default CustomPaper;
