import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import CustomTypography from "../typography/CustomTypography";
import { Controller } from "react-hook-form";
import { Typography } from "@mui/material"; 
import { Box } from "@gib-ui/core";

const BlogEditor = ({ control, name, ...props }) => {
  return (
    <Box className="mb-20">
      <Controller
        name={name}
        control={control}
        render={({
          field,
          fieldState: { error }, 
        }) => (
          <>
            <CustomTypography
              variant="h7"
              text={props?.label}
              className={error ? "text-red-500" : ""}
            />
         
              <ReactQuill
                value={field.value || ""}
                onChange={field.onChange}
                modules={BlogEditor.modules}
                formats={BlogEditor.formats}
                theme="snow"
                className={`h-[200px] mb-12    ${
                  error ? " border border-red-500" : ""
                }`} 
              />
           
            {error && (
              <Typography variant="body2" color="error">
                {error.message}
              </Typography>
            )}{" "}
           
          </>
        )}
      />
    </Box>
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