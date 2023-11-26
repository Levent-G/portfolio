import React from 'react'
import { Box, Container, Grid,Typography } from "@mui/material";
import BlogCategory from '../components/BlogCategory';
import BlogOneri from '../components/BlogOneri';
import { useData } from "../context/DataContext";
const Blog = () => {

  const {blogData} = useData();
  const {categories} = useData();
  return (
    <div className="mt-24 bg-gray-100">
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        className="text-white text-center bg-[#398F60] p-3 "
      >
        The website is currently being developed.
      </Typography>
      <Box className="p-5">
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <BlogOneri blogData={blogData} />
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