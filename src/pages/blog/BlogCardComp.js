import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardActions, Typography, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CustomTypography from "../../components/typography/CustomTypography";
import { getBlogs } from "../../services/GetBlogs";
import { useTheme } from "../../context/ThemeContext";

const BlogCardComp = () => {
  const { theme } = useTheme();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((list) => setBlogs(list.slice(0, 5)))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {blogs.map(({ id, blogBaslik, blogIcerik, yazarName, stars, blogTarihi }) => (
        <Link
          to={`/blogcontent/${id}`}
          key={id}
          style={{ textDecoration: "none" }}
        >
          <Card
            elevation={1}
            sx={{
              borderRadius: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: `0 10px 30px ${theme.primaryColor}33`,
              },
              bgcolor: theme.backgroundPaper || "#fff",
            }}
          >
            <Box
              sx={{
                bgcolor: theme.primaryLight || "#e0f7fa",
                color: theme.primaryColor,
                fontWeight: "700",
                fontSize: { xs: 16, sm: 18 },
                p: 2,
                textAlign: "center",
                textTransform: "capitalize",
                userSelect: "none",
              }}
            >
              {blogBaslik}
            </Box>

            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontSize: 14,
                  lineHeight: 1.4,
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: blogIcerik }} />
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                px: 2,
                pt: 0,
                pb: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: theme.textSecondary,
                fontSize: 12,
              }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <CustomTypography size="small" text={yazarName} />
                <Rating name="read-only" value={stars} precision={0.5} size="small" readOnly />
              </Box>

              <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.7 }}>
                {blogTarihi}
              </Typography>
            </CardActions>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default BlogCardComp;
