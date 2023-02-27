import React, { useState } from 'react';
import './Header.css';

function SaveButton(){
    const [svgText] = useState("");

    return(
        <button type="button" className='save-button' onClick={() => {
            const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
            const svgUrl = URL.createObjectURL(svgBlob);
            const downloadLink = document.createElement('a');
            downloadLink.href = svgUrl;
            downloadLink.download = 'image.svg';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(svgUrl);
          }}>
            Save as SVG
          </button>

    )


}

export default SaveButton;