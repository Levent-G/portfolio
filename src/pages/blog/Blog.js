import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";
import BlogCardComp from "../blog/BlogCardComp";
import CustomPaper from "../../components/paper/CustomPaper";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ModalComp from "../../components/modal/ModalComp";
import ModalDescription from "../../components/modal/ModalDescription";
import CustomTypography from "../../components/typography/CustomTypography"; // ekledim

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [blogerName, setBlogerName] = useState("");
  const breadcrumbLinks = [{ label: "Blog" }];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <CustomPaper
      sx={{
        p: 2,
        maxWidth: 1200,
        margin: "auto",
        bgcolor: "background.paper",
      }}
    >
      <Breadcrumbs links={breadcrumbLinks} />

      <Box padding="1rem 0">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {/* Blog başlık örneği, daha küçük ve minimalist */}
            <CustomTypography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1.5,
                color: "text.primary",
                letterSpacing: 0.5,
              }}
            />
            <BlogCardComp />
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Blog kategori başlığı */}
            <CustomTypography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                mb: 1,
                color: "text.secondary",
                letterSpacing: 0.3,
                textTransform: "uppercase",
              }}
            />
            <BlogCategory setOpenModal={setOpenModal} />
            
            {openModal && (
              <ModalComp
                open={openModal}
                closeModal={(_, event) => {
                  if (event !== "backdropClick") setOpenModal(false);
                }}
                modalTitle={"BLOG'U KİM YAZIYOR?"}
                modalDescription={<ModalDescription setBlogerName={setBlogerName} />}
                confirmLabel={"Onaylıyorum"}
                confirmModal={() => setOpenModal(false)}
                linkTo={`/blogEkle/${blogerName}`}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </CustomPaper>
  );
};

export default Blog;
