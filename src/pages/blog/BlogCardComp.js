import React, { useEffect, useState } from "react";
import {
  Rating,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import CustomTypography from "../../components/typography/CustomTypography";
import { getBlogs } from "../../services/GetBlogs";


const BlogCardComp = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogList = await getBlogs();
      setBlogs(blogList.slice(0, 5));
      console.log(blogList)

    };

    fetchBlogs();
  }, []);

 
  return (
    <div className="flex flex-col gap-6 p-6">
      {blogs.map((item, index) => (
        <Link
          to={`/blogcontent/${item.id}`}
          key={index}
          className="transition-transform transform hover:scale-105"
        >
          <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold p-3">
              {item.blogBaslik}
            </div>
            <CardContent className="p-4">
              <Typography variant="body2" color="text.secondary" className="line-clamp-3 text-gray-700">
                <ReactQuill
                  value={item.blogIcerik}
                  readOnly
                  theme="snow"
                  modules={{ toolbar: false }}
                />
              </Typography>
            </CardContent>
            <CardActions className="flex justify-between px-4 pb-4">
              <div className="flex items-center space-x-2">
                <CustomTypography
                  size="small"
                  color="text.secondary"
                  text={item.yazarName}
                />
                <Rating name="half-rating" value={item.stars} precision={0.5} />
              </div>
              <CustomTypography
                variant="body2"
                color="text.secondary"
                text={item.blogTarihi}
              />
            </CardActions>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogCardComp;
