import React from 'react';
import { FaCamera } from 'react-icons/fa';
import Tooltip from '../Tooltip';
import './screenshot.css';

function Screenshot() {
  const takeScreenshot = () => {
    const canvas = document.getElementById('draw');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'doodle.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tooltip text="Screenshot" className="screenshot-tooltip-container">
      <div className="screenshot-container">
        <FaCamera className="screenshot" onClick={takeScreenshot} />
      </div>
    </Tooltip>
  );
}

export default Screenshot;
