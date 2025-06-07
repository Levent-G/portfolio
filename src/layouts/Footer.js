import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CustomPaper from "../components/paper/CustomPaper";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CustomPaper
        sx={{
          py: 2,
          textAlign: "center",
          color: theme.secondaryTextColor || "#495e61",
          fontSize: "0.9rem",
          fontWeight: 500,
          mt: 4,
        }}
      >
        Designed By Mustafa Levent Gülsüm
      </CustomPaper>

      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: theme.primaryColor || "#495e61",
            border: "none",
            borderRadius: "50%",
            width: 36, // küçültüldü
            height: 36, // küçültüldü
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
            zIndex: 1000,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              theme.primaryColorHover || "#3b4a4f")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              theme.primaryColor || "#495e61")
          }
        >
          <ArrowDropUpIcon style={{ color: "#fff", fontSize: 24 }} />{" "}
          {/* küçültüldü */}
        </button>
      )}
    </>
  );
};

export default Footer;
