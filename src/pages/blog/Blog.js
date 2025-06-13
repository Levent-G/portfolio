import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";
import BlogCardComp from "../blog/BlogCardComp";
import CustomPaper from "../../components/paper/CustomPaper";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ModalComp from "../../components/modal/ModalComp";
import ModalDescription from "../../components/modal/ModalDescription";
import CustomTypography from "../../components/typography/CustomTypography";

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
    <CustomPaper>
      <Breadcrumbs links={breadcrumbLinks} />

      <Box paddingY={4}>
        <Grid container spacing={4}>
          {/* Sol tarafta Blog Kartları */}
          <Grid item xs={12} md={8}>
            <Box>
              <CustomTypography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "text.primary",
                  letterSpacing: 0.5,
                }}
              >
                Blog Yazıları
              </CustomTypography>
              <BlogCardComp />
            </Box>
          </Grid>

          {/* Sağ tarafta Kategoriler */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              position: "sticky",
              top: 100, // sayfa kayarken sağ taraf sabit kalabilir
              alignSelf: "flex-start", // yukarıda hizalanması için
            }}
          >
            <CustomTypography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "text.secondary",
                letterSpacing: 0.5,
              }}
            >
              Kategoriler
            </CustomTypography>

            <BlogCategory setOpenModal={setOpenModal} />

            {openModal && (
              <ModalComp
                open={openModal}
                closeModal={(_, event) => {
                  if (event !== "backdropClick") setOpenModal(false);
                }}
                modalTitle={"BLOG'U KİM YAZIYOR?"}
                modalDescription={
                  <ModalDescription setBlogerName={setBlogerName} />
                }
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
