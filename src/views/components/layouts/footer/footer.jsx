import React from "react";

export const Footer = ()=>{
    return(
        <section className="footer">
            <div className="container h-100 bg-success d-flex justify-content-around align-items-center flex-row">
                <span className="tittle">
                    <h2>Animals</h2>
                </span>
                <span className="contactanos">
                    <p>Contactanos</p>
                    <ul>
                        <li>+57 654654654</li>
                        <li>+57 654654654</li>
                    </ul>
                </span>
                <span className="description">
                    Cuida de la naturaleza
                </span>
            </div>
        </section>
    )
}