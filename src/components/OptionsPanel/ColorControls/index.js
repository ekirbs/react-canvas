import React from 'react';
import { GithubPicker } from 'react-color';
import { FaRainbow } from 'react-icons/fa';

import './colorControls.css';

function ColorControls({ color, setColor, isRainbow, setIsRainbow }) {

  const handleColorChange = (color) => {
    setColor(color.hex);
    setIsRainbow(false);
    console.log(
      'handleColorChange. setIsRainbow(false), setColor: ',
      color.hex
    );
  };

  const handleRainbowColor = () => {
    setColor('rainbow');
    setIsRainbow(true);
    console.log('handleRainbowColor. setIsRainbow(true), setColor: rainbow');
  };

  const displayStyle = isRainbow
    ? { backgroundImage: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)' }
    : { backgroundColor: color };

  const displayText = color === 'rainbow' ? 'Rainbow' : color;

  return (
    <>
      <div className="color-controls-container">
        <div className="color-controls-content">
          <div className="color-display" style={displayStyle}>
            <p>Selected Color: {displayText}</p>
          </div>
          <div className="color-picker">
            <GithubPicker
              color={color === "rainbow" ? "#FFFFFF" : color}
              onChange={handleColorChange}
              className="github-picker"
            />
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
