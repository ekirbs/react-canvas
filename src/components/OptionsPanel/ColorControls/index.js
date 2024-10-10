import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

import './colorControls.css';

function ColorControls() {
  const [color, setColor] = useState('#FFFFFF');

  // function handleColorChange(e) {
  //   setColor(e.target.value);
  // };
  const handleColorChange = (color) => {
    setColor(color.hex);
  }
  
  return (
    <>
      <div className="color-controls-container">
        <h2 className="color-controls-title">Color Picker</h2>
        <div className="color-controls-content">
          <div className="color-display" style={{ backgroundColor: color }}>
            <p>Selected Color: {color}</p>
          </div>
          <div className="color-picker">
            <label>Select A Color</label>
            {/* <input type="color" value={color} onChange={handleColorChange} /> */}
            <GithubPicker color={color} onChange={handleColorChange} className="github-picker" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorControls;
