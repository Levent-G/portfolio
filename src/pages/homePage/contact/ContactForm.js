import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../components/button/CustomButton";

import Map from "../../../components/map/Map";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="dense"
              size="small"
              InputProps={{ style: { fontSize: 14, padding: '10px 12px' } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
            <TextField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              margin="dense"
              size="small"
              InputProps={{ style: { fontSize: 14, padding: '10px 12px' } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
              fullWidth
              margin="dense"
              size="small"
              InputProps={{ style: { fontSize: 14, padding: '10px 12px' } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
            <CustomButton
              type="submit"
              text="Send Message"
              size="medium"
              sx={{ mt: 2, width: "100%", fontSize: 14, padding: "10px 0" }}
            />
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
