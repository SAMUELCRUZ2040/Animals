import React, { useEffect } from 'react';

export const EventCarousel = (setStateCarousel) => {
  useEffect(() => {
    const swiperButtonPrev = document.querySelector(".swiper-button-prev");
    const swiperButtonNext = document.querySelector(".swiper-button-next");

    const handleButtonClick = (swiperButton) => {
      swiperButton.classList.add("active-animation-button");
      setTimeout(() => {
        swiperButton.classList.remove("active-animation-button");
      }, 5000);

      // ANIMATION CAROUSEL
      setStateCarousel((prevState) => ({
        ...prevState,
        stateAnimationCarousel: false,
      }));
      setTimeout(() => {
        setStateCarousel((prevState) => ({
          ...prevState,
          stateAnimationCarousel: true,
          stateEndAnimationLetter: true,
        }));
        stopAnimation();
      }, 500);

      const stopAnimation = () => {
        setTimeout(() => {
          setStateCarousel((prevState) => ({
            ...prevState,
            stateEndAnimationLetter: false,
            stateDelayInformation: true,
          }));
        }, 100);
      };
    };

    const prevButtonHandler = () => handleButtonClick(swiperButtonPrev);
    const nextButtonHandler = () => handleButtonClick(swiperButtonNext);

    swiperButtonPrev.addEventListener("click", prevButtonHandler);
    swiperButtonNext.addEventListener("click", nextButtonHandler);

    return () => {
      swiperButtonPrev.removeEventListener("click", prevButtonHandler);
      swiperButtonNext.removeEventListener("click", nextButtonHandler);
    };
  }, []);
};

