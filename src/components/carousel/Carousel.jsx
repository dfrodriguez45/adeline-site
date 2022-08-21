import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { images } from "../../js/imagesCarousel.js";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

const Carousel = () => {
  return (
    <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="relative w-full h-[30rem]"
      effect="fade"
    >
      {images.map((image, i) =>
      <SwiperSlide key={i} className="relative">
          <img src={image.src} alt={image.src}
            className="carousel-img" />
        </SwiperSlide>)}
    </Swiper>
  );
};

export default Carousel;