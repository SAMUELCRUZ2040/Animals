import React from "react";

// Ilustracion que se muestra en el carousel
export const Illustration = ({ animationLetter, name , urlImage , animationImage }) =>{
    return(
        <div className="illustration ">
            <span className="tittle-ilustration" style={animationLetter}>
                {name}
            </span>
            <div className="img" style={animationImage}>
                <img src={urlImage} alt="#" className="img-fluid" />
            </div>
        </div>
    );
}

// informacion que se muestra en el carousel
export const Description = ({ numberSpecies, description, animationDescription }) =>{
    return(
    <div className="description" style={animationDescription}>
        <div className="row h-100">
            <div className="col-lg-8 d-flex flex-column justify-content-start align-items-start" style={{gap: "20px"}}>
                <span>{numberSpecies} Species</span>
                <span>{description}</span>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <h2 className="Danger">
                    <i className="fa-solid fa-triangle-exclamation"></i> Danger
                </h2>
            </div>
        </div>
    </div>
    );
}