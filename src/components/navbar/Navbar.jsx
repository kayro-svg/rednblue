import React, { useState } from "react";
import "./navbar.css";

function Navbar() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <header className="nav">
            
            <a href="index.html" className="nav_logo">RednBlue</a>
            
                <ul className={active}>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Nosotros
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Servicios
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Conáctanos
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Regístrate
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Prácticas RNB
                        </a>
                    </li>
                </ul>

                <div className="menu-items">

                <div className="portal-button">
                    <a href="https://portal.rednbluepty.com/" className="button button--flex" target="_blank">
                        Portal
                    </a>
                </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            </div>
        </header>
    );
}

export default Navbar;