import React, { useState, useEffect } from "react";
import img2 from '../assets/logo_itb.png';
import img1 from '../assets/logo_pptik.jpg';
import img3 from '../assets/logo_lskk.png';
import img4 from '../assets/logo_smk2.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[300px] h-[300px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className={`absolute w-[300px] h-[300px] rounded-full opacity-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;