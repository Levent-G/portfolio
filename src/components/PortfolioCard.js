import React from 'react'
import gibteknoloji from '../assets/img/gibteknoloji.PNG';
import Card from '@mui/material/Card';
import sosyalmedya from '../assets/img/sosyalmedya.PNG';
import stock from '../assets/img/stock.PNG';
import todoapp from '../assets/img/todoapp.PNG';
import sepet from '../assets/img/sepet.PNG';
import notpad from '../assets/img/notpad.PNG';
import chat from '../assets/img/chat.PNG';
import Grid from '@mui/material/Grid';
const PortfolioCard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 345 }}>
            <img src={gibteknoloji} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={sosyalmedya} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={stock} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={sepet} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={todoapp} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={notpad} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={chat} alt="" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioCard