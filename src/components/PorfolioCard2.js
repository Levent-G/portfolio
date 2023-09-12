import React from 'react'
import gibteknoloji from '../assets/img/gibteknoloji.PNG';
import Card from '@mui/material/Card';
import sosyalmedya from '../assets/img/sosyalmedya.PNG';
import Grid from '@mui/material/Grid';
const PorfolioCard2 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={gibteknoloji} alt=""  />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={sosyalmedya} alt="" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PorfolioCard2