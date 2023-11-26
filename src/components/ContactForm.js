import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import TextField from "@mui/material/TextField";
const ContactForm = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card className="mt-5 p-5 bg-[#398F60]" sx={{ boxShadow: 3 }}>
              <CardActionArea>
                <CardContent>
                  <form>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="text"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="text"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      autoComplete="text"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="message"
                      label="Message"
                      name="message"
                      autoComplete="text"
                    />
                    <p
                      variant="contained"
                      className="text-white bg-[#398F60] p-3  "
                    >
                      SEND MESSAGE
                    </p>
                  </form>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="mt-5 " sx={{ boxShadow: 3 }}>
              <CardActionArea>
                <CardContent>
                  <iframe
                    title="Example Website"
                    className="w-full h-[408px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.7199739243!2d32.76276475!3d39.903376550000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1694531965781!5m2!1str!2str"
                  ></iframe>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactForm