import React, { useEffect, useState } from "react";
import { Avatar, Rating, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomPaper from "../../components/paper/CustomPaper";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import { db } from "../../firebase/firebase"; // Firestore yapılandırmasını içe aktar
import { collection, query, where, getDocs } from "firebase/firestore"; // Firestore'dan veri çekmek için modüller
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BlogCategory from "../../components/category/BlogCategory";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ModalDescription from "../../components/modal/ModalDescription";
import ModalComp from "../../components/modal/ModalComp";

const BlogContent = () => {
  const { blogBaslik } = useParams();
  const { theme } = useTheme();
  const [selectedItem, setSelectedItem] = useState([]);
  const breadcrumbLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Blog Content" },
  ];
  const [blogerName, setBlogerName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Firestore'dan blog verilerini getiren fonksiyon
    const fetchBlog = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          where("blogBaslik", "==", blogBaslik)
        );
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSelectedItem(blogData); // Firestore'dan alınan veriyi state'e set ettik
      } catch (error) {
        console.error("Blog verilerini getirirken bir hata oluştu: ", error);
      }
    };

    fetchBlog();
  }, [blogBaslik]); // blogBaslik değiştiğinde useEffect yeniden çalışacak

  return (
    <CustomPaper padding="2rem" paddingTop="6rem">
      <Breadcrumbs links={breadcrumbLinks} />
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          {selectedItem.map((item, index) => (
            <React.Fragment key={index}>
              <CustomTypography
                variant="h5"
                mb={3}
                text={item.blogBaslik}
                sx={{ color: theme.primaryColor }}
              />

              <Avatar
                alt="Author Avatar"
                src="/static/images/avatar/1.jpg"
                className="float-left mr-2"
                sx={{ width: 30, height: 30 }}
              />
              <CustomTypography
                variant="h7"
                sx={{ color: "gray" }}
                text={`${item.yazarName}, ${item.blogTarihi}`}
              />

              <Rating name="half-rating" value={item.stars} precision={0.5} />
              <Box
                sx={{
                  px: 5,
                  borderRadius: 1,
                  boxShadow: 3,
                  border: 4,
                  borderColor: "grey.100",
                  p: 5,
                  mt: 3,
                  lineHeight: "2.5rem",
                  fontSize: "1.25rem",
                  bgcolor: "grey.100",
                }}
                dangerouslySetInnerHTML={{ __html: item.blogIcerik }} // Quill'den gelen HTML içeriği
              />

              {item.codeExample !== "" ? (
                <>
                  <CustomTypography variant="h7" text="EXAMPLE" />
                  <SyntaxHighlighter
                    language="javascript"
                    style={solarizedlight}
                  >
                    {item.codeExample}
                  </SyntaxHighlighter>
                </>
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <BlogCategory setOpenModal={setOpenModal} />
          {openModal && (
            <ModalComp
              open={openModal}
              closeModal={() => {
                setOpenModal(false);
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
    </CustomPaper>
  );
};

export default BlogContent;
