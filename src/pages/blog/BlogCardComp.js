import React from "react";
import {
  Rating,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
const BlogCardComp = (blogData) => {
    const firstFiveBlogs = blogData.blogData.slice(0, 5);
  return (
    <div>
      {firstFiveBlogs.map((item, index) => (
        <>
          <Link to={`/blogcontent/${item.blogBaslik}`} variant="body2">
            <Card className="mt-5 hover:bg-gray-200 ">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.blogBaslik}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ReactMarkdown className="line-clamp-2">
                    {item.blogIcerik}
                  </ReactMarkdown>
                </Typography>
              </CardContent>
              <CardActions>
                <Typography size="small" color="text.secondary">
                  {item.yazarName}
                </Typography>
                <Rating
                  name="half-rating"
                  value={item.starts}
                  precision={0.5}
                />{" "}
              </CardActions>
            </Card>
          </Link>
        </>
      ))}
    </div>
  );
};

export default BlogCardComp;
