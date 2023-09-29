import React from "react";
import { IconName } from "react-icons/bs";

const Options = ({ identifier , idPortada , activeAnimation , idDefaul , setActiveState}) => {

    return (
        <div className={`item ${ idPortada === idDefaul ? "active-item-portada" : ""}`} onClick={() => { identifier(idPortada); activeAnimation(); setActiveState(prevState => ({...prevState, activeDefault : idPortada}))}}>
            <i className="fa-solid fa-diamond"></i>
        </div>
    );
}
export default Options;