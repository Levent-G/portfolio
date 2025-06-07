import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import CustomTypography from "../../components/typography/CustomTypography";
import { useTheme } from "../../context/ThemeContext";
import CustomButton from "../../components/button/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { portfolioDb } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogCategory = ({ isUserCategory, setOpenModal, blogerName }) => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async (blogerName) => {
      try {
        let q;
        if (blogerName === undefined) {
          q = query(collection(portfolioDb, "categories"));
        } else {
          q = query(
            collection(portfolioDb, "categories"),
            where("user", "==", blogerName)
          );
        }

        const querySnapshot = await getDocs(q);

        const categoriesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesData);
      } catch (error) {
        toast.error(`Kategorileri getirirken bir hata oluştu: ${error}`, {
          position: "top-right",
        });
      }
    };

    fetchCategories(isUserCategory && blogerName);
  }, [isUserCategory, blogerName]);

  return (
    <>
      <Box
        className="max-w-lg mx-auto px-5 ml-5 rounded shadow border border-gray-300 p-5 h-[45rem] overflow-y-scroll mt-12"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: `${theme.primaryColor} transparent`,
          "&::-webkit-scrollbar": {
            width: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.primaryColor,
            borderRadius: 3,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          backgroundColor: "background.paper",
        }}
      >
        <ToastContainer />
        <CustomTypography
          variant="h6"
          fontWeight="600"
          color={theme.primaryColor}
          text={isUserCategory ? `${blogerName}'s Blog` : "Kategoriler"}
          sx={{ fontSize: 16, mb: 2 }}
        />

        <List sx={{ p: 0 }}>
          <CustomTypography
            variant="body2"
            text={categories.length === 0 && "Hiç Blogunuz Bulunamadı"}
            sx={{ fontSize: 13, color: "text.secondary", mb: 1 }}
          />
          {categories.map((category) => (
            <Link
              to={`/blogcontent/${category.blogId}`}
              key={category.id}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                sx={{
                  mb: 1.5,
                  mt: 3,
                  color: "text.secondary",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 1.5,
                  px: 2,
                  py: 1,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.primaryColor,
                    color: "#fff",
                    boxShadow: `0 2px 10px ${theme.primaryColor}88`,
                  },
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
        variant="outlined"
        text={"BLOG EKLE"}
        icon={<AddIcon />}
        sx={{ mt: 3, mb: 3, fontSize: 14 }}
        fullWidth
        onClick={() => setOpenModal(true)}
      />
    </>
  );
};

export default BlogCategory;
