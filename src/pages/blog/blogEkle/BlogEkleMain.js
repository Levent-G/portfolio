import React from "react";
import CustomPaper from "../../../components/paper/CustomPaper";
import { Typography } from "@gib-ui/core";
import { useTheme } from "../../../context/ThemeContext";
import BlogEkleForm from "./BlogEkleForm";
import BlogCategory from "../../../components/category/BlogCategory";
import { Container, Grid } from "@mui/material";
import Breadcrumbs from "../../../components/breadCrumbs/Breadcrumbs";

const BlogEkleMain = () => {
  const { theme } = useTheme();
  const breadcrumbLinks = [{ label: "Blog",href:"/blog" },{label:"Blog Ekle"}];

  return (
    <CustomPaper  padding="5rem">
      <Container>
      <Breadcrumbs links={breadcrumbLinks} />
        <Grid container spacing={1} mt={5}>
          <Grid item xs={12} md={8}>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCategory isUserCategory={true} />
          </Grid>
        </Grid>
      </Container>
    </CustomPaper>
  );
};

export default BlogEkleMain;
