import React from 'react'
import { Box, Container, Grid } from "@mui/material";
import BlogCategory from '../components/BlogCategory';

import { useData } from "../context/DataContext";
const Blog = () => {

  
  const {categories} = useData();
  return (
    <div className="mt-24 bg-gray-100">
  
      <Box className="p-5">
        <Container>
          <Grid container spacing={1}>
          
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