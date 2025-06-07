import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MyProjectCard from "./MyProjectCard";
import CustomPaper from "../../../components/paper/CustomPaper";
import CustomTypography from "../../../components/typography/CustomTypography";
import { useTheme } from "../../../context/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { adminDb } from "../../../firebase/firebase";

const MyProject = () => {
  const { theme } = useTheme();

  const [data, setData] = useState({
    title: "Loading...",
    description: "Loading...",
    projects: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const docRef = doc(
          adminDb,
          "pages",
          "portfolio",
          "fields",
          "my projects"
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const d = docSnap.data();
          setData({
            title: d.title || "No Title",
            description: d.description || "No Description",
            projects: d.projects || [],
          });
        } else {
          setData({
            title: "No Title",
            description: "No Description",
            projects: [],
          });
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setData({
          title: "Error",
          description: "Error",
          projects: [],
        });
      }
    };

    fetchProjects();
  }, []);

  return (
    <CustomPaper padding="1.5rem">
      <CustomTypography
        variant="h5"
        sx={{
          color: theme.primaryColor,
          fontWeight: 600,
          mb: 1.5,
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.5px",
        }}
        text={data.title}
      />

      <CustomTypography
        variant="body2"
        sx={{
          color: theme.secondaryTextColor || "#556677",
          mb: 3,
          maxWidth: 650,
          mx: "auto",
          textAlign: "center",
          lineHeight: 1.5,
          fontSize: "0.9rem",
          fontFamily: "'Poppins', sans-serif",
        }}
        text={data.description}
      />

      <Grid container spacing={2}>
        {data.projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MyProjectCard
              title={project.title}
              content={project.value}
              cardLeftBtn={"Details"}
              cardRightBtn={"React.js"}
            />
          </Grid>
        ))}
      </Grid>
    </CustomPaper>
  );
};

export default MyProject;
