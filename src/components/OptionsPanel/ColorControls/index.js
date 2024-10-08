import React from 'react';
// import { FaInfinity } from "react-icons/fa";
import './colorControls.css';

function ColorControls() {
  const setColors = (effect) => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.effect = effect;
  };

  return (
    <div className="colors-controls-container">
      <h2 className="colors-controls-title">Colors</h2>
      <div className="colors-controls-buttons">
        {/* <button className="colors-sm" onClick={() => setcolors(10)}></button> */}
        <button className="colors-controls-md" onClick={() => setColors(50)}></button>
        {/* <button className="colors-lg" onClick={() => setcolors(100)}></button>
        <FaInfinity className="colors-var" onClick={resetTocolors} /> */}
      </div>
    </div>
  );
}

export default ColorControls;