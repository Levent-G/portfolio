import React from 'react'
import {  Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import ExperienceCard from './ExperienceCard';
const Experience = () => {
  return (
    <div className=" mt-12 pb-12 ">
    <Container>
      <Typography
        variant="h4"
        className="text-[#297580]    font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
      >
        EXPERIENCE
      </Typography>
     <ExperienceCard/>

     
    </Container>
  </div>
  )
}

export default Experience