import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import CustomButton from "../../components/button/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

const BlogCategory = ({ isUserCategory }) => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async (user) => {
      try {
        let q;
        if (user === "levent") {
          // Eğer user "levent" ise, sadece "user" alanı "levent" olanları çek
          q = query(
            collection(db, "categories"),
            where("user", "==", "levent")
          );
        } else {
          // Aksi takdirde, tüm kategorileri çek
          q = query(collection(db, "categories"));
        }

        // Veriyi çekin
        const querySnapshot = await getDocs(q);
        const categoriesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.error("Kategorileri getirirken bir hata oluştu: ", error);
      }
    };

    fetchCategories(isUserCategory && "levent");
  }, []);

  return (
    <>
      <Box className="max-w-lg mx-auto px-5 ml-5 rounded shadow border-4 border-gray-200 p-5 h-[45rem] overflow-y-scroll">
        <CustomTypography
          variant="h5"
          fontWeight="bold"
          color={theme.primaryColor}
          text={isUserCategory?"Levent's Blog":"Kategoriler"} // login gelince düzeltilcek
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
