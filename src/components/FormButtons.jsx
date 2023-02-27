import './FormButtons.css';
import React, { useState } from "react";



function FormButtons(){
    const [ setText] = useState("");

    return (
        <div className="form-buttons">
            <button type="submit" className='convert-button'>Convert to diagram</button>
            <button type="button" className='remove-button' onClick={() => setText('')}>Remove Text</button>
          </div>
    )
}

export default FormButtons;