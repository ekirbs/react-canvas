import React from 'react';

import { FaInfinity } from 'react-icons/fa';

import './lineWidthControls.css';

function LineWidthControls({ setLineWidth, setIsVariable, lineWidth, isVariable }) {
  const handleFixedWidth = (width) => {
    setIsVariable(false);
    setLineWidth(width);
  };

  const handleVariableWidth = () => {
    setIsVariable(true);
  };

  return (
    <div className="line-width-container">
      <h2 className="line-width-title">Line Width</h2>
      <div className="line-width-buttons">
        <button
          onClick={() => handleFixedWidth(10)}
          className="line-width-sm"
        ></button>
        <button
          onClick={() => handleFixedWidth(50)}
          className="line-width-md"
        ></button>
        <button
          onClick={() => handleFixedWidth(100)}
          className="line-width-lg"
        ></button>
        <FaInfinity
          className="line-width-var"
          onClick={handleVariableWidth}
        />
      </div>
    </div>
  );
}

export default LineWidthControls;
