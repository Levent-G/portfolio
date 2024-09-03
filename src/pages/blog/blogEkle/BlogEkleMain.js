import React from "react";
import CustomPaper from "../../../components/paper/CustomPaper";
import { Typography } from "@gib-ui/core";
import { useTheme } from "../../../context/ThemeContext";
import BlogEkleForm from "./BlogEkleForm";

const BlogEkleMain = () => {
  const { theme } = useTheme();

  return (
    <CustomPaper paddingTop="8rem" padding="5rem">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: theme?.primaryColor,
          width: "100%",
          paddingBottom: 5,
        }}
      >
        Blog Ekle
      </Typography>
  
      <BlogEkleForm />
    </CustomPaper>
  );
};

export default BlogEkleMain;
