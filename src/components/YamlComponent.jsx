import React, { useState, useRef } from "react";
import './YamlComponent.css';
import SaveButton from "./SaveButton";
import FormButtons from "./FormButtons";



function YamlComponent() {

    const [text, setText] = useState("");
    const [svgText, setSvgText] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch("http://localhost:8080/api/yaml/text", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body:text,
      });
  
      const svgResponse = await response.text();
      setSvgText(svgResponse);
    };
  
  
  
    return (
      <div className='container'>
  
  

  
        
        <div className='form-container'>
          <form onSubmit={handleSubmit} className="form">
            <label className='label'>
              Yaml data
            </label>
            <textarea
              placeholder='Enter your yaml data here'
              minLength={1}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-textarea"
            />
  
  
            <div className="form-buttons">
              <button type="submit" className='convert-button'>Convert to diagram</button>
              <button type="button" className='remove-button' onClick={() => setText('')}>Remove Text</button>
            </div>
          </form>
        </div>
  
  
  
        <div className='svg-container'>
          <label>PlantUML diagram</label>
            <svg  
  
              className='svg-diagram'
              dangerouslySetInnerHTML={{ __html: svgText }}
            />
          <div className='svg-buttons'>
          <SaveButton />
            <button type="button" className='remove-button' onClick={() => setSvgText('')}>Remove diagram</button>
          </div>
        </div>
      </div>
    );
  }


export default YamlComponent;



