import React, { useState, useRef } from "react";
import Header from "./components/Header";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YamlComponent from "./components/YamlComponent";
import PumlComponent from "./components/PumlComponent"
import HomePage from "./components/HomePage";


function App() {

  let component;
  switch (window.location.pathname){
    case "/":
      component = <HomePage/>
      break
    case "/yaml":
      component = <YamlComponent/>
      break
    case "/puml":
      component = <PumlComponent/>
      break;
  }
  return (
    <>
  
    <div className='container'>
    <Header />
    <YamlComponent></YamlComponent>
        <Routes>
          <Route path="/" element={HomePage}/>
        </Routes>
      </div>
      </>
  );
}

export default App;
