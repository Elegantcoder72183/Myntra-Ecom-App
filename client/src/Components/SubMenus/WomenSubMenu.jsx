import React, { useState, useEffect } from "react";


function WomenSubMenu() {
  const [isDesktopView , setIsDesktopView] = useState(true)
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
    if (isDesktopView) 
   { setSubMenuVisible(!isSubMenuVisible);}
  };

  return (
    <>
      <div
        className={`relative group ml-2 mt-5 ${isDesktopView ? '' : 'pointer-events-none'}`}
        onMouseEnter={isDesktopView ? toggleSubMenu : undefined}
        onMouseLeave={isDesktopView ? toggleSubMenu : undefined}
      >
        <p className="font-semibold text-sm no-underline text-gray-800 ml-5">
          WOMEN
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-0 mt-2 w-[1200px] p-4 bg-white border justify-center border-gray-300 shadow-lg">
            <div className="flex ">
              <div className="w-1/5">
                <ul>
                  <li className="text-purple-500 font-semibold">
                    Indian & Fusion Wear
                  </li>
                  <li>Kurtas & Suits</li>
                  <li>Kurtis, Tunics & Tops</li>
                  <li>Ethnic Wear</li>
                  <li>Leggings, Salwars & Churidars</li>
                  <li>Skirts & Palazzos</li>
                  <li>Sarees</li>
                  <li>Dress Materials</li>
                  <li>Lehenga Cholis</li>
                  <li>Dupattas & Shawls</li>
                  <li>Jackets</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Belts, Scarves & More
                  </li>
                </ul>
                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Watches & Wearables
                  </li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-purple-500 font-semibold">
                    Western Wear
                  </li>
                  <li>Dresses</li>
                  <li>Jumpsuits</li>
                  <li>Tops</li>
                  <li>Jeans</li>
                  <li>Trousers & Capris</li>
                  <li>Shorts & Skirts</li>
                  <li>Shrugs</li>
                  <li>Sweaters & Sweatshirts</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">Plus Size</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Sunglasses & Frames
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-purple-500 font-semibold">Footwear</li>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Heels</li>
                  <li>Boots</li>
                  <li>Sports Shoes & Floaters</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Sports & Active Wear
                  </li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="text-purple-500 font-semibold">
                    Lingerie & Sleepwear
                  </li>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Shapewear</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Swimwear</li>
                  <li>Camisoles & Thermals</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Beauty & Personal Care
                  </li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Premium Beauty</li>
                  <li>Lipsticks</li>
                  <li>Fragrances</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="text-purple-500 font-semibold">Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>

                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">Jewellery</li>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">Backpacks</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Handbags, Bags & Wallets
                  </li>
                </ul>
                <ul className="mt-2">
                  <li className="text-purple-500 font-semibold">
                    Luggages & Trolleys
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WomenSubMenu;
