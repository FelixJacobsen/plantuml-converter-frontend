// Header.jsx
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './Header.css';
import HomePage from "./HomePage";

function Header() {
  return (
  <div className="header-container"> 
    <div className="img-with-text">
      <img src='vgrlogo.jpg' alt='vgr-logo' width={120} className='header-image' />
      <h1 className="header-title"> PlantUML Converter</h1>
    </div>
      <nav className="header-nav">
        <ul className="header-nav-list">    
          <li className="header-nav-item"></li>
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item"><a href="#">YAML &#8594; PlantUML</a></li>
          <li className="header-nav-item"><a href="#">PUML &#8594; PlantUML</a></li>
        </ul>
      </nav>
  </div>
  );
}

export default Header;
