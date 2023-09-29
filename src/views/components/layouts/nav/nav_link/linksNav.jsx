import { Link, Outlet } from 'react-router-dom';
import React from "react";
import  '../../../../stylesheets/layouts.css';
const LinksNav = () =>{
    return(
        <>
            <div className="container-nav">
                <div className="row">
                    <div className="col-lg-7 p-0">
                        <ul className="list-nav  m-0 d-flex justify-content-center align-items-center">
                            <li className="item">
                                <Link to="/"> Home </Link>
                            </li>
                            <li className="item">
                                <Link to="/About"> About </Link>
                            </li>
                            <li className="item">
                                <Link to="#"> Services </Link>
                            </li>
                            <li className="item">
                                <Link to="#"> Contactanos </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <span className='subtittle'>Animals</span>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}
export default LinksNav;