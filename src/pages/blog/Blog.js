import React, { useState, useEffect } from "react";
import {  Container, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";

import BlogCardComp from "../blog/BlogCardComp";
import CustomPaper from "../../components/paper/CustomPaper";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";

const Blog = () => {

  const [loading, setLoading] = useState(true);
  const breadcrumbLinks = [{ label: "Blog" }];
  useEffect(() => {
    // Simüle edilmiş bir yükleme işlemi
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <CustomPaper paddingTop="8rem" padding="5rem" >
      <Container>
      <Breadcrumbs links={breadcrumbLinks} />
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <BlogCardComp  />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCategory />
          </Grid>
        </Grid>
      </Container>
    </CustomPaper>
  );
};

export default Blog;
