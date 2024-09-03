import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import CustomButton from "../../components/button/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../../firebase/firebase"; 
import { collection, getDocs } from "firebase/firestore"; 

const BlogCategory = () => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categoriesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesData);
        
        
      } catch (error) {
        console.error("Kategorileri getirirken bir hata oluştu: ", error);
      }
    };

    fetchCategories(); 
  }, []); 

  return (
    <>
      <Box className="max-w-lg mx-auto px-5 ml-5 rounded shadow border-4 border-gray-200 p-5 h-[40rem] overflow-y-scroll">
        <CustomTypography
          variant="h5"
          fontWeight="bold"
          color={theme.primaryColor}
          text="Kategoriler"
        />

        <List>
          {categories.map((category) => (
            <Link
              to={`/blogcontent/${category.name}`}
              key={category.id} 
              variant="body2"
            >
              <ListItem
                sx={{
                  mb: 2,
                  mt: 5,
                  color: "gray",
                  "&:hover": {
                    backgroundColor: theme.primaryColor,
                    color: "white",
                  },
                  pl: 2,
                  p: 2,
                  transition: "background-color 0.5s ease-in-out",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                component="div"
              >
                {category.name}
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      <CustomButton
        variant={"outlined"}
        text={"BLOG EKLE"}
        icon={<AddIcon />}
        sx={{ marginLeft: "1.5rem" }}
        fullWidth
        linkTo="/blogekle"
      />
    </>
  );
};

export default BlogCategory;
