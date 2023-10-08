import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image4 from '../Assets/image4.webp';
import image5 from '../Assets/image5.webp';
import image6 from '../Assets/image6.webp';
import image7 from '../Assets/image7.webp';

function NowOrNever() {
  const [isMobileView, setIsMobileView] = useState(false);

  
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 767); 
    }
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define carousel items for mobile and desktop views
  const mobileCarouselItems = (
    <Carousel showThumbs={false}>
      <div className='flex'>
        <div className='flex'>
        <img src={image4} alt="" />
      </div>
      <div className='flex'>
        <img src={image5} alt="" />
      </div>
      <div className='flex'>
        <img src={image6} alt="" />
      </div>
      </div>
      <div className='flex'>
      <div className='flex'>
        <img src={image7} alt="" />
      </div>
      <div className='flex'>
        <img src={image5} alt="" />
      </div>
      <div className='flex'>
        <img src={image4} alt="" />
      </div>
      </div>
      <div className='flex'>
      <div className='flex'>
        <img src={image6} alt="" />
      </div>
      <div className='flex'>
        <img src={image4} alt="" />
      </div>
      <div className='flex'>
        <img src={image7} alt="" />
      </div>
      </div>
    </Carousel>
  );

  const desktopCarouselItems = (
    <Carousel showThumbs={false}>
      <div className="flex mt-16 mb-10 h-96">
        <div className="flex">
          <img src={image4} alt="" />
        </div>
        <div className="flex">
          <img src={image5} alt="" />
        </div>
        <div className="flex">
          <img src={image6} alt="" />
        </div>
        <div className="flex">
          <img src={image7} alt="" />
        </div>
        <div className="flex">
          <img src={image5} alt="" />
        </div>
        <div className="flex">
          <img src={image4} alt="" />
        </div>
        <div className="flex">
          <img src={image6} alt="" />
        </div>
      </div>
      <div className="flex sm:mt-16 sm:h-96">
        <div className="flex">
          <img src={image6} alt="" />
        </div>
        <div className="flex">
          <img src={image7} alt="" />
        </div>
        <div className="flex">
          <img src={image4} alt="" />
        </div>
        <div className="flex">
          <img src={image6} alt="" />
        </div>
        <div className="flex">
          <img src={image5} alt="" />
        </div>
        <div className="flex">
          <img src={image4} alt="" />
        </div>
        <div className="flex">
          <img src={image7} alt="" />
        </div>
      </div>
    </Carousel>
  );

  return (
    <div>
      <h4 className={`uppercase text-gray-700 tracking-wider text-3xl font-semibold mt-10 ml-6 mb-2 ${isMobileView ? 'text-xl sm:ml-8' : ''}`}>
        NOW OR NEVER DEALS
      </h4>

      {isMobileView ? mobileCarouselItems : desktopCarouselItems}
    </div>
  );
}

export default NowOrNever;
