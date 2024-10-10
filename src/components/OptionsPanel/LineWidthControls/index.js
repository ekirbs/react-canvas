import React from 'react';

import { FaInfinity } from 'react-icons/fa';

import './lineWidthControls.css';

function LineWidthControls({ setLineWidth, setIsVariable, lineWidth, isVariable }) {
  const handleFixedWidth = (width) => {
    setIsVariable(false);
    setLineWidth(width);
    console.log("handleFixedWidth, isVariable(false), setLineWidth: ", width)
  };

  const handleVariableWidth = () => {
    setIsVariable(true);
  };

  return (
    <div className="line-width-controls-container">
      <h2 className="line-width-controls-title">Line Width</h2>
      <div className="line-width-buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(10)
          }}
          className="line-width-sm"
          type="button"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(50)
          }}
          className="line-width-md"
          type="button"
        ></button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(100)
          }}
          className="line-width-lg"
          type="button"
        ></button>
        <FaInfinity
          className="line-width-var"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleVariableWidth();
          }}
        />
      </div>
    </div>
  );
}

export default LineWidthControls;
