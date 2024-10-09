import React, { useState } from 'react';

import { MdFullscreen, MdCloseFullscreen } from 'react-icons/md';

import './fullscreen.css';

function Fullscreen({ toggleFullscreenCallback }) {
  const [fullscreenIcon, setFullscreenIcon] = useState(false);

  const toggleFullscreenIcon = () => setFullscreenIcon(!fullscreenIcon);

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        // Safari
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        // IE/Edge
        elem.msRequestFullscreen();
      }
      toggleFullscreenCallback(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msRequestFullscreen) {
        document.msRequestFullscreen();
      }
      toggleFullscreenCallback(false);
    }
  };

  return (
    <>
      <div className="fullscreen-container">
        <div className="fullscreen-icon" onClick={toggleFullscreenIcon}>
          {fullscreenIcon ? (
            <MdCloseFullscreen
              className="md-close-fullscreen, fullscreen"
              onClick={toggleFullscreen}
            />
          ) : (
            <MdFullscreen
              className="md-fullscreen, fullscreen"
              onClick={toggleFullscreen}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Fullscreen;
