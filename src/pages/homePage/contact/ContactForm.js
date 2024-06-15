import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../components/button/CustomButton";

import Map from "../../../components/map/Map";
const ContactForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const redirectToEmail = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              margin="normal"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              label="Subject"
              autoComplete="email"
              fullWidth
            />
            <CustomButton
              text="SEND MESSAGE"
              onClick={redirectToEmail}
              size="large"
              sx={{ width: "100%" }}
            />
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
