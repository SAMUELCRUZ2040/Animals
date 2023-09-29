import React from "react";
import { Description, Illustration } from "./miniStructure/miniStructureCarousel";

const EstructureCarousel = ({ animation, stateAnimation, name, numberSpecies, description, img }) => {
  
    // Alicar las clases segun los estados
   const style = {
        animationLetter: {
            ...(stateAnimation.stateAnimationCarousel ? {} : animation.styleStartAnimationLetter),
            ...(stateAnimation.stateEndAnimationLetter ? animation.styleEndAnimationLetter : {})
        },
        animationImage : {
            ...(stateAnimation.stateAnimationCarousel ? {} : animation.styleStartAnimationImage),
            ...(stateAnimation.stateEndAnimationLetter ? animation.styleEndAnimationImage : {})
        },
        animationDescription : {
            ...(stateAnimation.stateAnimationCarousel ? {} : animation.StyleStartDescription),
            ...(stateAnimation.stateEndAnimationLetter ? animation.StyleEndDescription : {})
        }
   },

   /* Obtener la url de la imagen */
   urlImage = require(`../../../../img/home/Carousel/${img}.png`);

   /* Retorno de la estructura */
    return (
        <div className="container h-100  d-flex flex-column justify-content-center align-items-center">
            <Illustration
                animationLetter = {style.animationLetter}
                animationImage = {style.animationImage}
                name = {name}
                urlImage = {urlImage}
            />
            <Description
                numberSpecies = {numberSpecies}
                description = {description}
                animationDescription = {style.animationDescription}
            />
        </div>
    );
};

export default EstructureCarousel;
