import { useState, useEffect } from "react";
import g1 from "../Assets/googleplay.png";
import g2 from "../Assets/appleplay.png";
import g3 from "../Assets/original.png";
import g4 from "../Assets/return.png";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
  const [isMObileView, setIsMobileView] = useState(false);

  useEffect (() => {
    const checkMobileView = () => {
      const screenWidth = window.innerWidth;
      setIsMobileView(screenWidth <= 768);
    }
      window.addEventListener("resize", checkMobileView);
      checkMobileView();

      return () => {
        window.removeEventListener('resize',checkMobileView)
      
        
    }
  }, [] )

  return (
    <div>
      {!isMObileView &&(
       
        <div>
          <div className="w-10/12 mx-auto grid grid-cols-12 mt-12 font1">
            <div className="col-span-2 ">
              <h1 className="text-sm font-semibold ">ONLINE SHOPPING</h1>
              <ul className=" text-sm text-slate-500 pt-6">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
              </ul>
            </div>

            <div className="col-span-2">
              <h1 className="text-sm font-semibold col-span-2">USEFUL LINKS</h1>
              <ul className="text-sm text-slate-500 pt-6">
                <li className="">Contact Us</li>
                <li className="">FAQ</li>
                <li className="">T&C</li>
                <li className="">Terms Of Use</li>
                <li className="">Track Orders</li>
                <li className="">Shipping</li>
                <li className="">Cancellation</li>
                <li className="">Returns</li>
                <li className="">Whitehat</li>
                <li className="">Blog</li>
                <li className="">Careers</li>
                <li className="">Privacy Policy</li>
                <li className="">Site Map</li>
                <li className="">Corporate Information</li>
              </ul>
            </div>

            <div className="col-span-4">
              <h1 className="text-sm font-semibold col-span-2">
                EXPERIENCE MYNTRA APP ON MOBILE
              </h1>
              <div className="grid grid-cols-2 gap-4 pt-6 w-[70%]">
                <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                <img src={g1} alt="" /></a>
                <a href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059">
                <img src={g2} alt="" /></a>
              </div>
              <h1 className="text-sm font-semibold col-span-2 mt-6">
                KEEP IN TOUCH
              </h1>
              <br />
              <div className="flex">
                <a
                  href="https://www.facebook.com/myntra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[grey] mr-4"
                >
                  <AiFillFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[grey] mr-4"
                >
                  <ImTwitter />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[grey] mr-4"
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[grey] mr-4"
                >
                  <ImInstagram />
                </a>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-6 ">
                <div className="col-span-1">
                  <img src={g3} alt="" className="w-14" />
                </div>
                <div className="col-span-5">
                  <span className="font-semibold">100% ORIGINAL</span> guarantee{" "}
                  <br />
                  for all products at myntra.com
                </div>
              </div>
              <br />
              <div className="grid grid-cols-6 ">
                <div className="col-span-1">
                  <img src={g4} alt="" className="w-12" />
                </div>
                <div className="col-span-5">
                  <span className="font-semibold">Return within 30days</span> of
                  <br />
                  receiving your order
                </div>
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto font1 text-base text-slate-600">
            <h3 className="font-semibold text-black mb-4 mt-4 text-sm">
              POPULAR SEARCHES
            </h3>
            <h5>
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
              Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
              Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops
              | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches |
              Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes |
              Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini |
              Myntra Fashion Show | Lipstick | Saree | Watches | Dresses |
              Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
            </h5>
          </div>
          <div className="relative w-10/12 mx-auto text-slate-600">
            <span className="absolute right-0">
              {" "}
              © 2022 www.myntra.com. All rights reserved.
            </span>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Footer;