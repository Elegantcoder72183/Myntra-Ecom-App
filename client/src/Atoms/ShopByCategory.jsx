import React from "react";
import category from "../mockData/category"; // Import the category data from the separate file
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  return (
    <div className="sm:mt-10">
      <h4 className="uppercase text-gray-700 flex justify-center tracking-wider text-xl sm:text-3xl font-semibold mt-10 sm:ml-8 mb-2">
        SHOP BY CATEGORY
      </h4>
      <div className="flex flex-wrap justify-center sm:mt-16">
        {category.map((item) => (
          <div key={item.id} className="w-1/3 sm:px-0 sm:w-1/6 sm:mb-4 mobile-center">
            <div className=""> 
            <Link to="/products">
              <img
                src={item.ImgSrc}
                alt={`Image ${item.id}`}
                className=" sm:w-full sm:h-auto"
              />
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
