import React from "react";
import { Typography,Avatar,Rating, Box, Container, Grid } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import BlogCategory from '../components/BlogCategory';
import BlogAddComp from '../components/BlogAddComp';
import BlogOneri from "../components/BlogOneri";
const BlogContent = () => {
  const customStyle = {
    fontFamily: 'Times New Roman', // Times New Roman yazı tipi
  };
  const { blogId } = useParams();

  const {blogData} = useData();
  const selectedItem = blogData.find(item => item.id === blogId);
  console.log(blogId);
  return (
    <div className="mt-24 bg-gray-100">
    
         {selectedItem && (
        <Box  className='p-5'>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} >
            <Typography variant="h2" className="mb-2 font-bold">
            {selectedItem.blogBaslik}
          </Typography>

          <div className="mt-2">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className="float-left mr-2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="h7" className="mb-2 text-gray-400 ">
              {" "}
             {selectedItem.yazarName}, {selectedItem.blogTarihi}
            </Typography>
            <SettingsOutlinedIcon className="float-right" />
          </div>

          <Rating name="half-rating" defaultValue={selectedItem.starts} precision={0.5} />
          <div className="mt-12">
            <Typography
              variant="body1"
              className="mb-4 text-gray-600 "
              style={customStyle}
            >
              {selectedItem.blogIcerik}
            </Typography>  
            </div>
            </Grid>
            <Grid item xs={12} md={4} >   
            <BlogAddComp/>       
            <BlogCategory/>                  
            </Grid>
            <Grid item xs={12} md={12} >   
            <BlogOneri/>       
                       
            </Grid>
         
          </Grid>
        </Container>
      </Box>
         
         )}
      
    </div>
  );
}

export default BlogContent