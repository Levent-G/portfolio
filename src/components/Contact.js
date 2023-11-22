import React from 'react'
import {  Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div className="mt-12 p-12 ">
      <Container>
        <Typography
          variant="h4"
          className="text-[#297580]   font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
        >
          CONTACT
        </Typography>
      
        <ContactForm/>
        
      </Container>
    </div>
  );
}

export default Contact