import React, { useEffect, useState } from "react";
import header3 from "../../../assets/img/header3.png";
import Grid from "@mui/material/Grid";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomButton from "../../../components/button/CustomButton";
import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../../../firebase/firebase";
import { useTheme } from "../../../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  const [title, setTitle] = useState("Loading...");
  const [description, setDescription] = useState("Loading...");

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const headerDocRef = doc(
          adminDb,
          "pages",
          "portfolio",
          "fields",
          "header"
        );
        const headerSnap = await getDoc(headerDocRef);

        if (headerSnap.exists()) {
          const data = headerSnap.data();
          setTitle(data.title || "No Title");
          setDescription(data.description || "No Description");
        } else {
          setTitle("No Title");
          setDescription("No Description");
        }
      } catch (error) {
        setTitle("Error loading title");
        setDescription("Error loading description");
      }
    };

    fetchHeaderData();
  }, []);

  return (
    <CustomPaper
      padding="3rem"
      bg={theme.backgroundColor || "#121212"}
      sx={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <CustomTypography
            variant="h4"  // h3 -> h4 küçültüldü
            text={title}
            sx={{
              color: theme.primaryColor || "#00bcd4",
              fontWeight: 600, // biraz daha hafif
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              lineHeight: 1.4,
              letterSpacing: "0.02em",
            }}
          />
          <CustomTypography
            variant="body2" // body1 -> body2 küçültüldü
            text={description}
            sx={{
              color: theme.secondaryTextColor || "#bbb",
              fontSize: "0.95rem", // biraz küçültüldü
              mb: 3,
              maxWidth: 600,
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          />

          <CustomButton
            linkTo="/pdf"
            text="Show CV"
            sx={{
              padding: "10px 28px",
              fontSize: "0.9rem",
              backgroundColor: theme.primaryColor || "#00bcd4",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "30px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.accentColor || "#0097a7",
              },
              textTransform: "none",
              boxShadow: "none",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            textAlign: "center",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={header3}
            alt="Header Visual"
            style={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 20,
              boxShadow: `0 3px 8px ${theme.primaryColor}66`,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default Header;
