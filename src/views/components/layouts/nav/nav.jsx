import { Route, Routes } from 'react-router-dom';
import LinksNav from './nav_link/linksNav';
import React from "react";
import About from '../../about/about';
import Home from '../../home/home';

const Nav = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element={<LinksNav />}>
                <Route path='/About' element={<About />}/>
                <Route path='/' element={<Home />}/>
                <Route path='#'/>
                <Route path='#'/>
                </Route>
            </Routes>
      </>
    );
}
export default Nav;