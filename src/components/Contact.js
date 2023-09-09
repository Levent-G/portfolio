import React from 'react'
import {  Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div className="mt-12 p-12 bg-[#398F60]">
      <Container>
        <Typography
          variant="h4"
          className="text-white   font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
        >
          CONTACT
        </Typography>
      
        <ContactForm/>
        
      </Container>
    </div>
  );
}

export default Contact