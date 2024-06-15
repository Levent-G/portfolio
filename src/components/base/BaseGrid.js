import { Grid } from "@mui/material";
import React from "react";

const BaseGrid = ({ children, ...props }) => {
     // className={classNames("animate__animated", "animate__fadeInLeft")}
  return (
    <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} >
      {children}
    </Grid>
  );
};

export default BaseGrid;
