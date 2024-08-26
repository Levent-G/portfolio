import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CustomPaper from "../components/paper/CustomPaper";
import { useTheme } from "../context/ThemeContext";
const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { theme } = useTheme();
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
    <CustomPaper sx={{ color: "#495e61", textAlign: "center" }}>
      {showButton && (
        <button onClick={scrollToTop}>
          <ArrowDropUpIcon
            style={{
              fontSize: 50,
              backgroundColor: theme.primaryColor,
              color: "white",
              position: "relative",
              bottom:"1.5rem",
              borderRadius: "9999px"
            }}
          />
          <br />
          Designed By Mustafa Levent Gülsüm
        </button>
      )}
    </CustomPaper>
  );
};

export default Footer;
