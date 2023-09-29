import React, { useEffect, useState } from "react";
import { Carouselnformation } from "../vault";
import EstructureCarousel from "./estructureCarousel";
import { styleCarousel } from "./styeAnimation/animationCarousel";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation, Pagination, EffectCube } from 'swiper/modules'; // Import necessary Swiper modules
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Swiper styles navigation
import 'swiper/css/autoplay'; // Import Swiper styles autoplay
import 'swiper/css/effect-cube'; // Import Swiper styles effect-cube
import { EventCarousel } from "./styeAnimation/eventCarousel";
const CarouselAnimation = () => {

  // Manejar estados del carousel 
  const [stateCarousel, setStateCarousel] = useState({
    stateAnimationCarousel: true,
    stateEndAnimationLetter: false,
    stateDelayInformation: false
  }),

  // Traer el numero dipositvas del carousel
  keyCarousel = Object.keys(Carouselnformation);

  // Manejar animacion del carousel
  EventCarousel(setStateCarousel);

  return (
    <section className="container-carousel">
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="h-100"
        effect="Cube"
        speed={0}
      >
        {keyCarousel.map(key => (
          <SwiperSlide
            key={key}
            className="h-100 overflow-hidden"
            // style={{ background: `linear-gradient(to bottom left, #7d645126 10%, #7d645171 50%, ${Carouselnformation[key].colors}  40%)` }}
          >
           <EstructureCarousel
              {...Carouselnformation[key]}
              stateAnimation={stateCarousel}
              animation={styleCarousel}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CarouselAnimation;
