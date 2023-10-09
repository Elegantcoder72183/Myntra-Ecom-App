import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import MenSubMenu from "./SubMenus/MenSubMenu";
import WomenSubMenu from "./SubMenus/WomenSubMenu";
import KidsSubMenu from "./SubMenus/KidsSubMenu";
import BeautySubMenu from "./SubMenus/BeautySubMenu";
import StudioSubMenu from "./SubMenus/StudioSubMenu";
import HNLSubMenu from "./SubMenus/HNLSubMenu";
import Icons from "./SubMenus/Icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed flex flex-col sm:flex-row p-2 w-full h-auto sm:h-24 top-0 right-0 z-10 bg-white shadow-md">
        {/* Mobile menu icon */}
        <div className="sm:hidden flex items-center justify-start pr-4">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Company logo */}
        <div className=" flex items-center justify-center  pr-4 w-full">
          <div className="flex items-center">
        <a href="/" className="flex items-center ml-4 mr-2">
          <img
            src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=600,height=450"
            alt=""
            className="w-full h-10 mt-4 sm:w-full sm:h-12"
          />
        </a>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden flex flex-wrap item-center w-full ">
            <Link to="/products" className="w-1/2 sm:w-auto">
              <MenSubMenu />
            </Link>
            <Link to="/products" className="w-1/2 sm:w-auto">
              <WomenSubMenu />
            </Link>
            <Link to="/products" className="w-1/2 sm:w-auto">
              <KidsSubMenu />
            </Link>
            <Link to="/products" className="w-1/2 sm:w-auto">
              <HNLSubMenu />
            </Link>
            <Link to="/products" className="w-1/2 sm:w-auto">
              <BeautySubMenu />
            </Link>
            <Link to="/products" className="w-1/2 sm:w-auto">
              <StudioSubMenu />
            </Link>
            <h4 className="text-pink-700 font-bold hidden sm:block text-xs mt-3 ml-4">NEW</h4>
          </div>
        )}

        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex flex-row items-center ml-8 ">
          <Link to="/products">
            <MenSubMenu />
          </Link>
          <Link to="/products">
            <WomenSubMenu />
          </Link>
          <Link to="/products">
            <KidsSubMenu />
          </Link>
          <Link to="/products">
            <HNLSubMenu />
          </Link>
          <Link to="/products">
            <BeautySubMenu />
          </Link>
          <Link to="/products">
            <StudioSubMenu />
          </Link>
          <h4 className="text-pink-700 hidden sm:block font-bold text-xs mt-3 ml-4">NEW</h4>
        </div>

        {/* Search bar for desktop view */}
        <div className="hidden sm:block ">
          <input
            type="text"
            className="h-9 w-96 bg-gray-100 ml-16 mt-5 text-xs rounded px-3"
            placeholder="Search for products, brands and more"
          />
        </div>
          <div >
        <Icons className="" />
        </div>
        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
