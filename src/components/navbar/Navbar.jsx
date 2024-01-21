import React, { useState } from "react";
import "./navbar.css";

// Componente funcional Navbar
function Navbar() {
    // Estados para gestionar la clase CSS activa del menú y el icono de la barra de navegación
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    // Función para alternar entre las clases del menú y el icono al hacer clic en la barra de navegación
    const navToggle = () => {
        // Alternar la clase del menú
        if (active === "nav__menu") {  //verifica si la clase actual del menú es "nav__menu"
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Alternar la clase del icono
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (
        <header className="nav">
            
            <a href="index.html" className="nav_logo">RednBlue</a>
            
            <ul className={active}>
                <li className="nav__item">
                    <a href="https://rednbluepty.com/#:~:text=Portal-,Intro,-Como%20crear%20cuenta" className="nav__link" target="_blank"> 
                        Nosotros
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://rednbluepty.com/#:~:text=Conocer%20m%C3%A1s-,NUESTROS%20SERVICIOS,-Compras%20por%20internet" className="nav__link" target="_blank">
                        Servicios
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://rednbluepty.com/#:~:text=No%20dudes%20en%20escribirnos" className="nav__link" target="_blank">
                        Contáctanos
                    </a>
                </li>
                <li className="nav__item">
                    <a href="https://portal.rednbluepty.com/registrate" className="nav__link" target="_blank">
                        Regístrate
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link" target="_blank">
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
                
                {/* Icono de la barra de navegación */}
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </header>
    );
}

// Exportar el componente Navbar
export default Navbar;
