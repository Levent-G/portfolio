import React from 'react'
import {  Container,Box,Grid,Avatar ,CardActionArea,Card,CardContent,Typography} from '@mui/material'
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

const BlogOneri = () => {
    const {blogData} = useData();
   
  
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {blogData.map((blog, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Link to={`/blogcontent/${blog?.id}`} variant="body2">
                <Card
                  className="mt-5  pt-5 "
                  sx={{ boxShadow: 3, height: 145 }}
              
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="text-[#339961]"
                      >
                        {blog.blogBaslik}
                      </Typography>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        className="float-left mr-2 mt-5"
                        sx={{ width: 24, height: 24 }}
                      />
                      <Typography
                        variant="body2"
                        className="text-gray-500 float-left pt-5"
                      >
                        {blog.yazarName}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="text-gray-400 float-left pt-5 pl-2"
                      >
                        {blog.blogTarihi}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default BlogOneri