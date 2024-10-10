import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import { FaRainbow } from 'react-icons/fa';

import './colorControls.css';

function ColorControls({ color, setColor, isRainbow, setIsRainbow }) {
  // const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (color) => {
    setColor(color.hex);
    setIsRainbow(false);
    console.log("handleColorChange. setIsRainbow(false), setColor: ", color.hex);
  };

  const handleRainbowColor = () => {
    setIsRainbow(true);
    console.log("handleRainbowColor. setIsRainbow(true)");
  };
  
  return (
    <>
      <div className="color-controls-container">
        <h2 className="color-controls-title">Color Picker</h2>
        <div className="color-controls-content">
          <div className="color-display" style={{ backgroundColor: color }}>
            <p>Selected Color: {color}</p>
          </div>
          <div className="color-picker">
            {/* <label>Select A Color</label> */}
            <GithubPicker color={color} onChange={handleColorChange} className="github-picker" />
          </div>
          <div className="rainbow-color">
            <FaRainbow
              className="rainbow-icon"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleRainbowColor();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorControls;
