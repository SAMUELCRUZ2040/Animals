import React, { useState , useEffect , useRef } from "react";
import Options from "./options";
import { optionsPortada } from "../../subcomponents/vault";
import { AnimationPortada , AnimationPortadaEnd} from "./styleAnimation/Animation";

const Portada = ({identifier,  tittleOne, tittleTwo, subtittle , image}) =>{
    const keysPortada = Object.keys(optionsPortada);
    const [stateAnimation, setActiveState] = useState({
        statePortada : false,
        activeDefault: Object.keys(optionsPortada)[0],
        stateWindow : {
            width : window.innerWidth
        }
    });
   
    const   linkImg = require(`../../../../img/home/${image}.jpg`),
            backgroundCard = {
            backgroundImage: `url(${linkImg})`
    };

   const activeAnimation = () => {
        setActiveState(prevState => ({
            ...prevState,
            statePortada : true
        }));
        setTimeout(()=>{
            setActiveState(prevState => ({
                ...prevState,
                statePortada : false
            }));
        }, 500)
   };
    return (
        <section  className="container-portada" style={{...(backgroundCard), ...(stateAnimation.statePortada ? AnimationPortada : AnimationPortadaEnd)}}>
            <div className="row  h-100">
                <div className="col-lg-11 d-flex justify-content-start align-items-center ps-5">
                    <div className="titlle ps-5">
                        <div className="subtittle mb-5"> <span>Animals<strong className="ms-2">Favorite</strong></span></div>
                        <div className="tittle-printipal">
                            <h1 className="tittleOne">{tittleOne}</h1>
                            <h1 className="tittleTwo">{tittleTwo}</h1>
                        </div>
                        <div className="mini-description-tittle">
                            <div className="subtittleDescription"><span>Animals</span></div>
                            <h2>{subtittle}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 d-flex justify-content-center align-items-center">
                    <div className="container-transition">
                        {
                            keysPortada.map(key =>(
                                <Options 
                                    key={key}
                                    identifier = {identifier}
                                    activeAnimation = {activeAnimation}
                                    idPortada = {optionsPortada[key].id}
                                    idDefaul = {stateAnimation.activeDefault}
                                    setActiveState = {setActiveState}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`inner-div ${stateAnimation.statePortada ? "active-inner-div" : ""}`}></div>
        </section>
    );
}
export default Portada;