// import React, { useEffect, useState } from 'react';
import './fullscreen.css';

function Fullscreen({ toggleFullscreenCallback }) {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Check if the user is on a mobile device
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //   if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
  //     setIsMobile(true); // Mark as mobile device
  //   }
  // }, []);

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
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
      {/* {!isMobile && ( */}
        <button id="fullscreen" onClick={toggleFullscreen}>
          Fullscreen
        </button>
      {/* )} */}
    </div>
  );
}

export default Fullscreen;
