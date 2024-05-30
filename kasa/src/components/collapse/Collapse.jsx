// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./collapse.scss";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Collapse">
            <div className="Collapse__header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span className="arrow">
                    {/*  {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} */}
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />    
                </span>    
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