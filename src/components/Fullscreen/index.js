import React from 'react';
import './fullscreen.css';

function Fullscreen({ toggleFullscreenCallback }) {

  const toggleFullscreen = () => {
    const elem = document.documentElement;
  
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
      toggleFullscreenCallback(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      toggleFullscreenCallback(false);
    }
  };

  return (
    <div className="Fullscreen">
      <button id="fullscreen" onClick={toggleFullscreen}>Fullscreen</button>
    </div>
  );
}

export default Fullscreen;
