import { Typography } from "@mui/material";
import React from "react";
import BaseGrid from "../base/BaseGrid";

const CustomTypography = ({ xs, sm, md, lg, sx, ...props }) => {
  const customFontSizes = {
    h1: "3rem",
    h2: "2.75rem",
    h3: "2.5rem",
    h4: "2rem",
    h5: "1.75rem",
    h6:"1.30rem",
    h7: "0.870rem",
  
  };

  return (
    <BaseGrid xs={xs} sm={sm} md={md} lg={lg}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: customFontSizes[props.variant] || "1rem",
          ...sx,
        }}
        {...props}
        variant={props.variant || "h7"}
        className={props.className}
      >
        {props.text}
      </Typography>
    </BaseGrid>
  );
};

export default CustomTypography;
