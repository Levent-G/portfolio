import React from 'react'
import sepet from '../assets/img/sepet.PNG';
import Card from '@mui/material/Card';
import stock from '../assets/img/stock.PNG';
import Grid from '@mui/material/Grid';
const PortfolioCard3 = () => {
  return (
    <div>
      {" "}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={stock} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={sepet} alt="" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioCard3