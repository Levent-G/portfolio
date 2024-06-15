import React from "react";
import Grid from "@mui/material/Grid";

import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import EducationAndExperienceCard from "./EducationAndExperienceCard"
const Education = () => {
  return (
    <CustomPaper padding="5rem"  bg="#398F60">
      <CustomTypography
        variant="h4"
        sx={{ color: "white" }}
        mb={5}
        text="EDUCATION AND EXPERIENCE"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <EducationAndExperienceCard education />
        </Grid>
        <Grid item xs={12} md={4}>
          <EducationAndExperienceCard experience />
        </Grid>
        <Grid item xs={12} md={4}>
          <EducationAndExperienceCard job />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Education;
