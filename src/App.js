import React, { useState } from 'react';
import './App.css';
import {
  Canvas,
  Fullscreen,
  Options,
  OptionsPanel,
  Erase,
  Screenshot,
} from './components';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const [lineWidth, setLineWidth] = useState(10); 
  const [isVariable, setIsVariable] = useState(true);

  const toggleFullscreen = (fullscreenStatus) => {
    setIsFullscreen(fullscreenStatus);
  };

  const toggleOptions = () => {
    if (optionsVisible) {
      setOptionsVisible(false);
    } else {
      const fullscreenElement =
        document.fullscreenElement || document.webkitFullscreenElement;
      setOptionsVisible(!fullscreenElement);
    }
  };

  return (
    <div className="App">
      <Fullscreen toggleFullscreenCallback={toggleFullscreen} />
      <Canvas
        resizeOnFullscreen={isFullscreen}
        lineWidth={lineWidth}
        isVariable={isVariable}
        setLineWidth={setLineWidth}
      />
      <Options toggleOptions={toggleOptions} />
      {optionsVisible && (
        <>
          <OptionsPanel
            lineWidth={lineWidth}
            setLineWidth={setLineWidth}
            isVariable={isVariable}
            setIsVariable={setIsVariable}
          />
          <Erase />
          <Screenshot />
        </>
      )}
    </div>
  );
}

export default App;
