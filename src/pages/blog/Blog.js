import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import LoadingPage from "../../layouts/LoadingPage";
import BlogCardComp from "../blog/BlogCardComp";
import CustomPaper from "../../components/paper/CustomPaper";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ModalComp from "../../components/modal/ModalComp";
import ModalDescription from "../../components/modal/ModalDescription";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [blogerName, setBlogerName] = useState("");
  const breadcrumbLinks = [{ label: "Blog" }];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <CustomPaper  >
        <Breadcrumbs links={breadcrumbLinks} />
        <Box padding="1rem" >
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <BlogCardComp />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogCategory setOpenModal={setOpenModal} />
              {openModal && (
                <ModalComp
                  open={openModal}
                  closeModal={(_, event) => {
                    if (event !== "backdropClick") {
                      setOpenModal(false);
                    }
                  }}
                  modalTitle={"BLOG'U KİM YAZIYOR ?"}
                  modalDescription={
                    <ModalDescription setBlogerName={setBlogerName} />
                  }
                  confirmLabel={" Onaylıyorum"}
                  confirmModal={() => {
                    setOpenModal(false);
                  }}
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
