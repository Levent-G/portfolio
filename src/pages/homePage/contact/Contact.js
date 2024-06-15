import React from "react";
import ContactForm from "./ContactForm";
import CustomTypography from "../../../components/typography/CustomTypography";
import { Box } from "@mui/material";
const Contact = () => {
  return (
    <Box padding="5rem"  >
      <CustomTypography variant="h4" sx={{ color: "#297580" }} text="CONTACT" />

      <ContactForm />
    </Box>
  );
};

export default Contact;
