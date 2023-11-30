import React, { useState } from 'react';
import './App.css';
import {
  Canvas,
  Fullscreen,
  Options,
  EraseBtn,
  ScreenshotBtn
} from "./components";

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleFullscreen = (fullscreenStatus) => {
    setIsFullscreen(fullscreenStatus);
  };

  // const toggleOptions = () => {
  //   setOptionsVisible(!optionsVisible);
  // };
  const toggleOptions = () => {
    if (optionsVisible) {
      setOptionsVisible(false);
    } else {
      // Check fullscreen state and update optionsVisible accordingly
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
      setOptionsVisible(!fullscreenElement);
    }
  };

  return (
    <div className="App">
      <Fullscreen toggleFullscreenCallback={toggleFullscreen} />
      <Canvas resizeOnFullscreen={isFullscreen} />
      <Options toggleOptions={toggleOptions} />
      {optionsVisible && (
        <>
          <EraseBtn />
          <ScreenshotBtn />
        </>
      )}
    </div>
  );
}

export default App;
