import React from "react";

const InformationCounter = ({ number, subtittle, paragraph }) =>{
    return(
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
            <span>{number}</span>
            <h3>{subtittle}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default InformationCounter;