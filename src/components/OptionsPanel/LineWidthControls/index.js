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
      {/* <h2 className="line-width-controls-title">Line Width</h2> */}
      <div className="line-width-buttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(10)
          }}
          className="line-width-button-container sm-md-container"
          type="button"
        >
          <div
            className="line-width-sm"
          />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(50)
          }}
          className="line-width-button-container sm-md-container"
          type="button"
        >
          <div
            className="line-width-md"
          />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFixedWidth(100)
          }}
          className="line-width-button-container lg-container"
          type="button"
        />
        <div
          className="line-width-button-container var-container"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleVariableWidth();
          }}
          >
            <FaInfinity
              className="line-width-var"
            />
          </div>
      </div>
    </div>
  );
}

export default LineWidthControls;
