import React from 'react';
import { FaVolumeHigh } from 'react-icons/fa6';
import { FaVolumeXmark } from 'react-icons/fa6';
import './settingsControls.css';

function SettingsControls({ isMusicPlaying, toggleMusic }) {
  return (
    <div className="settings-controls-container">
      <h2 className="settings-controls-title">Settings</h2>
      <div className="settings-content">
        <button onClick={toggleMusic} className="music-toggle">
          {/* {isMusicPlaying ? 'Stop Music' : 'Play Music'} */}
          {isMusicPlaying ? <FaVolumeHigh className='music-toggle-button' /> : <FaVolumeXmark className='music-toggle-button' />}
        </button>
      </div>
    </div>
  );
}

export default SettingsControls;