import React from 'react';
// import { FaInfinity } from "react-icons/fa";
import './effectsControls.css';

function EffectsControls() {
  const setEffects = (effect) => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.effect = effect;
  };

  return (
    <div className="effects-controls-container">
      <h2 className="effects-controls-title">Effects</h2>
      <div className="effects-controls-buttons">
        {/* <button className="effects-sm" onClick={() => setEffects(10)}></button> */}
        <button className="effects-controls-md" onClick={() => setEffects(50)}></button>
        {/* <button className="effects-lg" onClick={() => setEffects(100)}></button>
        <FaInfinity className="effects-var" onClick={resetToEffects} /> */}
      </div>
    </div>
  );
}

export default EffectsControls;