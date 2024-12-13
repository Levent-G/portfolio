import React from "react";
import { CardContent, Card} from "@mui/material";
import CustomTypography from "../../../components/typography/CustomTypography";
import { useTheme } from "../../../context/ThemeContext";
const MyProjectCard = ({...props}) => {
  const {theme} = useTheme();
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
            variant="h6"
            component="div"
            sx={{ color: theme.primaryColor }}
            text={(props.title.toUpperCase())}
          />

          <CustomTypography
            variant="h7"
            sx={{ color: "#495e61"}}
            mb={5}
            text={props.content}
          />
  
      
          <CustomTypography
            variant="h7"
            sx={{ color: "#495e61",float:"left" ,paddingTop:"1.25rem"}}
            text={props.cardLeftBtn}
          />

          <CustomTypography
            variant="h7"
            sx={{ color: "#495e61",float:"right",paddingTop:"1.25rem"}}
            text={props.cardRightBtn}
          />
            </CardContent>
      </Card>
    </div>
  );
};

export default MyProjectCard;
