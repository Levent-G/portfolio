import React from "react";
import Grid from "@mui/material/Grid";
import header1 from "../../../assets/img/header1.jpg";
import "animate.css";
import { ListItemText } from "@mui/material";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomButton from "../../../components/button/CustomButton";
import { listItem } from "./AboutMeEnums";
import { useTheme } from "../../../context/ThemeContext";

const AboutMe = () => {
  const isSmallScreen = window.innerWidth < 768;
  const { theme } = useTheme();

  return (
    <CustomPaper padding="2rem" darkMode={false}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: isSmallScreen ? "none" : "block",
          }}
        >
          <img src={header1} alt="" className=" p-12" />
        </Grid>

        <Grid item xs={12} md={6}>
          <CustomTypography
            variant="h5"
            text="About Me"
            sx={{ color: theme.primaryColor }}
            mb={4}
          />

          <CustomTypography
            variant="h7"
            sx={{ color: "#495e61", textAlign: "justify" }}
            text=" I am a front-end developer. I graduated from Tokat Gaziosmanpaşa University Computer Engineering Department.I am currently actively working in GIB technology. I am developing projects with React.js. I have done projects such as social media project, chat project, notebook project. Apart from that, I converted the sites with ready-made designs into react....."
          />

          <CustomTypography
            variant="h5"
            text="   PERSONAL INFORMATION"
            sx={{ color: theme.primaryColor }}
            mt={5}
            mb={3}
          />

          {listItem.map((item, index) => (
            <ListItemText
              key={index}
              primary={item.label}
              secondary={
                <CustomTypography
                  variant="body2"
                  color="textPrimary"
                  text={item.value}
                />
              }
            />
          ))}

          <CustomButton linkTo="/pdf" text="Show CV" />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default AboutMe;
