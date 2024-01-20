import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from "@mui/material";
import BlogCategory from '../components/BlogCategory';
import LoadingPage from '../layouts/LoadingPage';
import { useData } from "../context/DataContext";
import BlogCardComp from '../components/BlogCardComp';
const Blog = () => {
  const {categories} = useData();
  const {blogData} = useData();
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
    <div className="mt-24 bg-gray-100">
  
      <Box className="p-5">
        <Container>
          <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
              <BlogCardComp blogData={blogData} />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogCategory categories={categories} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Blog