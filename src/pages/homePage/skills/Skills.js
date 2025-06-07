import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomProgress from "../../../components/progress/CustomProgress";
import { useTheme } from "../../../context/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../../../firebase/firebase";

const Skills = () => {
  const { theme } = useTheme();

  const [data, setData] = useState({
    title: "Loading...",
    description: "Loading...",
    skills: [],
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsDocRef = doc(
          adminDb,
          "pages",
          "portfolio",
          "fields",
          "skills"
        );
        const skillsSnap = await getDoc(skillsDocRef);

        if (skillsSnap.exists()) {
          const d = skillsSnap.data();
          setData({
            title: d.title || "No Title",
            description: d.description || "No Description",
            skills: d.skills || [],
          });
        } else {
          setData({
            title: "No Title",
            description: "No Description",
            skills: [],
          });
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
        setData({
          title: "Error",
          description: "Error",
          skills: [],
        });
      }
    };

    fetchSkills();
  }, []);

  return (
    <CustomPaper bg={theme.backgroundColor || "#fff"} padding={2} elevation={1}>
      <Box mb={2}>
        <CustomTypography
          variant="h5" // küçültüldü
          text={data.title}
          sx={{
            color: theme.primaryColor || "#102a43",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem", // ekstra küçültme
            letterSpacing: "0.5px",
          }}
        />
        <CustomTypography
          variant="body2"
          text={data.description}
          sx={{
            color: theme.secondaryTextColor || "#556677",
            margin: "0 auto",
            lineHeight: 1.6,
            fontSize: "0.85rem",
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
          }}
        />
      </Box>

      <Grid container spacing={1.5}>
        {data.skills.map((skill, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Box
              sx={{
                p: 1.25,
                borderRadius: 2,
                backgroundColor: theme.palette?.grey?.[100] || "#f5f5f5",
              }}
            >
              <CustomTypography
                variant="subtitle2"
                text={skill.title}
                sx={{
                  color: theme.primaryColor,
                  fontWeight: 500,
                  mb: 0.5,
                  fontSize: "0.85rem",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
              <CustomProgress
                variant="determinate"
                value={Number(skill.value) || 0}
                sx={{ height: 6, borderRadius: 3 }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </CustomPaper>
  );
};

export default Skills;
