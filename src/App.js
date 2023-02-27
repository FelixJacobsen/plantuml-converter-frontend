import React, { useState, useRef } from "react";
import Header from "./components/Header";
import './App.css';
import SaveButton from "./components/SaveButton";
import FormButtons from "./components/FormButtons";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YamlComponent from "./components/YamlComponent";


function App() {
  



  return (
    <div className='container'>


        <YamlComponent />

    <Header />


      

      </div>
      
  );
}

export default App;
