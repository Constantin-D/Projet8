import logoKasa from "../../assets/images/logoKasa.png";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logoKasa} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "underline" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "underline" : "")}>
                        <li>À Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header;