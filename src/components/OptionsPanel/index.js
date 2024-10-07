import React from 'react';
import { FaInfinity } from "react-icons/fa";
import './optionsPanel.css';

function OptionsPanel({ isOpen }) {

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
        <div className={`options-panel ${isOpen ? 'open' : 'closed'}`}>
          {/* <div className="options-panel-background"> */}
            <div className="line-width-container">
              <h2 className="line-width-title">Line Width</h2>
              <div className="line-width-buttons">
                <button className="line-width-sm" onClick={handleSmLineWidth}></button>
                <button className="line-width-md" onClick={handleMdLineWidth}></button>
                <button className="line-width-lg" onClick={handleLgLineWidth}></button>
                <FaInfinity className="line-width-var" onClick={resetToVarWidth} />
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default OptionsPanel;
