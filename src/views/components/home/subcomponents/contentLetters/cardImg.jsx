import React from "react";
import LazyLoad from "react-lazy-load";

const Card = ({id , setAllObject , img , setStateCards , idDefault, imgActive}) => {

    /* Cargar la imagen segun el estado  */
    const urlImage = require(`../../../../img/home/Cards/${idDefault !== null ? `active-card/${imgActive}` : img}.jpg`),

    /* Cargar la imagen con un Background */
    Funds = {
        backgroundImage: `url(${urlImage})`
    },

    /* Resetear al estado base */
    StateBase = () =>{
        setAllObject(prevState=>({
            ...prevState, 
            idCard : id
        })); 
        setStateCards(prevState => ({
            ...prevState, 
            stateCard : id
        }));
    }

    /* Retorno de la estructura */
    return(
        <div className={`cards ${idDefault === id ? "active-card" : ""}`}>
            <LazyLoad className="container-img">
                <div
                    className="img" 
                    onClick={() => StateBase()} 
                    style={Funds}
                />
            </LazyLoad>
        </div>
    );
}

export default Card;