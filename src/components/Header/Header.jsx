// Header.jsx
import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
  <div className="header-container"> 
    <div className="img-with-text">
     <img src='vgrlogo.jpg' alt='vgr-logo' width={120} className='header-image'/>
      <h1 className="header-title"> PlantUML Converter</h1>
    </div>
      <nav className="header-nav">
        <ul className="header-nav-list">    
          <li className="header-nav-item">
            <Link to="/yaml">YAML &#8594; UML Diagram</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/puml">PUML &#8594; UML Diagram</Link>
          </li>
        </ul>
      </nav>
  </div>
  );
}

export default Header;
