import React, { useState, useEffect } from "react";

function KidsSubMenu() {
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
          KIDS
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-0 mt-2 w-[1200px] p-4 bg-white border border-gray-300 shadow-lg">
            <div className="flex">
              <div className="w-1/5">
                <ul>
                  <li className="text-orange-500 font-semibold">
                    Boys Clothing
                  </li>
                  <li>T-Shirts</li>
                  <li>Shirts</li>
                  <li>Shorts</li>
                  <li>Jeans</li>
                  <li>Trousers</li>
                  <li>Clothing Sets</li>
                  <li>Ethnic Wear</li>
                  <li>Track Pants & Pyjamas</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Party Wear</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-orange-500 font-semibold">
                    Girls Clothing
                  </li>
                  <li>Dresses</li>
                  <li>Tops</li>
                  <li>Tshirts</li>
                  <li>Clothing Sets</li>
                  <li>Lehenga choli</li>
                  <li>Kurta Sets</li>
                  <li>Party wear</li>
                  <li>Dungarees & Jumpsuits</li>
                  <li>Skirts & shorts</li>
                  <li>Tights & Leggings</li>
                  <li>Jeans, Trousers & Capris</li>
                  <li>Jacket, Sweater & Sweatshirts</li>
                  <li>Innerwear & Thermals</li>
                  <li>Nightwear & Loungewear</li>
                  <li>Value Packs</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-orange-500 font-semibold">Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Flipflops</li>
                  <li>Sports Shoes</li>
                  <li>Flats</li>
                  <li>Sandals</li>
                  <li>Heels</li>
                  <li>School Shoes</li>
                  <li>Socks</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-orange-500 font-semibold">Toys</li>
                  <li>Learning & Development</li>
                  <li>Activity Toys</li>
                  <li>Soft Toys</li>
                  <li>Action Figure / Play set</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-orange-500 font-semibold">Infants</li>
                  <li>Bodysuits</li>
                  <li>Rompers & Sleepsuits</li>
                  <li>Clothing Sets</li>
                  <li>Tshirts & Tops</li>
                  <li>Dresses</li>
                  <li>Bottom wear</li>
                  <li>Winter Wear</li>
                  <li>Innerwear & Sleepwear</li>
                  <li>Infant Care</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-orange-500 font-semibold">Home & Bath</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-orange-500 font-semibold">Home & Bath</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-orange-500 font-semibold">
                    Kids Accessories
                  </li>
                  <li>Bags & Backpacks</li>
                  <li>Watches</li>
                  <li>Jewellery & Hair accessory</li>
                  <li>Sunglasses</li>
                  <li>Masks & Protective Gears</li>
                  <li>Caps & Hats</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-orange-500 font-semibold">Brands</li>
                  <li>H&M</li>
                  <li>Max Kids</li>
                  <li>Pantaloons</li>
                  <li>United Colors Of Benetton Kids</li>
                  <li>YK</li>
                  <li>U.S. Polo Assn. Kids</li>
                  <li>Mothercare</li>
                  <li>HRX</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default KidsSubMenu;
