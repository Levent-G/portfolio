import React, { useState } from "react";
import CustomPaper from "../../../components/paper/CustomPaper";
import { Typography } from "@gib-ui/core";
import { useTheme } from "../../../context/ThemeContext";
import BlogEkleForm from "./BlogEkleForm";
import BlogCategory from "../../../components/category/BlogCategory";
import { Container, Grid } from "@mui/material";
import Breadcrumbs from "../../../components/breadCrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import ModalComp from "../../../components/modal/ModalComp";
import ModalDescription from "../../../components/modal/ModalDescription";

const BlogEkleMain = () => {
  const { theme } = useTheme();
  const breadcrumbLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Blog Ekle" },
  ];
  const { blogerName } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [blogerNameProps, setBlogerNameProps] = useState("");

  return (
    <CustomPaper padding="2rem">
      <Container maxWidth="lg">
        <Breadcrumbs links={breadcrumbLinks} />
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: theme?.primaryColor,
                fontWeight: 700,
                letterSpacing: "0.03em",
                paddingBottom: 3,
                textTransform: "uppercase",
              }}
            >
              Blog Ekle
            </Typography>

            <BlogEkleForm blogerName={blogerName} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BlogCategory
              isUserCategory={true}
              blogerName={blogerName}
              setOpenModal={setOpenModal}
            />
            {openModal && (
              <ModalComp
                open={openModal}
                closeModal={(_, event) => {
                  if (event !== "backdropClick") {
                    setOpenModal(false);
                  }
                }}
                modalTitle={"BLOG'U KİM YAZIYOR?"}
                modalDescription={
                  <ModalDescription setBlogerName={setBlogerNameProps} />
                }
                confirmLabel={"Onaylıyorum"}
                confirmModal={() => setOpenModal(false)}
                linkTo={`/blogEkle/${blogerNameProps}`}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </CustomPaper>
  );
};

export default BlogEkleMain;
