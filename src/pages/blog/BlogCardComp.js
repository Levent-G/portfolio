import React, { useEffect, useState } from "react";
import { Rating, Card, CardActions, CardContent, Typography } from "@mui/material";
import ReactQuill from "react-quill"; // Quill bileşenini import ettik
import { Link } from "react-router-dom";
import CustomTypography from "../../components/typography/CustomTypography";
import { getBlogs } from "../../services/GetBlogs"; // Blog verilerini getiren fonksiyon

const BlogCardComp = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogList = await getBlogs();
      setBlogs(blogList.slice(0, 5)); // İlk 5 blogu almak
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((item, index) => (
        <Link to={`/blogcontent/${item.blogBaslik}`} key={index}>
          <Card className="mt-5 hover:bg-gray-100">
            <CardContent>
              <CustomTypography
                gutterBottom
                variant="h5"
                component="div"
                text={item.blogBaslik}
              />
              <Typography variant="body2" color="text.secondary">
                <ReactQuill
                  value={item.blogIcerik}
                  readOnly
                  theme="snow"
                  modules={{ toolbar: false }} // Optional: Hide the toolbar
                />
              </Typography>
            </CardContent>
            <CardActions>
              <CustomTypography
                size="small"
                color="text.secondary"
                text={item.yazarName}
              />
              <Rating name="half-rating" value={item.stars} precision={0.5} />
            </CardActions>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogCardComp;
