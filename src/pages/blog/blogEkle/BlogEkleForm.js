import React, { useState } from "react";
import Form from "../../../components/form/Form";
import { TextField } from "@gib-ui/core";
import { blogEkleFormSchema } from "./shared/BlogEkleFormSchema";
import { useTheme } from "../../../context/ThemeContext";
import { portfolioDb } from "../../../firebase/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import BlogEditor from "../../../components/quill/BlogEditor";
import { v4 as uuidv4 } from "uuid";
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
      blogTarihi,
      yazarName,
      stars,
      blogIcerik,
    };

    try {
      await setDoc(doc(portfolioDb, "blogs", uniqueId), dataWithOthers);

      await addDoc(collection(portfolioDb, "categories"), {
        name: dataWithOthers.blogBaslik,
        user: blogerName,
        blogId: uniqueId,
      });

      navigate("/blog");
      toast.success("Kategori eklendi.", { position: "top-right" });
    } catch (e) {
      toast.error(`Error adding document: ${e}`, { position: "top-right" });
    }
  };

  const commonTextFieldSx = {
    marginBottom: 2,
    fontSize: "0.9rem",
    "& .MuiFormLabel-root": {
      fontSize: "0.9rem",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.primaryColor,
      fontWeight: "600",
    },
    "& .MuiInputBase-input": {
      fontSize: "0.9rem",
    },
  };

  return (
    <Form onSubmit={blogEkle} onReset schema={blogEkleFormSchema}>
      <ToastContainer />
      <TextField
        id="blogBaslik"
        name="blogBaslik"
        key="blogBaslik"
        labeltext="Blog Başlık"
        sx={commonTextFieldSx}
      />

      <TextField
        id="category"
        name="category"
        key="category"
        labeltext="Kategori"
        sx={commonTextFieldSx}
      />

      <BlogEditor
        id="blogIcerik"
        name="blogIcerik"
        key="blogIcerik"
        value={blogIcerik}
        customOnChange={setBlogIcerik}
        label="Blog İçerik"
        sx={{ marginBottom: 3, fontSize: "0.9rem" }}
      />

      <TextField
        id="codeExample"
        name="codeExample"
        key="codeExample"
        labeltext="Kod Örneği"
        multiline
        rows={16}
        sx={{
          marginBottom: 2,
          fontSize: "0.9rem",
          "& .MuiFormLabel-root": { fontSize: "0.9rem" },
          "& .MuiFormLabel-root.Mui-focused": {
            color: theme.primaryColor,
            fontWeight: "600",
          },
          "& .MuiInputBase-input": {
            fontSize: "0.85rem",
            fontFamily: "monospace",
          },
        }}
      />
    </Form>
  );
};

export default BlogEkleForm;
