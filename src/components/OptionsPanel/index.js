import React from 'react';
import { FaInfinity } from "react-icons/fa";
import './optionsPanel.css';

function OptionsPanel() {

  const setLineWidth = (width) => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = width;
  };

  const resetToVarWidth = () => {
    let direction = true;
  
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    ctx.lineWidth += direction ? 1 : -1;
  };

  const handleSmLineWidth = () => {
    setLineWidth(10);
  };

  const handleMdLineWidth = () => {
    setLineWidth(50);
  };

  const handleLgLineWidth = () => {
    setLineWidth(100);
  };

  return (
    <>
      <div>
        <div className="optionsPanel">
          <div className="lineWidthContainer">
            <h2 className="lineWidthTitle">Line Width</h2>
            <div className="lineWidthButtons">
              <button className="lineWidthSm" onClick={handleSmLineWidth}></button>
              <button className="lineWidthMd" onClick={handleMdLineWidth}></button>
              <button className="lineWidthLg" onClick={handleLgLineWidth}></button>
              <FaInfinity className="lineWidthVar" onClick={resetToVarWidth} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsPanel;
