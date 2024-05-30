import React from "react";
import blackLogo from "../../assets/images/blackLogo.png";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={blackLogo} alt="Logo de Kasa" />
            </div>
            <div>
                {/* <a href="/">Accueil</a> */}
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
