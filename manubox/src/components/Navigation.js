import React from 'react';
import NavLink from "react-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/form">
                    <li>Louer un Box</li>
                </NavLink>
                <NavLink to="/home">
                    <li>La Manu Box</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;

