import React from 'react';


const Banner = ({image, title, className}) => {
    return (
        <div className={`banner ${className}`}>
            <img src={image} alt="Image de la bannière" />
            {!title ? "" : <h1>{title}</h1>}
        </div>
        
    );
};

export default Banner;