import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import CustomTypography from "../../components/typography/CustomTypography";
import { categories } from "./shared/BlogEnums";
import { useTheme } from "../../context/ThemeContext";

const BlogCategory = () => {
  const {theme} = useTheme();
  return (
    <Box className="max-w-lg mx-auto px-5 ml-5 rounded shadow border-4 border-gray-200 p-5 h-[40rem] overflow-y-scroll">
      <CustomTypography
        variant="h5"
        fontWeight="bold"
        color={theme.primaryColor}
        text="Kategoriler"
      />

      <List>
        {categories.map((category, index) => (
          <Link
            to={`/blogcontent/${category.name}`}
            key={index}
            variant="body2"
          >
            <ListItem
              sx={{
                mb: 2,
                mt: 5,
                color: "gray",
                "&:hover": {
                  backgroundColor: theme.primaryColor,
                  color: "white",
                },
                pl: 2,
                p: 2,
                transition: "background-color 0.5s ease-in-out",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              component="div"
            >
              {category.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default BlogCategory;
