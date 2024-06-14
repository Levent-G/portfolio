import React, { useEffect } from "react";
import {
  Typography,
  Avatar,
  Rating,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BlogCategory from "./BlogCategory";
const BlogContent = () => {
  const { blogBaslik } = useParams();
  const { categories } = useData();
  useEffect(() => {
    // Kategori değiştiğinde burada sayfanın en üstüne gitme işlemini yapabilirsiniz.
    window.scrollTo(0, 0);
  }, [blogBaslik]);

  const { blogData } = useData();
  const selectedItem = blogData.filter(
    (item) => item.blogBaslik === blogBaslik
  );

  return (
    <div className="mt-24 bg-gray-100">
      <Box className="p-5">
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              {selectedItem.map((item, index) => (
                <>
                  <Typography variant="h2" className="mb-2 font-bold">
                    {item.blogBaslik}
                  </Typography>

                  <div className="mt-2">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className="float-left mr-2"
                      sx={{ width: 30, height: 30 }}
                    />
                    <Typography variant="h7" className="mb-2 text-gray-400 ">
                      {" "}
                      {item.yazarName}, {item.blogTarihi}
                    </Typography>
                  </div>

                  <Rating
                    name="half-rating"
                    value={item.starts}
                    precision={0.5}
                  />
                  <div className="mt-6 leading-10 text-xl p-5 bg-gray-200">
                    <ReactMarkdown>{item.blogIcerik}</ReactMarkdown>

                    {item.codeExample !== undefined ? (
                      <>
                        <h1 className="mt-5">EXAMPLE</h1>
                        <SyntaxHighlighter
                          language="javascript"
                          style={solarizedlight}
                        >
                          {item?.codeExample}
                        </SyntaxHighlighter>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ))}
            </Grid>

            <Grid item xs={12} md={4}>
              <BlogCategory categories={categories} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default BlogContent;
