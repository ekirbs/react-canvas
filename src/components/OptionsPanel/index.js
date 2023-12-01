import React from 'react';
import './optionsPanel.css';

function OptionsPanel() {

  return (
    <>
      <div>
        <div className="optionsPanel">
          <div className="lineWidthContainer">
            <h2 className="lineWidthTitle">Line Width</h2>
            <div className="lineWidthButtons">
              <button className="lineWidthSm"></button>
              <button className="lineWidthMd"></button>
              <button className="lineWidthLg"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsPanel;
