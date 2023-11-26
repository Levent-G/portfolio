import React from 'react'
import {  Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardComp from "./CardComp"


const MyProject = (myProjectData) => {


  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          className="text-[#297580]  font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
        >
          MY PROJECTS
        </Typography>
        <Typography variant="h7" className="text-[#495e61] ">
          The projects I have done are as follows. Social media project, chat
          project, notepad, Reacta conversion of gibteknoloji site, todoapp,
          cart application, stock tracking project
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {myProjectData.myProjectData.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CardComp
                  title={option.title}
                  title2={option.title2}
                  title3={option.title3}
                  title4={option.title4}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default MyProject