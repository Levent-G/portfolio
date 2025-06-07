import React, { useEffect, useState } from "react";
import {
  Rating,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomTypography from "../../components/typography/CustomTypography";
import { getBlogs } from "../../services/GetBlogs";

const BlogCardComp = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogList = await getBlogs();
      setBlogs(blogList.slice(0, 5));
    };

    fetchBlogs();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 2,
      }}
    >
      {blogs.map((item) => (
        <Link
          to={`/blogcontent/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none" }}
        >
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "scale(1.04)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              },
              overflow: "hidden",
              bgcolor: "background.paper",
            }}
            elevation={0}
          >
            {/* Başlık bölümü */}
            <Box
              sx={{
                height: 120,
                backgroundColor: "primary.light",
                color: "primary.main",
                fontWeight: 700,
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 3,
                textAlign: "center",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
                userSelect: "none",
                textTransform: "capitalize",
              }}
            >
              {item.blogBaslik}
            </Box>

            {/* İçerik */}
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.blogIcerik }}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "inherit",
                    userSelect: "text",
                  }}
                />
              </Typography>
            </CardContent>

            {/* Footer */}
            <CardActions
              sx={{
                px: 3,
                pb: 2,
                pt: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CustomTypography
                  size="small"
                  color="text.secondary"
                  text={item.yazarName}
                  sx={{ fontSize: 13, fontWeight: 500 }}
                />
                <Rating
                  name="half-rating"
                  value={item.stars}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Box>

              <CustomTypography
                variant="body2"
                color="text.secondary"
                text={item.blogTarihi}
                sx={{ fontSize: 12, opacity: 0.65, fontWeight: 400 }}
              />
            </CardActions>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default BlogCardComp;
