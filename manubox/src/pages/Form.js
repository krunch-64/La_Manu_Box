import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Autosuggest from '../components/Autosuggest';


const Form = () => {
   
    return (
        <React.Fragment>
            <Header />
            <Autosuggest />
        </React.Fragment>      
    );
};

export default Form;