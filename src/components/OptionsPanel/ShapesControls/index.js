import React from 'react';
// import { FaInfinity } from "react-icons/fa";
import './shapesControls.css';

function ShapesControls() {
  const setShapes = (shapes) => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.shapes = shapes;
  };

  return (
    <div className="shapes-controls-container">
      <h2 className="shapes-controls-title">Shapes</h2>
      <div className="shapes-controls-buttons">
        {/* <button className="shapes-sm" onClick={() => setShapes(10)}></button> */}
        <button className="shapes-controls-md" onClick={() => setShapes(50)}></button>
        {/* <button className="shapes-lg" onClick={() => setShapes(100)}></button>
        <FaInfinity className="shapes-var" onClick={resetToShapes} /> */}
      </div>
    </div>
  );
}

export default ShapesControls;