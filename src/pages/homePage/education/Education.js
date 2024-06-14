import React from 'react'
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';
const Education = () => {
  return (
    <div className=" mt-12 pb-12 p-5 bg-[#398F60]  ">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <EducationCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <ExperienceCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Education