import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from "@mui/material";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={{color:"#495e61",textAlign:"center"}}>
      {showButton && (
        <button onClick={scrollToTop}>
          <ArrowDropUpIcon
            style={{ fontSize: 50 }}
            className="relative bottom-6 bg-[#175f38] rounded-full text-white"
          />
          <br />
          Designed By Mustafa Levent Gülsüm
        </button>
      )}
    </Box>
  );
}

export default Footer