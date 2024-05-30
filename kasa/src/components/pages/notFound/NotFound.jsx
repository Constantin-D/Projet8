import React from "react";
import { Link } from 'react-router-dom';
import "./not-found.scss";



const NotFound = () => {
    return (
        <div className="not-found">
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFound;