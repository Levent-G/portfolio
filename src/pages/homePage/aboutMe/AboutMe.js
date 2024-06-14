import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import header1 from "../../../assets/img/header1.jpg"
import { Link } from 'react-router-dom';
import 'animate.css';
import {Container,Typography } from '@mui/material'
const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="md:p-20 p-5">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              className={`animate__animated 'animate__duration-2s' ${
                isVisible ? "animate__fadeInLeft" : ""
              }`}
            >
              <img src={header1} alt="" className=" p-12" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={`animate__animated 'animate__duration-2s' 'ml-12' ${
                isVisible ? "animate__fadeInRight" : ""
              }`}
            >
              <Typography
                variant="h4"
                className="text-[#297580]   font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
              >
                About Me
              </Typography>
              <Typography variant="h7" className="text-[#495e61]   ">
                I am a front-end developer. I graduated from Tokat Gaziosmanpaşa
                University Computer Engineering Department. I am doing freelance
                work. I am developing projects with React.js. I have done
                projects such as social media project, chat project, notebook
                project. Apart from that, I converted the sites with ready-made
                designs into react.....
              </Typography>
              <Typography
                variant="h4"
                className="text-[#297580]   font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
              >
                PERSONAL INFORMATION
              </Typography>
              <ul className="text-[#495e61] ">
                <li>Name : Mustafa Levent Gülsüm</li>
                <li className="mt-2">Age : 23 Years</li>
                <li className="mt-2">Phone : +05359230846</li>
                <li className="mt-2">Email : levent_gulsum@outlook.com</li>
                <li className="mt-2">Address : Ankara,Turkey</li>
              </ul>
              <Link to={"/pdf"}>
                <button className=" py-2 px-5  mt-5  bg-[#3CB371] text-sm font-semibold text-white  hover:text-[#3CB371] hover:bg-[#f8f8f8] hover:underline ">
                  Show CV
                </button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AboutMe