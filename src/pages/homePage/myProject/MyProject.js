import React from "react";
import Grid from "@mui/material/Grid";
import MyProjectCard from "./MyProjectCard";
import { myProjectData } from "./MyProjectEnum";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";

const MyProject = () => {
  return (
    <CustomPaper padding="5rem"  >
      <CustomTypography
        variant="h4"
        className="text-[#297580]  font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
        sx={{ color: "#297580" }}
        text="MY PROJECTS"
      />

      <CustomTypography
        variant="h7"
        sx={{ color: "#495e61" }}
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
