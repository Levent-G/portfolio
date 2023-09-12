import React from 'react'
import {  Container, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useData } from "../context/DataContext";
const Skills = () => {
  
  const {skilssData} = useData();
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 25,
       
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          
          backgroundColor: theme.palette.mode === 'red' ? '#495e61' : '#495e61',
        },
      }));
  return (
    <div className="bg-[#398F60] p-5 ">
      <Container>
        <Typography
          variant="h4"
          className="text-white    font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
        >
          SKILLS
        </Typography>
        <Typography variant="h7" className="text-white">
          I am a front-end developer. I graduated from Tokat Gaziosmanpaşa
          University Computer Engineering Department. I am doing freelance work.
          I am developing projects with React.js. I have done projects such as
          social media project, chat project, notebook project. Apart from that,
          I converted the sites with ready-made designs into react.....
        </Typography>
        <br />

        <div className="mt-12">
          {skilssData.map((option, index) => (
            <div className="mt-5 mb-7">
              <Typography variant="h7" className="text-white ">
                {option.name}
              </Typography>
              <BorderLinearProgress
                variant="determinate"
                value={option.value}
                
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Skills