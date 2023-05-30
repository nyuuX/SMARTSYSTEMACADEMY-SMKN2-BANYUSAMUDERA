import React, { useState, useEffect } from "react";
import img2 from '../assets/logo_itb.png';
import img1 from '../assets/logo_pptik.jpg';
import img3 from '../assets/logo_lskk.png';
import img4 from '../assets/logo_smk2.png';
import img5 from '../assets/UBL-removebg-preview.png';
import img6 from '../assets/SMKS_Wikrama_Bogor-removebg-preview.png';
import img7 from '../assets/SMKS_Telematika_Indramayu-removebg-preview.png';
import img8 from '../assets/SMKS Cendikia Wanasari.png';
import img9 from '../assets/SMKN_14_JAKARTA-removebg-preview.png';
import img10 from '../assets/SMKN_13_Bandung-removebg-preview.png';
import img11 from '../assets/SMKN_4_Padalarang-removebg-preview.png';
import img12 from '../assets/SMKN_4_Bojonegoro-removebg-preview.png';
import img13 from '../assets/SMKN_3_Pariaman-removebg-preview.png';
import img14 from '../assets/SMKN_3_JAKARTA-removebg-preview.png';
import img15 from '../assets/SMKN_1_Plered-removebg-preview.png';
import img16 from '../assets/SMKN_1_Pandeglang-removebg-preview.png';
import img17 from '../assets/SMKN_1_Garut-removebg-preview.png';
import img18 from '../assets/SMKN_1_Cisarua-removebg-preview.png';
import img19 from '../assets/SMKN_1_Cimahi-removebg-preview.png';
import img20 from '../assets/SMKN_1_Cileungsi-removebg-preview.png';
import img21 from '../assets/SMKN_1_Cianjur-removebg-preview.png';
import img22 from '../assets/SMKN_1_Campaka_Cianjur-removebg-preview.png';
import img23 from '../assets/SMK_Pasundan_3_Bandung-removebg-preview.png';
import img24 from '../assets/SMK_IT_Ihsanul_Fikri-removebg-preview.png';
import img25 from '../assets/SMK_Daarut_Tauhid-removebg-preview.png';
import img26 from '../assets/SMK_Bina_Mandiri_Multimedia-removebg-preview.png';
import img27 from '../assets/SMK_As-Su_udiyyah-removebg-preview.png';
import img28 from '../assets/SMK_Ar_Rahmah-removebg-preview.png';
import img29 from '../assets/Akademi_Sekretari_Manajemen_Taruna_Bakti_Bandung-removebg-preview.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24, img25, img26,img27, img28, img29];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className={`absolute sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full opacity-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;