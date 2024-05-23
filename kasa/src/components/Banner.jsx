import React from 'react';

const Banner = ({image, title}) => {
    return (
        <div className="banner">
            <img src={image} alt="Image de la bannière" />
            {!title ? "" : <h1>{title}</h1>}
        </div>
    );
};

export default Banner;