import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

function Icons() {
  const [auth, setAuth] = useAuth();
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const toggleSubMenu = () => {
    setSubMenuVisible(true);
    clearTimeout(submenuTimeout);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      hideSubMenu();
    }, 1500);
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

  useEffect(() => {
    return () =>
    {
      clearTimeout(submenuTimeout);
    }
  }, [submenuTimeout]);

  return (
    <div className="flex">
      <div
        className="relative group ml-10 mt-4"
        onMouseEnter={toggleSubMenu}
        onMouseLeave={handleMouseLeave}
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
              <div className="ml-8">
                <button className="cursor-pointer my-2 bg-while  w-32 text-center py-3 px-4 text-white bg-pink-600   text-base leading-6 ">
                  <Link to={"/login"}>Login</Link>
                </button>
                <button className="cursor-pointer my-2 bg-while  w-32 text-center py-3 px-4 text-white bg-pink-600   text-base leading-6 ">
                  <Link to={"/register"}>Register</Link>
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="cursor-pointer my-2 bg-while  w-32 text-center py-3 px-4 text-white bg-pink-600   text-base leading-6 "
              >
                {" "}
                <Link to={"/login"}>Logout</Link>
              </button>
              </div>
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
