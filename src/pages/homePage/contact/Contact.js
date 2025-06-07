import React from "react";
import ContactForm from "./ContactForm";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomPaper from "../../../components/paper/CustomPaper";
import { useTheme } from "../../../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <CustomPaper
      padding="2rem"
      bg={theme.backgroundColor || "#f9f9f9"} // tema varsa arkaplan rengi verilebilir
    >
      <CustomTypography
        variant="h5"
        sx={{
          color: theme.primaryColor || "#102a43",
          fontWeight: 600,
          mb: 1.5,
          fontSize: "1.5rem", // ekstra küçültme
          letterSpacing: "0.5px",
          textAlign: "center",
        }}
        text="CONTACT"
      />
      <ContactForm />
    </CustomPaper>
  );
};

export default Contact;
