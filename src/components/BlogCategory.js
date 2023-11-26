import React from 'react'
import { Link } from "react-router-dom";
const BlogCategory = (categories) => {

  return (
    <div className="max-w-lg mx-auto   px-5 ml-5 rounded shadow border-4 border-gray-200 p-5">
      <h2 className="text-xl mb-4 font-bold text-[#339961]">Kategoriler</h2>
      <ul>
        {categories.categories.map((category, index) => (
          <Link to={`/blogcontent/${category.name}`} variant="body2">
            <li
              key={index}
              className="mb-2 mt-5 text-gray-500 hover:bg-[#339961] hover:text-white pl-2 p-2 transition duration-500 ease-in-out rounded-lg"
            >
              {category.name}
              <hr />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BlogCategory