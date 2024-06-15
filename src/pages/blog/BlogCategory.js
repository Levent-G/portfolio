import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import CustomTypography from "../../components/typography/CustomTypography";
import { categories } from "./shared/BlogEnums";

const BlogCategory = () => {
  return (
    <div className="max-w-lg mx-auto px-5 ml-5 rounded shadow border-4 border-gray-200 p-5 h-[40rem] overflow-y-scroll">
      <CustomTypography
        variant="h5"
        fontWeight="bold"
        color="#339961"
        text="Kategoriler"
      />

      <List>
        {categories.map((category, index) => (
          <Link
            to={`/blogcontent/${category.name}`}
            key={index}
            variant="body2"
          >
            <ListItem
              className="mb-2 mt-5 text-gray-500 hover:bg-[#339961] hover:text-white pl-2 p-2 transition duration-500 ease-in-out rounded-lg"
              style={{ cursor: "pointer" }}
              component="div"
            >
              {category.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default BlogCategory;
