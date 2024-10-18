import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="flex text-center">
      <div className="bg-gray-800 rounded-lg w-96 shadow-md p-4">
        <h4 className="text-2xl text-white font-semibold mb-4">Shopkeepers Panel</h4>
        <ul className="list-none">
          <li className="mb-2">
            <Link
              to="/create-category"
              className="block text-blue-500 hover:underline"
            >
              Create Category
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/create-product"
              className="block text-blue-500 hover:underline"
            >
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
