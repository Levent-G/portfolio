import React from 'react'
import headerImg from "../assets/img/headerImg.png"
import { Container, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import header3 from "../assets/img/header3.png";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import 'animate.css';
const Header = () => {
  const theme = createTheme();
  const theme2 = createTheme();
  const theme3 = createTheme();
theme.typography.h3= {
  
  '@media (min-width:200px)': {
    fontSize: '45px',
    text:'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '48px',
  },
};

theme2.typography.h5= {
  
  '@media (min-width:200px)': {
    fontSize: '16px',
  },
  [theme2.breakpoints.up('md')]: {
    fontSize: '20px',
  },
};
theme3.typography.h5 = {
  display: 'block', // Varsayılan olarak görünür olsun
  '@media (max-width: 767px)': {
    display: 'none', // Ekran genişliği 767 pikselden küçükse resmi gizle
  },
};

  return (
    <div
      style={{
        backgroundImage: `url(${headerImg})`,
        background: "black",
        opacity: "0.8",
        backgroundSize: "100% ",
      }}
      className=" d-flex align-items-center bg-no-repeat bg-bottom bg-cover w-full h-full bg-gradient-to-r  from-[#0B8692] to-[#223C5E] to-[#350033] to-transparent"
    >
      <Container className="pt-20 mt-auto">
        <div component="row">
          <div
            component="col"
            className="col-lg-6  flex-wrap mx-auto mt-5 box-border p-5 pb-16 "
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classNames(
                    "animate__animated",
                    "animate__fadeInLeft"
                  )}
                >
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="h3"
                      className="text-[#297580]   font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
                    >
                      HI I'M
                      <strong className="p-5 text-[#49f898]">
                        MUSTAFA LEVENT{" "}
                      </strong>
                    </Typography>
                  </ThemeProvider>

                  <ThemeProvider theme={theme2}>
                    {" "}
                    <Typography
                      variant="h5"
                      className="text-[#495e61]    font-medium mt-2 max-w-lg mx-auto "
                    >
                      I am a front-end developer. I graduated from Tokat
                      Gaziosmanpaşa University Computer Engineering Department.
                      I am doing freelance work....
                    </Typography>{" "}
                  </ThemeProvider>
                  <Link to={"/pdf"}>
                    <button className=" py-2 px-5  mt-5  bg-[#3CB371] text-sm font-semibold text-white  hover:text-[#3CB371] hover:bg-[#f8f8f8] hover:underline ">
                      Show CV
                    </button>
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={8}
                  md={6}
                  className={classNames(
                    "animate__animated",
                    "animate__fadeInRight"
                  )}
                >
                  <ThemeProvider theme={theme3}>
                    <Typography variant="h5">
                      <img src={header3} alt="" className="ml-12" />
                    </Typography>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header