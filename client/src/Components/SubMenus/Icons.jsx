import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

function Icons() {
  const [auth, setAuth] = useAuth();
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Sucessfully");
  };

  return (
    <div className="flex">
      <div
        className="relative group ml-20 mt-4"
        onMouseEnter={toggleSubMenu}
        onMouseLeave={toggleSubMenu}
      >
        <p className="text-sm font-bold">
          <img
            className="ml-2"
            src="https://img.icons8.com/material-outlined/24/000000/gender-neutral-user.png"
            alt=""
          />
          <span>
            {" "}
            <Link
              to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
            >
              {" "}
              Profile{" "}
            </Link>{" "}
          </span>
        </p>
        {isSubMenuVisible && (
          <div className="absolute w-56 left-1/2 mt-4 rounded-lg transform -translate-x-1/2  p-5 bg-white  border-gray-300 shadow-lg">
            {!auth.user ? (
              <div>
                <button className="cursor-pointer my-2 bg-while  w-44 text-center py-3 px-4 text-pink-600  border-pink-600 border-2 font-semibold text-base leading-6 ">
                  <Link to={"/login"}>Login</Link>
                </button>
                <button className="cursor-pointer my-2 bg-while  w-44 text-center py-3 px-4 text-pink-600 border-pink-600 border-2 font-semibold text-base leading-6 ">
                  <Link to={"/register"}>Register</Link>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="cursor-pointer my-2 bg-while  w-44 text-center py-3 px-4 text-pink-600 border-pink-600 border-2 font-semibold text-base leading-6 "
              >
                {" "}
                <Link to={"/login"}>LogOut</Link>
              </button>
            )}
          </div>
        )}
      </div>

      <p className="ml-10 mt-4 text-sm font-bold">
        <img
          className="ml-3"
          src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
          alt=""
        />

        <span>
          {" "}
          <Link to={"/wishlist"}> Wishlist </Link>{" "}
        </span>
      </p>

      <p className="ml-10 mt-4 text-sm font-bold">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
          alt=""
        />

        <span>
          <Link to={"/bag"}>Bag</Link>
        </span>
      </p>
    </div>
  );
}

export default Icons;
