import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CardComp = (props) => {
    console.log(props.imageURL);
  return (
    <div>
         <Card className="mt-5" sx={{ boxShadow: 3 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140 }}
                  image={props.imageURL}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[#0c8390]"
                  >
                    {props.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                  {props.title2}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    </div>
  )
}

export default CardComp