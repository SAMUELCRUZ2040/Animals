import React, { useState } from "react";
import Card from "./cardImg";
import { DateCards } from "../vault";
import Container from "../../../layouts/sections/section";
 
const ContentLetters = ({ idPortada, setAllObject, tittleOne, tittleTwo,  dateOne, dateTwo, numberOne })=> {

    /* Manejo de estados  */
    const [stateCards, setStateCards] = useState({
        stateCard : null
    }),

    /* Obtener las keys de cada imagen para poder cargar el numero de cards  */
    numberCards = Object.keys(DateCards[idPortada]).filter(key => key !== "base"),

    /* Cargar el numero de cards */
    loadLetter = () =>{
        return numberCards.map(key =>(
            <Card 
                {...DateCards[idPortada][key]}
                key = {key}
                idDefault = {stateCards.stateCard}
                setAllObject = {setAllObject}
                setStateCards = {setStateCards}
            />
        ));
    },
    
    /* Retornar la animacion al estado base */
    resetAnimation = () =>{
        setAllObject(prevState=>({
            ...prevState, 
            idCard : "base"
        })); 
        setStateCards(prevState => ({
            ...prevState, 
            stateCard : null
        }));
    };

    /* Retorno de la estructura principal  */
    return(
        <Container className={`container-letters ${stateCards.stateCard !== null ? "active-animation" : ""}`}>
            <div className="row w-100">
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="container-cards">{loadLetter()}</div>
                </div>
                <div className="col-lg-6  d-flex justify-content-center align-items-center">
                    <div className="container-description text-white">
                        <div className="description">
                            <div className="tittle">
                                <h2>{tittleOne}</h2>
                                <h2>{tittleTwo}</h2>
                            </div>
                            <div className="drawings">
                                +{numberOne} <p className="text ms-3">Years</p>
                            </div>
                            <div className="container-dates d-flex flex-column">
                                <span className="date">
                                    {dateOne}
                                </span>
                                <span className="date mt-4">
                                    {dateTwo}
                                </span>
                            </div>
                        </div>       
                        <span className="exit" onClick={ () =>  resetAnimation()}>
                            <i className="fa-solid fa-right-from-bracket"></i> EXIT
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default ContentLetters;