import React from "react";
import { CardContent, Card, Box } from "@mui/material";
import CustomTypography from "../../../components/typography/CustomTypography";
import { useTheme } from "../../../context/ThemeContext";

const MyProjectCard = ({ title, content, cardLeftBtn, cardRightBtn }) => {
  const { theme } = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        padding: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <CustomTypography
          gutterBottom
          variant="subtitle1" // küçültüldü
          sx={{ color: theme.primaryColor, fontWeight: 700, mb: 1, fontSize: "1rem" }}
          text={title.toUpperCase()}
        />

        <CustomTypography
          variant="body2"
          sx={{ color: "#495e61", mb: 3, minHeight: 60, lineHeight: 1.4, fontSize: "0.85rem" }}
          text={content}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              backgroundColor: theme.primaryColor,
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: 20,
              fontWeight: 600,
              fontSize: "0.75rem", // küçültüldü
              userSelect: "none",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.primaryDark,
              },
            }}
          >
            {cardLeftBtn}
          </Box>

          <Box
            sx={{
              backgroundColor: "#e0e0e0",
              color: "#333",
              px: 2,
              py: 0.5,
              borderRadius: 20,
              fontWeight: 600,
              fontSize: "0.75rem", // küçültüldü
              userSelect: "none",
            }}
          >
            {cardRightBtn}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyProjectCard;
