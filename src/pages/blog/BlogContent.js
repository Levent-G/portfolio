import React, { useEffect, useState } from "react";
import { Avatar, Rating, Box, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomPaper from "../../components/paper/CustomPaper";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import { portfolioDb } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
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
  const breadcrumbLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Blog Content" },
  ];
  const [blogerName, setBlogerName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { bloguuid } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      try {
        const q = query(collection(portfolioDb, "blogs"), where("id", "==", bloguuid));
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSelectedItem(blogData);
      } catch (error) {
        toast.error(`Blog verilerini getirirken bir hata oluştu: ${error}`, { position: "top-right" });
      }
    };

    fetchBlog();
  }, [bloguuid]);

  return (
    <CustomPaper>
      <ToastContainer />
      <Breadcrumbs links={breadcrumbLinks} />
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={8}>
          {selectedItem.map((item, index) => (
            <React.Fragment key={index}>
              <CustomTypography
                variant="h5"
                mb={2}
                text={item.blogBaslik}
                sx={{ color: theme.primaryColor, fontWeight: 700, letterSpacing: "0.02em" }}
              />

              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <Avatar
                  alt={item.yazarName}
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 28, height: 28 }}
                />
                <CustomTypography
                  variant="body2"
                  sx={{ color: "gray", fontWeight: 500 }}
                  text={`${item.yazarName} · ${item.blogTarihi}`}
                />
                <Rating
                  name="half-rating"
                  value={item.stars}
                  precision={0.5}
                  size="small"
                  readOnly
                  sx={{ ml: 2 }}
                />
              </Stack>

              <Box
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  bgcolor: "background.paper",
                  p: 3,
                  mb: 6,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "text.primary",
                }}
              >
                <ReactQuill
                  value={item.blogIcerik}
                  readOnly
                  theme="snow"
                  modules={{ toolbar: false }}
                  style={{ minHeight: "220px" }}
                />
              </Box>

              {item.codeExample && item.codeExample.trim() !== "" && (
                <>
                  <CustomTypography
                    variant="subtitle2"
                    text="Örnek Kod"
                    sx={{ mb: 1, fontWeight: 600, color: theme.primaryColor }}
                  />
                  <SyntaxHighlighter language="javascript" style={solarizedlight} customStyle={{ borderRadius: 8, padding: "16px", fontSize: "0.85rem" }}>
                    {item.codeExample}
                  </SyntaxHighlighter>
                </>
              )}
            </React.Fragment>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <BlogCategory setOpenModal={setOpenModal} />
          {openModal && (
            <ModalComp
              open={openModal}
              closeModal={() => setOpenModal(false)}
              modalTitle={"BLOG'U KİM YAZIYOR?"}
              modalDescription={<ModalDescription setBlogerName={setBlogerName} />}
              confirmLabel={"Onaylıyorum"}
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
