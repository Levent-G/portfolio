import React from 'react'
import Card from '@mui/material/Card';

import todoapp from '../assets/img/todoapp.PNG';

import notpad from '../assets/img/notpad.PNG';
import chat from '../assets/img/chat.PNG';
import Grid from '@mui/material/Grid';
const PortfolioCard = () => {
  return (
    <div>
      <Grid container spacing={2}>
      
       
        <Grid item xs={12} md={4}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={todoapp} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={notpad} alt="" />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="mt-5" sx={{ boxShadow: 3, maxWidth: 545 }}>
            <img src={chat} alt="" />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioCard