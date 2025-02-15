import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomTypography from "../typography/CustomTypography";
import { Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import { Box } from "@gib-ui/core";

const BlogEditor = ({
  control,
  name,
  customOnChange,
  value: externalValue,
  ...props
}) => {
  return (
    <Box className="mb-20">
      <Controller
        name={name}
        control={control}
        defaultValue={externalValue || ""} 
        render={({ field, fieldState: { error } }) => (
          <>
            <CustomTypography
              variant="h7"
              text={props?.label}
              className={error ? "text-red-500" : ""}
            />
            <ReactQuill
              value={field.value || ""} 
              onChange={(text) => {
                field.onChange(text); 
                if (customOnChange) {
                  customOnChange(text); 
                }
              }}
              modules={BlogEditor.modules}
              formats={BlogEditor.formats}
              theme="snow"
              className={`h-[200px] mb-12 ${
                error ? " border border-red-500" : ""
              }`}
            />
            {error && (
              <Typography variant="body2" color="error">
                {error.message}
              </Typography>
            )}
          </>
        )}
      />
    </Box>
  );
};

export default BlogEditor;
