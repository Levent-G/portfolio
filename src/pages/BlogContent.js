import React from "react";
import { Typography,Avatar,Rating, Box, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import BlogCategory from '../components/BlogCategory';
import ReactMarkdown from 'react-markdown';

const BlogContent = () => {
  const customStyle = {
    fontFamily: 'Times New Roman', // Times New Roman yazı tipi
  };
  const { blogBaslik } = useParams();
  const {categories} = useData();

  const {blogData} = useData();
  const selectedItem = blogData.filter(item => item.blogBaslik === blogBaslik);

  return (
    <div className="mt-24 bg-gray-100">
      <Box className="p-5">
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              {selectedItem.map((item, index) => (
                <>
                  <Typography variant="h2" className="mb-2 font-bold">
                    {item.blogBaslik}
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
                      {item.yazarName}, {item.blogTarihi}
                    </Typography>
                  </div>

                  <Rating
                    name="half-rating"
                    defaultValue={item.starts}
                    precision={0.5}
                  />
                  <div className="mt-6">
                    <ReactMarkdown>{item.blogIcerik}</ReactMarkdown>
                  </div>
                </>
              ))}
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

export default BlogContent