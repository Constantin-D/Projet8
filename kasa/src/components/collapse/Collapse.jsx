// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowUp from "../../assets/images/arrow-up.png"; 
import arrowDown from "../../assets/images/arrow-down.png";
import "./collapse.scss";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };    

    return (
        <div className="Collapse">
            <div className="Collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
                    className="collapse__icon"
                />   
            </div>
            {isOpen && <div className="Collapse__content">{content}</div>}
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
};

export default Collapse;