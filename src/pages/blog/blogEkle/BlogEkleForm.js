import React, { useState } from "react";
import Form from "../../../components/form/Form";
import { TextField } from "@gib-ui/core";
import { blogEkleFormSchema } from "./shared/BlogEkleFormSchema";
import { useTheme } from "../../../context/ThemeContext";
import { db } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import BlogEditor from "../../../components/quill/BlogEditor"; // BlogEditor bileşenini içe aktar

const BlogEkleForm = ({blogerName}) => {
  const { theme } = useTheme();
  const [blogIcerik, setBlogIcerik] = useState("");

  const blogEkle = async (data) => {
    const yazarName = "Levent";
    const today = new Date();
    const blogTarihi = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    const stars = 2.5;
console.log(blogIcerik)
    const dataWithOthers = {
      ...data,
      blogTarihi: blogTarihi,
      yazarName: yazarName,
      stars: stars,
      blogIcerik: blogIcerik, 
    };
    try {
      const docRef = await addDoc(collection(db, "blogs"), dataWithOthers);
      console.log("Document written with ID: ", docRef.id);

      // Kategori tablosuna blog başlığını ekle
      await addDoc(collection(db, "categories"), {
        name: dataWithOthers.blogBaslik,
        user:blogerName 
      });
      console.log("Kategori eklendi: ", data.blogBaslik);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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

      <BlogEditor
        id="blogIcerik"
        name="blogIcerik"
        key="blogIcerik"
        value={blogIcerik}
        customOnChange={setBlogIcerik}
        label="Blog İçerik"
      />

      <TextField
        id="codeExample"
        name="codeExample"
        key="codeExample"
        labeltext="Kod Örneği"
        multiline
        rows={4}
        sx={{
          marginTop:3,
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
