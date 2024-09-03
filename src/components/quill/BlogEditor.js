import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill stil dosyası
import CustomTypography from "../typography/CustomTypography";
import { Controller } from "react-hook-form";

const BlogEditor = ({ control, name, ...props }) => {
  return (
    <>
      <CustomTypography variant="h7" text={props?.label} />

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            value={field.value || ""}
            onChange={field.onChange}
            modules={BlogEditor.modules}
            formats={BlogEditor.formats}
            theme="snow"
            className="h-[200px] mb-20"
          />
        )}
      />
    </>
  );
};

BlogEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    ["link", "image"],
    ["clean"],
  ],
};

BlogEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default BlogEditor;
