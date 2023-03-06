import React, { useState, useRef } from "react";
import Header from "./components/Header/Header";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import YamlComponent from "./components/YamlComponent/YamlComponent";
import PumlComponent from "./components/PumlComponent/PumlComponent"


function App() {

  return (
    <div className='container'>
    <Header />
        <Routes>
          <Route path="/yaml" element={<YamlComponent/>}> </Route>
          <Route path="/puml" element={<PumlComponent/>}> </Route>
        </Routes>
      </div>
  );
}

export default App;
