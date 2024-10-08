import React, { useState } from 'react';
import LineWidthControls from './LineWidthControls';
import ColorControls from './ColorControls';
import EffectsControls from './EffectsControls';
import OptionsControls from './OptionsControls';
import './optionsPanel.css';

function OptionsPanel({ isOpen }) {

  const [activeTab, setActiveTab] = useState('line-width');

  const renderPanelContent = () => {
    switch (activeTab) {
      case 'line-width':
        return <LineWidthControls />;
      case 'color':
        return <ColorControls />;
      case 'effects':
        return <EffectsControls />;
      case 'options':
        return <OptionsControls />;
      default:
        return <LineWidthControls />;
    }
  };

  return (
    <div>
      <div className={`options-panel ${isOpen ? 'open' : 'closed'}`}>
        {/* Navigation bar for tabs */}
        <div className="options-panel-tabs">
          <button className="options-panel-tab" onClick={() => setActiveTab('line-width')}>Line Width</button>
          <button className="options-panel-tab" onClick={() => setActiveTab('color')}>Color</button>
          <button className="options-panel-tab" onClick={() => setActiveTab('effects')}>Effects</button>
          <button className="options-panel-tab" onClick={() => setActiveTab('options')}>Options</button>
        </div>

        {/* Content for the active tab */}
        <div className="options-panel-content">
          {renderPanelContent()}
        </div>
      </div>
    </div>
  );
}

export default OptionsPanel;