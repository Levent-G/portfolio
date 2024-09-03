import React from "react";
import Form from "../../../components/form/Form";
import { TextField } from "@gib-ui/core";
import { blogEkleFormSchema } from "./shared/BlogEkleFormSchema";
import { useTheme } from "../../../context/ThemeContext";
const BlogEkleForm = () => {
  const { theme } = useTheme();

  const blogEkle = (data) => {
    console.log("data", data);
  };


  return (
    <Form onSubmit={blogEkle} onReset schema={blogEkleFormSchema}>
          <TextField
            id="blogBaslik"
            name="blogBaslik"
            key="blogBaslik"
            labeltext="Blog Başlık"
            sx={{
              marginBottom: 3,
              "& .MuiFormLabel-root.Mui-focused": {
                color: theme.primaryColor,
              },
            }}
          />

          <TextField
            id="category"
            name="category"
            key="category"
            labeltext="Kategori"
            sx={{
              marginBottom: 3,
              "& .MuiFormLabel-root.Mui-focused": {
                color: theme.primaryColor,
              },
            }}
          />

          <TextField
            id="blogIcerik"
            name="blogIcerik"
            key="blogIcerik"
            labeltext="Blog İçerik"
            multiline
            rows={4}
            sx={{
              marginBottom: 3,
              "& .MuiFormLabel-root.Mui-focused": {
                color: theme.primaryColor,
              },
            }}
          />

          <TextField
            id="codeExample"
            name="codeExample"
            key="codeExample"
            labeltext="Kod Örneği"
            multiline
            rows={4}
            sx={{
              marginBottom: 3,
              "& .MuiFormLabel-root.Mui-focused": {
                color: theme.primaryColor,
              },
            }}
          />
    </Form>
  );
};

export default BlogEkleForm;
