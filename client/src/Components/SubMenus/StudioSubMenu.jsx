import React, { useState, useEffect } from "react";
import studioImage from "../../Assets/sudio-nav-banner.png";

function StudioSubMenu() {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktopView(window.innerWidth >= 768); // Adjust the breakpoint as needed
    }
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubMenu = () => {
    if (isDesktopView) {
      setSubMenuVisible(!isSubMenuVisible);
    }
  };

  return (
    <>
      <div
        className={`relative group ml-2 mt-5 ${
          isDesktopView ? "" : "pointer-events-none"
        }`}
        onMouseEnter={isDesktopView ? toggleSubMenu : undefined}
        onMouseLeave={isDesktopView ? toggleSubMenu : undefined}
      >
        <p className="font-semibold text-sm no-underline text-gray-800 ml-5">
          STUDIO
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-1/2 transform -translate-x-1/3 mt-2 w-[600px] p-4 bg-white border border-gray-300 shadow-lg flex flex-col items-center justify-center">
            <h4 className="font-bold text-4xl">Studio</h4>
            <p className="text-sm p-2">
              Your daily inspiration for everything fashion
            </p>
            <img src={studioImage} className=" w-[800px]" alt="Studio Image" />

            <button className="w-48 border mt-8 p-4 border-black">
              Explore Studio
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default StudioSubMenu;
