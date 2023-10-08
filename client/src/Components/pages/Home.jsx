import "react-responsive-carousel/lib/styles/carousel.min.css";
import NowOrNever from "../../Atoms/NowOrNever";
import FestiveOffer from "../../Atoms/FestiveOffer";
import ShopByCategory from "../../Atoms/ShopByCategory";
import { Link } from "react-router-dom";


export const Home = () => {
  
  return (
<div className="mt-28 sm:mt-28 relative"> {/* Adjust margin for mobile view */}
  <a href="https://apps.apple.com/IN/app/id907394059?mt=8">
    <img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/9/29/bae5bcdb-ee97-4202-bcab-593276a031d41695997491098-1920250.jpg"
      alt=""
      className="mb-2 sm:mb-7 abolute right-10 w-full h-32 sm:h-auto object-cover" 
    />
  </a>
  <Link to="/products">
    <img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/2/d1e83679-15b9-4768-89e0-d185b0bec4f31696230596661-Date-reveal.jpg"
      alt=""
      className="w-full h-48 sm:w-980 sm:h-auto object-cover"
    />
  </Link>

  <NowOrNever />
  <FestiveOffer />
  <ShopByCategory />
</div>

  );
};
