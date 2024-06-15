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
import CustomTypography from "../../components/typography/CustomTypography";
import { blogData } from "./shared/BlogEnums";
const BlogCardComp = () => {
  const firstFiveBlogs = blogData.slice(0, 5);
  return (
    <div>
      {firstFiveBlogs.map((item, index) => (
        <>
          <Link to={`/blogcontent/${item.blogBaslik}`} variant="body2" key={index}>
            <Card className="mt-5 hover:bg-gray-200 ">
              <CardContent>
                <CustomTypography
                  gutterBottom
                  variant="h5"
                  component="div"
                  text={item.blogBaslik}
                />

                <Typography variant="body2" color="text.secondary">
                  <ReactMarkdown className="line-clamp-2">
                    {item.blogIcerik}
                  </ReactMarkdown>
                </Typography>
              </CardContent>
              <CardActions>
                <CustomTypography
                  size="small"
                  color="text.secondary"
                  text={item.yazarName}
                />
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
