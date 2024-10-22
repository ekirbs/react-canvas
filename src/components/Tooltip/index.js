import React, { useState } from 'react';

import './tooltip.css';

function Tooltip({ text, children, className }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setShowTooltip(true), 500);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tooltip-container ${className}`}
    >
      {children}
      {showTooltip && (
        <div
          className="tooltip-box"
        >
          {text}
        </div>
      )}

    </div>
  )
}

export default Tooltip;