import React, { useState, useEffect } from "react";


function MenSubMenu() {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktopView(window.innerWidth >= 768);
    }
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubMenu = () => {
    if (isDesktopView)
    {setSubMenuVisible(!isSubMenuVisible);}
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
        <p className="font-semibold text-sm no-underline text-gray-800 ml-3">
          MEN
        </p>
        {isSubMenuVisible && (
          <div className="absolute left-0 mt-2 w-[1200px] p-4 bg-white border border-gray-300 shadow-lg">
            <div className="flex">
              <div className="w-1/5">
                <ul>
                  <li className="font-semibold text-pink-700">Topwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                </ul>
                <ul className="mt-2">
                  <li className="text-pink-700 font-semibold">
                    Indian & Festive Wear
                  </li>
                  <li>Kurtas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="font-semibold text-pink-700">Bottom Wear</li>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                </ul>

                <ul className="mt-2">
                  <li className="font-semibold text-pink-700">
                    Innerwear & Sleepwear
                  </li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermals</li>
                </ul>
                <ul className="mt-2">
                  <li className="font-semibold text-pink-700">Plus Size</li>
                  <li>S, M, L, XL, XXL, XXXL</li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li className="font-semibold text-pink-700">Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Sports Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>
                </ul>
                <ul className="mt-2">
                  <li className="font-semibold text-pink-700">
                    Personal Care & Grooming
                  </li>
                  <li>Lotions</li>
                  <li>Shaving kit</li>
                </ul>
                <ul className="mt-2">
                  <li className="font-semibold text-pink-700">
                    Sunglasses & Frames
                  </li>
                  <li className="font-semibold text-pink-700">Watches</li>
                  <li>Fastrack</li>
                  <li>Puma</li>
                  <li>Rado</li>
                </ul>
              </div>
              <div className="w-1/5 bg-gray-100">
                <ul>
                  <li className="font-semibold text-pink-700">
                    Sports & Active Wear
                  </li>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                </ul>
                <ul className="mt-2">
                  <li className="font-semibold text-pink-700">Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div className="w-1/5 ">
                <ul>
                  <li className="font-semibold text-pink-700">
                    Fashion Accessories
                  </li>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                </ul>
                <ul className="nextul">
                  <li className="font-semibold text-pink-700">
                    Bags & Backpacks
                  </li>
                  <li className="font-semibold text-pink-700">
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

export default MenSubMenu;
