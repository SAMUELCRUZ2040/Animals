import React, { useState , useEffect } from "react";
import '../../stylesheets/home.css';
import Portada from "./subcomponents/portada/portada";
import ContentLetters from "./subcomponents/contentLetters/contentLetters";
import CarouselAnimation from "./subcomponents/carousel/carousel";
import Counter from "./subcomponents/counters/counter";
import { DateCards  , optionsPortada } from "./subcomponents/vault"; 

const Home = () => {
    const   [allObject, setAllObject] = useState({
                idCard : "base",
                idPortada : "option1",
                idCarousel : "option1"
            }),
            [state, setState] = useState({
                statePortada : false , 
                stateCard : false
            });
         
    const identifier = (idPortada) =>{
        if(state.statePortada === false){
            setState(prevState => ({
                ...prevState, 
                statePortada: true,
                stateCard: true
            }));
        }
        setAllObject(prevState=> ({
            ...prevState,
            idPortada : idPortada,
            objectCard :  DateCards[idPortada].base
        }));
    };

     return(
        <div className="container-home">
            <Portada 
                identifier={identifier}
                {...optionsPortada[allObject.idPortada]}
            />

            <ContentLetters 
                {...DateCards[allObject.idPortada][allObject.idCard]}
                setAllObject = {setAllObject}
                idPortada={allObject.idPortada}
            />
            <CarouselAnimation 
                idPortada = {allObject.idPortada}
            />
            <Counter 
                idPortada = {allObject.idPortada}
            />
        </div>
    );
}
export default Home;