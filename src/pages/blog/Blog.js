import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";

import BlogCardComp from "../blog/BlogCardComp";
import BlogCategory from "./BlogCategory";
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
    <Box padding="8rem" >
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
    </Box>
  );
};

export default Blog;
