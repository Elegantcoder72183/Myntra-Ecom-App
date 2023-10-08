import React, { useState, useEffect } from "react";

function HNLSubMenu() {
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
          HOME & LIVING
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-1/2 transform -translate-x-1/4 mt-2 w-[1200px] p-4 bg-white border border-gray-300 shadow-lg">
            <div className="flex">
              <div className="w-1/5">
                <ul>
                  <li className="text-amber-400 font-semibold">
                    Bed Linen & Furnishing
                  </li>
                  <li>Bedsheets</li>
                  <li>Bedding Sets</li>
                  <li>Blankets, Quilts & Dohars</li>
                  <li>Pillows & Pillow Covers</li>
                  <li>Bed Covers</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">Flooring</li>
                  <li>Carpets</li>
                  <li>Floor Mats & Dhurries</li>
                  <li>Door Mats</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-amber-400 font-semibold">Bath</li>
                  <li>Bath Towels</li>
                  <li>Hand & Face Towels</li>
                  <li>Beach Towels</li>
                  <li>Towels Set</li>
                  <li>Bath Rugs</li>
                  <li>Bath Robes</li>
                  <li>Bathroom Accessories</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">
                    Lamps & Lighting
                  </li>
                  <li>Floor Lamps</li>
                  <li>Ceiling Lamps</li>
                  <li>Table Lamps</li>
                  <li>Wall Lamps</li>
                  <li>Outdoor Lamps</li>
                  <li>String Lights</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-amber-400 font-semibold">Home Décor</li>
                  <li>Plants & Planters</li>
                  <li>Aromas & Candles</li>
                  <li>Clocks</li>
                  <li>Mirrors</li>
                  <li>Wall Décor</li>
                  <li>Wall Shelves</li>
                  <li>Fountains</li>
                  <li>Showpieces & Vases</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">
                    Cushions & Cushion Covers
                  </li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">Curtains</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">
                    Home Gift Sets
                  </li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-amber-400 font-semibold">
                    Kitchen & Table
                  </li>
                  <li>Dinnerware & Serveware</li>
                  <li>Cups and Mugs</li>
                  <li>Bakeware & Cookware</li>
                  <li>Kitchen Storage & Tools</li>
                  <li>Bar & Drinkware</li>
                  <li>Table Covers & Furnishings</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-amber-400 font-semibold">Storage</li>
                  <li>Organisers</li>
                  <li>Hooks & Holders</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-amber-400 font-semibold">Brands</li>
                  <li>Home Centre</li>
                  <li>Spaces</li>
                  <li>D'Decor</li>
                  <li>Portico New York</li>
                  <li>Pure Home & Living</li>
                  <li>Swayam</li>
                  <li>Raymond Home</li>
                  <li>Maspar</li>
                  <li>Corelle</li>
                  <li>Trident</li>
                  <li>Cortina</li>
                  <li>Story@Home</li>
                  <li>Random</li>
                  <li>Ellementry</li>
                  <li>ROMEE</li>
                  <li>SEJ by Nisha Gupta</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HNLSubMenu;
