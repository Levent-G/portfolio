import React, { useState } from "react";
import Form from "../../../components/form/Form";
import { TextField } from "@gib-ui/core";
import { blogEkleFormSchema } from "./shared/BlogEkleFormSchema";
import { useTheme } from "../../../context/ThemeContext";
import { db } from "../../../firebase/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import BlogEditor from "../../../components/quill/BlogEditor"; // BlogEditor bileşenini içe aktar
import { v4 as uuidv4 } from 'uuid'; // uuid kütüphanesini import et
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BlogEkleForm = ({ blogerName }) => {
  const { theme } = useTheme();
  const [blogIcerik, setBlogIcerik] = useState("");
  const navigate = useNavigate();

  const blogEkle = async (data) => {
    const yazarName = "Levent";
    const today = new Date();
    const blogTarihi = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
    const stars = 2.5;
    const uniqueId = uuidv4(); 
  
    const dataWithOthers = {
      ...data,
      id: uniqueId, 
      blogTarihi: blogTarihi,
      yazarName: yazarName,
      stars: stars,
      blogIcerik: blogIcerik,
    };
  
    try {
      // Firestore'da belirli bir ID ile belge oluştur ve ID'yi içeriğe ekle
      await setDoc(doc(db, "blogs", uniqueId), dataWithOthers);
  
      // Kategori tablosuna blog başlığını ekle
      await addDoc(collection(db, "categories"), {
        name: dataWithOthers.blogBaslik,
        user: blogerName,
        blogId: uniqueId, // Kategorinin blogID'sini ekle
      });
  
      navigate("/blog");
      toast.success("Kategori eklendi.", { position: "top-right" });
    } catch (e) {
      toast.error(`Error adding document:${e} `, { position: "top-right" });
    }
  };
  
 
  return (
    <Form onSubmit={blogEkle} onReset schema={blogEkleFormSchema}>
          <ToastContainer />
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
        rows={24}
        sx={{
          marginTop: 3,
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
