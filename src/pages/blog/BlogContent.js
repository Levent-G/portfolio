import React, { useEffect, useState } from "react";
import { Avatar, Rating, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import BlogCategory from "./BlogCategory";
import CustomPaper from "../../components/paper/CustomPaper";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import { db } from "../../firebase/firebase"; // Firestore yapılandırmasını içe aktar
import { collection, query, where, getDocs } from "firebase/firestore"; // Firestore'dan veri çekmek için modüller
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
const BlogContent = () => {
  const { blogBaslik } = useParams();
  const { theme } = useTheme();
  const [selectedItem, setSelectedItem] = useState([]);

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
    <CustomPaper paddingTop="8rem" padding="5rem">
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
          <BlogCategory />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default BlogContent;
