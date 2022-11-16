import React from 'react';
import Logo from '../logo.svg';
import { NavLink } from 'react-router-dom';


export default function Header() {

    // state

    // comportements

    // render

    return (
        <header className="header">
            <NavLink to="/home">
                <img id="Logo" src={Logo}  alt='logo' />
            </NavLink>
            
        </header>
    )

}