import React, { useEffect } from "react";
import { Avatar, Rating, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import BlogCategory from "./BlogCategory";
import { blogData } from "./shared/BlogEnums";
import CustomPaper from "../../components/paper/CustomPaper";
import CustomTypography from "../../components/typography/CustomTypography";
const BlogContent = () => {
  const { blogBaslik } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogBaslik]);

  const selectedItem = blogData.filter(
    (item) => item.blogBaslik === blogBaslik
  );

  return (
    <CustomPaper padding="8rem">
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          {selectedItem.map((item, index) => (
            <>
              <CustomTypography variant="h4" mb={3} text={item.blogBaslik} />

              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className="float-left mr-2"
                sx={{ width: 30, height: 30 }}
              />
              <CustomTypography
                variant="h7"
                sx={{ color: "gray" }}
                text={`${item.yazarName},${item.blogTarihi}`}
              />

              <Rating name="half-rating" value={item.starts} precision={0.5} />
              <Box
                sx={{
                  px: 5,
                  borderRadius: 1,
                  boxShadow: 3,
                  border: 4,
                  borderColor: "grey.200",
                  p: 5,
                  mt: 3,
                  lineHeight: "2.5rem",
                  fontSize: "1.25rem",
                  bgcolor: "grey.200",
                }}
              >
                <ReactMarkdown>{item.blogIcerik}</ReactMarkdown>

                {item.codeExample !== undefined ? (
                  <>
                    <CustomTypography variant="h7" text="EXAMPLE" />
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
              </Box>
            </>
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
