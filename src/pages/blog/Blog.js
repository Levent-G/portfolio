import React, { useState, useEffect } from "react";
import {  Container, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";

import BlogCardComp from "../blog/BlogCardComp";
import BlogCategory from "./BlogCategory";
import CustomPaper from "../../components/paper/CustomPaper";
const Blog = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş bir yükleme işlemi
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <CustomPaper paddingTop="8rem" padding="5rem" >
      <Container>
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
