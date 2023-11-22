import React from 'react'
import { useData } from "../context/DataContext";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';  
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
const PortfolioCardList = () => {
const { portfolioData } = useData(); 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width:500
  };
  return (
    <div className="mt-12 p-5 ">
      <Container>
        <Box sx={{ width: "100%" }}>
     
            <Typography
              variant="h4"
              className="text-[#297580]   font-bold leading-[3rem] max-w-lg mx-auto pt-6 pb-5"
            >
              PORTFOLIO
            </Typography>

            <Slider {...settings}>
              {portfolioData.map((item, index) => (
                <div className="portfolio relative text-center" key={index}>
                  <div key={index} className="project">
                 
                    <img src={item.img} alt={item.title} />
                    <p className="text-base text-white  opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
        
        </Box>
      </Container>
    </div>
  );
}


export default PortfolioCardList