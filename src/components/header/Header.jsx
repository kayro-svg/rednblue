import React, { useState } from "react";
import "./header.css";

const Header = () => {
    /* Change background Header*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // When the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    /* Toggle Menu */
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav_logo">RednBlue</a>

 
                <div className="menu-items">
                    <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                        <ul className="nav_list grid">

                            <li className="nav_item">
                                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-estate nav_icon"></i> Nosotros
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-user nav_icon"></i> Servicios
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-file-alt nav_icon"></i> Contáctanos
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-briefcase-alt nav_icon"></i> Regístrate
                                </a>
                            </li>

                            <li className="nav_item">
                                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-scenery nav_icon"></i> Prácticas RNB
                                </a>
                            </li>
                        </ul>

                        <div className="portal-button">
                            <a href="https://portal.rednbluepty.com/" className="button button--flex" target="_blank">
                                Portal
                            </a>
                        </div>
                    </div>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
