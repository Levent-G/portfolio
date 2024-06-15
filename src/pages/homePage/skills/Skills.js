import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { skilsData } from "./SkilsEnum";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomProgress from "../../../components/progress/CustomProgress";

const Skills = () => {
  return (
    <CustomPaper padding="5rem"   bg="#398F60">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CustomTypography
            variant="h4"
            sx={{ color: "white" }}
            mb={5}
            text="SKILLS"
          />

          <CustomTypography
            variant="h7"
            sx={{ color: "white" }}
            text="I am a front-end developer. I graduated from Tokat Gaziosmanpaşa
            University Computer Engineering Department. I am doing freelance
            work. I am developing projects with React.js. I have done projects
            such as social media project, chat project, notebook project. Apart
            from that, I converted the sites with ready-made designs into
            react....."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxHeight: 200, overflowY: "scroll" }}>
            {skilsData.map((option, index) => (
              <Box key={index} p={2}>
                <CustomTypography
                  variant="h7"
                  sx={{ color: "white" }}
                  text={option.name}
                />

                <CustomProgress variant="determinate" value={option.value} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Skills;
