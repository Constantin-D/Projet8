//import React, { useEffect, useState } from "react";
//import axios from "axios";
import Props from "prop-types";

const Thumbs = ({image, name}) => {
    

    return (
        <div className="thumbs">
            <img src={image} alt="Image de la location" />
            <div className="thumb-info">
                <h2>{name}</h2>
                <p>Nombre de chambre(s)</p>
                <p>Nombre de salle(s) de bain</p>
                <p>Nombre de lit(s)</p>
                <p>Nombre de personne(s)</p>
            </div>
        </div>
    );
    
        
};

export default Thumbs;
