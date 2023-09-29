import React from "react";

export const styleCarousel = {
    styleStartAnimationLetter: {
      transform: 'translateX(-300%)',
      transition: "500ms ease-in-out all",
    },
    styleEndAnimationLetter: {
      transform: 'translateX(300%)',
      visibility: "hidden",
      transition: "0ms ease-in-out all",
    },
    styleStartAnimationImage: {
      transform: 'translateX(300%)',
      visibility: "hidden",
      transition: "500ms ease-in-out all",
    },
    styleEndAnimationImage: {
      transform: 'translateX(-300%)',
      visibility: "hidden",
      transition: "0ms ease-in-out all",
    },
    StyleStartDescription: {
      opacity: "0",
      transform: 'translateY(-50%)',
      transition: "0 ease-in-out all",
    },
    StyleEndDescription: {
      opacity: "0",
      transform: 'translateY(50%)',
      transition: "0ms ease-in-out all",
    }
};