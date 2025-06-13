import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import CustomButton from "../../components/button/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { adminDb } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogCategory = ({ setOpenModal }) => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesFromBlogs = async () => {
      try {
        const blogsDocRef = doc(
          adminDb,
          "pages",
          "portfolio",
          "fields",
          "blogs"
        );
        const blogsDocSnap = await getDoc(blogsDocRef);

        if (!blogsDocSnap.exists()) {
          console.log("Blogs document not found");
          setCategories([]);
          return;
        }

        const data = blogsDocSnap.data();
        const bloglarArray = data.bloglar || [];

        const categorySet = new Set();

        bloglarArray.forEach((blog) => {
          if (blog.category) {
            categorySet.add(blog.category);
          }
        });

        setCategories(Array.from(categorySet));
      } catch (error) {
        toast.error(`Error fetching categories: ${error.message}`, {
          position: "top-right",
        });
      }
    };

    fetchCategoriesFromBlogs();
  }, []);

  return (
    <>
      <Box
        className="max-w-md mx-auto px-4 ml-4 rounded-lg"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: `${theme.primaryColor} transparent`,
          "&::-webkit-scrollbar": {
            width: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.primaryColor,
            borderRadius: 3,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          backgroundColor: theme.backgroundPaper,
          boxShadow: `0 8px 20px ${theme.primaryColor}22`,
          border: "none",
          p: 4,
          mt: 8,
          maxHeight: 350,
          overflowY: "auto",
          userSelect: "none",
        }}
      >
        <ToastContainer />
        <CustomTypography
          variant="h6"
          fontWeight="600"
          color={theme.primaryColor}
          text="Categories"
          sx={{ fontSize: 17, mb: 2 }}
        />

        <List sx={{ p: 0 }}>
          {categories.length === 0 && (
            <CustomTypography
              variant="body2"
              text="No categories found"
              sx={{
                fontSize: 14,
                color: theme.textSecondary || "#999",
                mb: 1,
                fontStyle: "italic",
                textAlign: "center",
              }}
            />
          )}

          {categories.map((category) => (
            <Link
              to={`/category/${category}`}
              key={category}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                sx={{
                  mb: 1,
                  mt: 1,
                  color: theme.textSecondary || "#444",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 4,
                  px: 3,
                  py: 1.2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgb(0 0 0 / 0.06)",
                  backgroundColor: theme.backgroundDefault,
                  "&:hover": {
                    backgroundColor: theme.primaryColor,
                    color: "#fff",
                    boxShadow: `0 6px 16px ${theme.primaryColor}88`,
                    transform: "translateY(-2px)",
                  },
                }}
                component="div"
              >
                <CategoryIcon sx={{ fontSize: 18, color: "inherit" }} />
                {category}
              </ListItem>
            </Link>
          ))}
        </List>
        <CustomButton
          variant="outlined"
          text={"ADD BLOG"}
          icon={<AddIcon sx={{ fontSize: 20 }} />}
          sx={{
            mt: 3,
            mb: 2,
            fontSize: 14,
            borderRadius: 4,
            fontWeight: 600,
            boxShadow: `0 3px 10px ${theme.primaryColor}33`,
          }}
          fullWidth
          onClick={() => setOpenModal(true)}
        />
      </Box>
    </>
  );
};

export default BlogCategory;
