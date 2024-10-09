import React, { useState } from 'react';
import LineWidthControls from './LineWidthControls';
import ColorControls from './ColorControls';
import EffectsControls from './EffectsControls';
import OptionsControls from './OptionsControls';

import { MdOutlineLineWeight } from 'react-icons/md';
import { IoMdColorPalette } from 'react-icons/io';
import { FaWandSparkles } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

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
        <div className="options-panel-tabs">
          <button
            className="options-panel-tab line-width"
            onClick={() => setActiveTab('line-width')}
          >
            <MdOutlineLineWeight className="options-panel-tab-icon"></MdOutlineLineWeight>
          </button>
          <button
            className="options-panel-tab color"
            onClick={() => setActiveTab('color')}
          >
            <IoMdColorPalette className="options-panel-tab-icon"></IoMdColorPalette>
          </button>
          <button
            className="options-panel-tab effects"
            onClick={() => setActiveTab('effects')}
          >
            <FaWandSparkles className="options-panel-tab-icon"></FaWandSparkles>
          </button>
          <button
            className="options-panel-tab settings"
            onClick={() => setActiveTab('options')}
          >
            <IoMdSettings className="options-panel-tab-icon"></IoMdSettings>
          </button>
        </div>

        <div className="options-panel-content">{renderPanelContent()}</div>
      </div>
    </div>
  );
}

export default OptionsPanel;
