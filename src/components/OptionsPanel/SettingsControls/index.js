import React from 'react';
import { FaVolumeHigh } from 'react-icons/fa6';
import { FaVolumeXmark } from 'react-icons/fa6';
import './settingsControls.css';

function SettingsControls({ isMusicPlaying, toggleMusic }) {
  return (
    <div className="settings-controls-container">
      <h2 className="settings-controls-title">Settings</h2>
      <div className="settings-content">
        <button
          onClick={toggleMusic}
          // className="music-toggle"
          className={`music-toggle ${isMusicPlaying ? 'music-on' : 'music-off'}`}
        >
          {isMusicPlaying ? (
            <FaVolumeHigh className="music-icon" />
          ) : (
            <FaVolumeXmark className="music-icon" />
          )}
        </button>
      </div>
    </div>
  );
}

export default SettingsControls;
