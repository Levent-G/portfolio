import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CustomTypography from "../../../components/typography/CustomTypography";
import WebIcon from "@mui/icons-material/Web";
import { useTheme } from "../../../context/ThemeContext";
const EducationAndExperienceCard = ({ education, experience, job }) => {
  const {theme} = useTheme();
  return (
    <Box>
      <Card
        sx={{
          boxShadow: 3,
          maxWidth: 345,
          height: 250,
        }}
      >
        <CardContent>
          {education && (
            <MenuBookIcon sx={{ fontSize: 50, color: "#495e61" }} />
          )}
          {experience && (
            <WebIcon
              sx={{ fontSize: 50, color: "#495e61", marginRight: "2rem" }}
            />
          )}
          {job && (
            <WorkIcon
              sx={{ fontSize: 50, color: "#495e61", marginRight: "2rem" }}
            />
          )}

          <CustomTypography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: theme.primaryColor }}
            mt={5}
            text={
              (education && "Tokat Gaziosmanpasa Universtiy") ||
              (experience && "Gelir Idaresi Baskanligi") ||
              (job && "GIB TECHNOLOGY")
            }
          />

          <CustomTypography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ color: "#495e61" }}
            mt={3}
            text={
              (education && "4 year") ||
              (experience && "3 month") ||
              (job && "still working")
            }
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default EducationAndExperienceCard;
