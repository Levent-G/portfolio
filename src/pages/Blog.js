import React from 'react'
import { Box, Container, Grid } from "@mui/material";
import BlogCategory from '../components/BlogCategory';
import BlogOneri from '../components/BlogOneri';
import BlogAddComp from '../components/BlogAddComp';
const Blog = () => {
  return (
    <div className="mt-24 bg-gray-100">
      <Box  className='p-5'>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} >
            <BlogOneri/>  
            </Grid>
            <Grid item xs={12} md={4} >   
            <BlogAddComp/>       
            <BlogCategory/>                  
            </Grid>
         
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Blog