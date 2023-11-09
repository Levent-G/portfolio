import React from 'react'
import {  Container } from '@mui/material'
import Typography from '@mui/material/Typography';

import EducationCard from './EducationCard';
const Education = () => {
  return (
    <div className=" mt-12 pb-12 p-5 bg-[#398F60]">
      <Container>
        <Typography
          variant="h4"
          className="text-white font-bold leading-[3rem] max-w-lg mx-auto  pb-5"
        >
          EDUCATION
        </Typography>
       <EducationCard/>

       
      </Container>
    </div>
  );
}

export default Education