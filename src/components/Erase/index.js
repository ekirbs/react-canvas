import React from 'react';

import { FaEraser } from 'react-icons/fa';

import Tooltip from '../Tooltip';
import './erase.css';

function EraseBtn() {
  const clearCanvas = () => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  };

  return (
    <Tooltip text="Erase" className="erase-tooltip-container">
      <div className="erase-container">
        <FaEraser className="erase" onClick={clearCanvas} />
      </div>
    </Tooltip>
  );
}

export default EraseBtn;
