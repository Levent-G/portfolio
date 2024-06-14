import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
    <div className="text-center text-[#495e61]">
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
    </div>
  );
}

export default Footer