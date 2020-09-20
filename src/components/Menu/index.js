import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu(){
    return (
        <nav className="Menu">
            <img className="Logo" src={logo} alt="organobra Logo" />
        </nav>
    );
}

export  default Menu;