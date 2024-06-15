import { Typography } from "@mui/material";
import React from "react";
import BaseGrid from "../base/BaseGrid";

const CustomTypography = ({ xs, sm, md, lg, sx, ...props }) => {
  return (
    <BaseGrid xs={xs} sm={sm} md={md} lg={lg}>
      {" "}
      <Typography
        sx={{
          ...sx,


          fontWeight: "bold",
        }}
        {...props}
        variant={props?.variant}
        className={props?.className}
      >
        {props?.text}
        <strong className="p-5 text-[#49f898]">{props?.strongText}</strong>
      </Typography>
    </BaseGrid>
  );
};

export default CustomTypography;
