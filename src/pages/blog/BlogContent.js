import React, { useEffect, useState } from "react";
import { Avatar, Rating, Box, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomPaper from "../../components/paper/CustomPaper";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import { adminDb } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ModalDescription from "../../components/modal/ModalDescription";
import ModalComp from "../../components/modal/ModalComp";
import ReactQuill from "react-quill";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogContent = () => {
  const { theme } = useTheme();
  const [selectedItem, setSelectedItem] = useState([]);
  const [blogerName, setBlogerName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { bloguuid, categoryName } = useParams();

  const breadcrumbLinks = [
    { label: "Blog", href: "/blog" },
    {
      label: bloguuid
        ? "Blog Details"
        : categoryName
        ? `Category: ${categoryName}`
        : "Blog Content",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
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
          return toast.error("No blog data available.", {
            position: "top-right",
          });
        }

        const data = blogsDocSnap.data();
        const bloglar = data.bloglar || [];

        if (bloguuid) {
          const blog = bloglar.find((b) => b.id === bloguuid);
          if (blog) {
            setSelectedItem([blog]);
          } else {
            toast.error("Blog not found.", { position: "top-right" });
          }
        } else if (categoryName) {
          const filtered = bloglar.filter((b) => b.category === categoryName);
          if (filtered.length > 0) {
            setSelectedItem(filtered);
          } else {
            toast.error("No blogs found for this category.", {
              position: "top-right",
            });
          }
        } else {
          toast.error("Missing blog or category information.", {
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error(`Error fetching data: ${error.message}`, {
          position: "top-right",
        });
      }
    };

    fetchBlog();
  }, [bloguuid, categoryName]);

  const handleRatingChange = async (newValue, blogId) => {
    try {
      const blogsDocRef = doc(adminDb, "pages", "portfolio", "fields", "blogs");
      const blogsDocSnap = await getDoc(blogsDocRef);

      if (blogsDocSnap.exists()) {
        const data = blogsDocSnap.data();
        const bloglar = data.bloglar || [];

        const updatedBlogs = bloglar.map((b) =>
          b.id === blogId ? { ...b, stars: newValue } : b
        );

        await updateDoc(blogsDocRef, { bloglar: updatedBlogs });

        toast.success("Rating updated successfully!");
        setSelectedItem(updatedBlogs.filter((b) => b.id === blogId)); 
      }
    } catch (error) {
      toast.error("Failed to update rating: " + error.message);
    }
  };
  return (
    <CustomPaper>
      <ToastContainer />
      <Breadcrumbs links={breadcrumbLinks} />

      <Grid container spacing={4} mt={3}>
        <Grid item xs={12} md={8}>
          {selectedItem.map((item, index) => (
            <Box
              key={index}
              mb={5}
              sx={{
                boxShadow: `0 8px 24px ${theme.primaryColor}22`,
                borderRadius: 3,
                bgcolor: theme.backgroundPaper,
                p: { xs: 3, md: 5 },
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CustomTypography
                variant="h4"
                mb={2}
                text={item.blogBaslik}
                sx={{
                  color: theme.primaryColor,
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  lineHeight: 1.15,
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                }}
              />

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                mb={3}
                sx={{
                  color: theme.textSecondary || "#999",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <Avatar
                  alt={item.yazarName}
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 30,
                    height: 30,
                    boxShadow: `0 1px 6px ${theme.primaryColor}33`,
                  }}
                />
                <CustomTypography
                  variant="body2"
                  text={`${item.yazarName} · ${item.blogTarihi}`}
                  sx={{ fontWeight: 600 }}
                />
                <Rating
                  name={`rating-${item.id}`}
                  value={item.stars}
                  precision={0.5}
                  size="small"
                  onChange={(event, newValue) => {
                    if (newValue !== null) {
                      handleRatingChange(newValue, item.id);
                    }
                  }}
                  sx={{ ml: 1 }}
                />
              </Stack>

              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: `0 4px 18px ${theme.primaryColor}22`,
                  bgcolor: theme.backgroundDefault,
                  p: 3,
                  mb: 4,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: theme.textPrimary,
                  "& .ql-editor": {
                    minHeight: 200,
                    padding: 0,
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "'Georgia', serif",
                    fontWeight: 400,
                  },
                }}
              >
                <ReactQuill
                  value={item.blogIcerik}
                  readOnly
                  theme="bubble"
                  modules={{ toolbar: false }}
                  style={{ minHeight: "200px" }}
                />
              </Box>

              {item.codeExample?.trim() && (
                <>
                  <CustomTypography
                    variant="h6"
                    text="Code Example"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: theme.primaryColor,
                      fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: { xs: "1.15rem", md: "1.35rem" },
                    }}
                  />
                  <SyntaxHighlighter
                    language="javascript"
                    style={solarizedlight}
                    customStyle={{
                      borderRadius: 12,
                      padding: "20px",
                      fontSize: "0.9rem",
                      boxShadow: `0 6px 20px ${theme.primaryColor}33`,
                      marginBottom: 40,
                      fontFamily: "'Fira Code', monospace",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.codeExample}
                  </SyntaxHighlighter>
                </>
              )}
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <BlogCategory setOpenModal={setOpenModal} />

          {openModal && (
            <ModalComp
              open={openModal}
              closeModal={() => setOpenModal(false)}
              modalTitle={"WHO IS WRITING THE BLOG?"}
              modalDescription={
                <ModalDescription setBlogerName={setBlogerName} />
              }
              confirmLabel={"Confirm"}
              confirmModal={() => setOpenModal(false)}
              linkTo={`/blogEkle/${blogerName}`}
            />
          )}
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default BlogContent;
