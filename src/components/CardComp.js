import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  {CardActionArea}  from '@mui/material';
import Typography from '@mui/material/Typography';


const CardComp = (props) => {

  return (
    <div>
         <Card className="mt-5 px-5 pt-5 pb-2" sx={{ boxShadow: 3,height:245 }}>
              <CardActionArea>
              
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-[#0c8390]"
                  >
                    {props.title}
                  </Typography>

                  <Typography variant="body2" className="text-gray-500 float-left pt-5" >
                  {props.title4}
                  </Typography>

                  <Typography variant="body2"  className="text-gray-400 float-left pt-5">
                  {props.title2}
                  </Typography>

                  <Typography variant="body2"  className="text-gray-400 float-right pt-5">
                  {props.title3}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    </div>
  )
}

export default CardComp