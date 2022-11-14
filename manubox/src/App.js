import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Header from "./components/Header";
import './Reset.css';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        {/* path="*" fonction si jamais l'url ne correspond à rien de céclaré au dessus  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;