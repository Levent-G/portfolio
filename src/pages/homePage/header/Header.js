import React from "react";
import header3 from "../../../assets/img/header3.png";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import "animate.css";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomButton from "../../../components/button/CustomButton";

const Header = () => {
  const isSmallScreen = window.innerWidth < 768;

  return (
    <CustomPaper padding="2rem" bg="#333333" paddingTop="8rem">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          className={classNames("animate__animated", "animate__fadeInLeft")}
        >
          <CustomTypography
            variant="h5"
            text=" HI I'M MUSTAFA LEVENT"
            sx={{ color: "white" }}
          />
          <CustomTypography
            variant="h7"
            text=" I am currently actively working in GIB technology in addition to doing freelance work as a front-end developer. I graduated from Tokat Gaziosmanpaşa University, Computer Engineering Department."
            mt={5}
            sx={{ color: "#495e61" }}
          />

          <CustomButton linkTo="/pdf" text="Show CV" />
        </Grid>

        <Grid
          item
          xs={8}
          md={6}
          sx={{
            display: isSmallScreen ? "none" : "block",
          }}
          className={classNames("animate__animated", "animate__fadeInRight")}
        >
          <img src={header3} alt="" />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Header;
