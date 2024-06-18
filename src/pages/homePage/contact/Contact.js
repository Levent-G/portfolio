import React from "react";
import ContactForm from "./ContactForm";
import CustomTypography from "../../../components/typography/CustomTypography";
import CustomPaper from "../../../components/paper/CustomPaper";
import { useTheme } from "../../../context/ThemeContext";
const Contact = () => {
  const {theme} = useTheme();
  return (
    <CustomPaper padding="5rem" >
      <CustomTypography variant="h5" sx={{ color: theme.primaryColor }} text="CONTACT" />
      <ContactForm />
    </CustomPaper>
  );
};

export default Contact;
