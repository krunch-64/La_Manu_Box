import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <React.Fragment>
            <Header /> 
            <div className="homepage_content">
                <div id="choose" NavLink to="/Form">
                    <NavLink to="/form">
                        <p>Louer un Box</p>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;