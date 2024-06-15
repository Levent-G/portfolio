import React from "react";
import { CardContent, Card} from "@mui/material";
import CustomTypography from "../../../components/typography/CustomTypography";
const MyProjectCard = ({...props}) => {
  return (
    <div>
      <Card
        sx={{
          boxShadow: 3,
          height: 250,
          marginTop: "1.25rem",
          paddingLeft: "1.25rem",
          paddingRight: " 1.25rem ",
          paddingTop: "1.25rem",
          paddingBottom: "0.5rem",
        }}
      >
        <CardContent>
          <CustomTypography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#0c8390" }}
            text={(props.title.toUpperCase())}
          />

          <CustomTypography
            variant="body2"
            sx={{ color: "gray" }}
            mb={5}
            text={props.content}
          />
  
      
          <CustomTypography
            variant="body2"
            sx={{ color: "grey",float:"left" ,paddingTop:"1.25rem"}}
            text={props.cardLeftBtn}
          />

          <CustomTypography
            variant="body2"
            sx={{ color: "grey",float:"right",paddingTop:"1.25rem"}}
            text={props.cardRightBtn}
          />
            </CardContent>
      </Card>
    </div>
  );
};

export default MyProjectCard;
