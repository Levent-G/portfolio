import React from "react";
import Grid from "@mui/material/Grid";
import MyProjectCard from "./MyProjectCard";
import { myProjectData } from "./MyProjectEnum";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import { useTheme } from "../../../context/ThemeContext";

const MyProject = () => {
  const {theme} =useTheme()
  return (
    <CustomPaper padding="2rem"  >
      <CustomTypography
        variant="h5"
        className={`text-${theme.primaryColor}  font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5`}
        sx={{ color: theme.primaryColor }}
        text="MY PROJECTS"
      />

      <CustomTypography
        variant="h7"
        sx={{ color: "#495e61"}}
        text="The projects I have done are as follows. Social media project, chat
        project, notepad, Reacta conversion of gibteknoloji site, todoapp, cart
        application, stock tracking project"
      />


        <Grid container spacing={2}>
          {myProjectData.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MyProjectCard
                title={option.title}
                content={option.content}
                cardLeftBtn={option.cardLeftBtn}
                cardRightBtn={option.cardRightBtn}
              />
            </Grid>
          ))}
        </Grid>
     
    </CustomPaper>
  );
};

export default MyProject;
