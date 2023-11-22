import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import Typography from '@mui/material/Typography';
import {  Container } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';

const EducationCard = () => {
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          className="text-white font-bold leading-[3rem] max-w-lg mx-auto  pb-5"
        >
          EDUCATION
        </Typography>
        <Card
          className="mt-5 text-center p-5 "
          sx={{ boxShadow: 3, maxWidth: 345, height: 250 }}
        >
          <CardActionArea>
            <MenuBookIcon style={{ fontSize: 50 }} className="text-[#495e61]" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-[#0c8390]"
              >
                Tokat Gaziosmanpasa Universtiy
              </Typography>
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                className="text-[#0c8390]"
              >
                4 year
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}

export default EducationCard