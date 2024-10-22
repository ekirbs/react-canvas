import React, { useState, useEffect } from 'react';
import direDireDocks from './assets/audio/direDireDocks.mp3';
import {
  Canvas,
  Fullscreen,
  Options,
  OptionsPanel,
  Erase,
  Screenshot,
  Tooltip,
} from './components';

import './App.css';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const [lineWidth, setLineWidth] = useState(10); 
  const [isVariable, setIsVariable] = useState(true);

  const [color, setColor] = useState('#FFFFFF');
  const [isRainbow, setIsRainbow] = useState(true);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio] = useState(new Audio(direDireDocks));


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

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    if (isMusicPlaying) {
      audio.play();
      audio.loop = true;
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isMusicPlaying, audio]);

  return (
    <div className="App">
      <Tooltip text="Fullscreen">
        <Fullscreen toggleFullscreenCallback={toggleFullscreen} />
      </Tooltip>
      <Canvas
        resizeOnFullscreen={isFullscreen}
        lineWidth={lineWidth}
        setLineWidth={setLineWidth}
        isVariable={isVariable}
        color={color}
        isRainbow={isRainbow}
      />
      <Tooltip text="Options">
        <Options toggleOptions={toggleOptions} />
      </Tooltip>

      {optionsVisible && (
        <>
          <OptionsPanel
            lineWidth={lineWidth}
            setLineWidth={setLineWidth}
            isVariable={isVariable}
            setIsVariable={setIsVariable}
            color={color}
            setColor={setColor}
            isRainbow={isRainbow}
            setIsRainbow={setIsRainbow}
            isMusicPlaying={isMusicPlaying}
            toggleMusic={toggleMusic}
          />
          <Erase />
          <Tooltip text="Screenshot">
            <Screenshot />
          </Tooltip>
        </>
      )}
    </div>
  );
}

export default App;
