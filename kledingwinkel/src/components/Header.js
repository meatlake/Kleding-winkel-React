import React from "react";
import logo from "/Users/julianvleesenbeek/Desktop/React practices/Kleding winkel React/kledingwinkel/src/images/logo.png";

export default function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="header--img" />
            <h1>Kleding Winkel</h1>
            <ul>
                <li><a href="#" className="header--link border-radius">About</a></li>
                <li><a href="#" className="header--link border-radius">Contact</a></li>
            </ul>
        </nav>
    )
}