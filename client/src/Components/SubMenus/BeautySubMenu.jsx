import React, { useState, useEffect } from "react";

function BeautySubMenu() {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsDesktopView(window.innerWidth >= 768); // Adjust the breakpoint as needed
    }
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
        className={`relative group ml-2 mt-5 ${isDesktopView ? '' : 'pointer-events-none'}`}
        onMouseEnter={isDesktopView ? toggleSubMenu : undefined}
        onMouseLeave={isDesktopView ? toggleSubMenu : undefined}
      >
        <p className="font-semibold text-sm no-underline text-gray-800 ml-5">
          BEAUTY
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-1/2 transform -translate-x-1/3 mt-2 w-[1200px] p-4 bg-white border border-gray-300 shadow-lg">
            <div className="flex">
              <div className="w-1/5">
                <ul>
                  <li className="text-green-500 font-semibold">Makeup</li>
                  <li>Lipstick</li>
                  <li>Lip Gloss</li>
                  <li>Lip Liner</li>
                  <li>Mascara</li>
                  <li>Eyeliner</li>
                  <li>Kajal</li>
                  <li>Eyeshadow</li>
                  <li>Foundation</li>
                  <li>Primer</li>
                  <li>Concealer</li>
                  <li>Compact</li>
                  <li>Nail Polish</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-green-500 font-semibold">
                    Skincare, Bath & Body
                  </li>
                  <li>Face Moisturiser</li>
                  <li>Cleanser</li>
                  <li>Masks & Peel</li>
                  <li>Sunscreen</li>
                  <li>Serum</li>
                  <li>Face Wash</li>
                  <li>Eye Cream</li>
                  <li>Lip Balm</li>
                  <li>Body Lotion</li>
                  <li>Body Wash</li>
                  <li>Body Scrub</li>
                  <li>Hand Cream</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">Baby Care</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">Masks</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-green-500 font-semibold">Haircare</li>
                  <li>Shampoo</li>
                  <li>Conditioner</li>
                  <li>Hair Cream</li>
                  <li>Hair Oil</li>
                  <li>Hair Gel</li>
                  <li>Hair Color</li>
                  <li>Hair Serum</li>
                  <li>Hair Accessory</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">Fragrances</li>
                  <li>Perfume</li>
                  <li>Deodorant</li>
                  <li>Body Mist</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-green-500 font-semibold">Appliances</li>
                  <li>Hair Straightener</li>
                  <li>Hair Dryer</li>
                  <li>Epilator</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">
                    Men's Grooming
                  </li>
                  <li>Trimmers</li>
                  <li>Beard Oil</li>
                  <li>Hair Wax</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">
                    Beauty Gift & Makeup Set
                  </li>
                  <li>Beauty Gift</li>
                  <li>Makeup Kit</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">
                    Premium Beauty
                  </li>
                </ul>

                <ul className="mt-2">
                  <li className="text-green-500 font-semibold">
                    Wellness & Hygiene
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-green-500 font-semibold">Top Brands</li>
                  <li>Lakme</li>
                  <li>Maybelline</li>
                  <li>LOreal</li>
                  <li>Philips</li>
                  <li>Bath & Body Works</li>
                  <li>THE BODY SHOP</li>
                  <li>Biotique</li>
                  <li>Mamaearth</li>
                  <li>MCaffeine</li>
                  <li>Nivea</li>
                  <li>Lotus Herbals</li>
                  <li>LOreal Professionnel</li>
                  <li>KAMA AYURVEDA</li>
                  <li>M.A.C</li>
                  <li>Forest Essentials</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BeautySubMenu;
