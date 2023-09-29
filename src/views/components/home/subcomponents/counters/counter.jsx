import React from "react";
import { counterInformation } from "../vault"; 
import  InformationCounter  from "./informationCounter"

const Counter = ({idPortada}) =>{

    const keyInformation = Object.keys(counterInformation[idPortada])
    return(
        <section className="container-counter">
            <div className="container h-100 d-flex  flex-column justify-content-center align-items-center" style={{gap: "100px"}}>
                <div className="tittle text-center">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deleniti.</span>
                </div>
                <div className="counters row d-flex justify-content-center align-items-center">
                    {
                        keyInformation.map(key => (
                            <InformationCounter 
                                key = {key}
                                {...counterInformation[idPortada][key]}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Counter;