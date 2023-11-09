import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import Typography from '@mui/material/Typography';
import {  Container } from '@mui/material'
import WebIcon from '@mui/icons-material/Web';
const ExperienceCard = () => {
  return (
    <div>
      <Container>
      <Card
          className="mt-5 text-center p-5 bg-[#297580]"
          sx={{ boxShadow: 3, maxWidth: 345, maxHeight: 300,backgroundColor:"#398F60" }}
        >
          <CardActionArea>
            <WebIcon style={{ fontSize: 50 }} className="text-white" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="text-white"
              >
                Gelir Idaresi Baskanligi
              </Typography>
              <Typography
                gutterBottom
                variant="h7"
                component="div"
                className="text-white"
              >
                3 month
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}

export default ExperienceCard