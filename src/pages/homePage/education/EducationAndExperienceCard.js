import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CustomTypography from "../../../components/typography/CustomTypography";
import WebIcon from "@mui/icons-material/Web";
import { useTheme } from "../../../context/ThemeContext";

const EducationAndExperienceCard = ({ education, experience, job, title, value, date }) => {
  const { theme } = useTheme();

  let IconComponent = null;
  let iconColor = theme.primaryColor;
  if (education) IconComponent = MenuBookIcon;
  else if (experience) IconComponent = WebIcon;
  else if (job) IconComponent = WorkIcon;

  return (
    <Box>
      <Card
        sx={{
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          maxWidth: 320,
          height: 160,
          borderRadius: 4,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1.5,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "default",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 35px rgba(0,0,0,0.16)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {IconComponent && <IconComponent sx={{ fontSize: 40, color: iconColor }} />}
          <CustomTypography
            variant="h6"
            sx={{ color: iconColor, fontWeight: 700, fontSize: "1.1rem", fontFamily: "'Poppins', sans-serif" }}
            text={title}
          />
        </Box>

        <CustomTypography
          variant="body2"
          sx={{
            color: "#556677",
            flexGrow: 1,
            fontSize: "0.9rem",
            lineHeight: 1.6,
            whiteSpace: "pre-line",
            mt: 0.5,
            mb: 0.5,
            fontFamily: "'Poppins', sans-serif",
          }}
          text={value}
        />

        {date && (
          <CustomTypography
            variant="caption"
            sx={{ color: "#777", fontStyle: "italic", fontFamily: "'Poppins', sans-serif" }}
            text={date}
          />
        )}
      </Card>
    </Box>
  );
};

export default EducationAndExperienceCard;
