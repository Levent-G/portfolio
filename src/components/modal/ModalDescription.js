import { TextField } from "@gib-ui/core";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ModalDescription = ({ setBlogerName }) => {
  const theme = useTheme();
  return (
    <TextField
      id="blogerName"
      name="blogerName"
      key="blogerName"
      labeltext="Name"
      sx={{
        marginBottom: 3,
        "& .MuiFormLabel-root.Mui-focused": {
          color: theme.primaryColor,
        },
      }}
      onChange={(e) => setBlogerName(e.target.value)}
    />
  );
};

export default ModalDescription;
