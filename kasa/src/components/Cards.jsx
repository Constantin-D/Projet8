//import React, { useEffect, useState } from "react";
//import axios from "axios";
import Props from "prop-types";
import {Link} from "react-router-dom";

const Cards = ({ image, name }) => {
    return (
        <div className="Cards">
            <img src={image} alt="Image de la location" />
            <div className="card-info">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

// Cards.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
// };

export default Cards;
