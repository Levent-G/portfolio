import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import EducationAndExperienceCard from "./EducationAndExperienceCard";
import { useTheme } from "../../../context/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../../../firebase/firebase";

const Education = () => {
  const { theme } = useTheme();
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("EDUCATION AND EXPERIENCE");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(
          adminDb,
          "pages",
          "portfolio",
          "fields",
          "education and experience"
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "EDUCATION AND EXPERIENCE");
          setCards(data.cards || []);
        }
      } catch (error) {
        console.error("Failed to fetch education and experience data:", error);
      }
    };
    fetchData();
  }, []);

  const cardTypes = ["education", "experience", "job"];

  return (
    <CustomPaper padding="4rem" bg={theme.primaryColor}>
      <CustomTypography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 600,
          mb: 1.5,
          fontSize: "1.5rem", 
          letterSpacing: "0.5px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
        text={title}
      />
      <Grid container spacing={3} justifyContent="center" >
        {cards.map((card, index) => {
          const type = cardTypes[index] || "";

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EducationAndExperienceCard
                education={type === "education"}
                experience={type === "experience"}
                job={type === "job"}
                title={card.title}
                value={card.value}
              />
            </Grid>
          );
        })}
      </Grid>
    </CustomPaper>
  );
};

export default Education;
