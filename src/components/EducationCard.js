import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import Typography from '@mui/material/Typography';
import {  Container } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WebIcon from '@mui/icons-material/Web';
const EducationCard = () => {
  return (
    <div >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Card className="mt-5 text-center p-12" sx={{ boxShadow: 3, maxWidth: 545 ,maxHeight:300}}>
                <CardActionArea>
                  <MenuBookIcon
                    style={{ fontSize: 50 }}
                    className="text-[#495e61]"
                  />
                  <CardContent>
                  <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="text-[#0c8390] "
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
            </Grid>
            <Grid item xs={12} md={3}>
            <Card className="mt-5 text-center p-12" sx={{ boxShadow: 3, maxWidth: 545 ,height:300}}>
                <CardActionArea>
                  <WebIcon
                    style={{ fontSize: 50 }}
                    className="text-[#495e61]"
                  />
                  <CardContent>
                  <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      className="text-[#0c8390]"
                    >
                      Gelir Idaresi Baskanligi
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="div"
                      className="text-[#0c8390]"
                    >
                      3 month
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
         
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default EducationCard