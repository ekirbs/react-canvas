import React from 'react';
// import { FaInfinity } from "react-icons/fa";
import './optionsControls.css';

function OptionsControls() {
  const setOptions = (option) => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.option = option;
  };

  return (
    <div className="options-controls-container">
      <h2 className="options-controls-title">Options</h2>
      <div className="options-controls-buttons">
        {/* <button className="options-sm" onClick={() => setOptions(10)}></button> */}
        <button className="options-controls-md" onClick={() => setOptions(50)}></button>
        {/* <button className="options-lg" onClick={() => setOptions(100)}></button>
        <FaInfinity className="options-var" onClick={resetToOptions} /> */}
      </div>
    </div>
  );
}

export default OptionsControls;