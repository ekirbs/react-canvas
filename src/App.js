import React, { useState } from 'react';
import './App.css';
import {
  Canvas,
  Fullscreen,
  Options,
  OptionsPanel,
  Erase,
  Screenshot
} from "./components";

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleFullscreen = (fullscreenStatus) => {
    setIsFullscreen(fullscreenStatus);
  };

  const toggleOptions = () => {
    if (optionsVisible) {
      setOptionsVisible(false);
    } else {
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
          <OptionsPanel />
          <Erase />
          <Screenshot />
        </>
      )}
    </div>
  );
}

export default App;
