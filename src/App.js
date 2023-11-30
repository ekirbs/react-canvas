import React, { useState } from 'react';
import './App.css';
import {
  Canvas,
  Fullscreen,
  Options
} from "./components";

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = (fullscreenStatus) => {
    setIsFullscreen(fullscreenStatus);
  };

  return (
    <div className="App">
      <Fullscreen toggleFullscreenCallback={toggleFullscreen} />
      <Canvas resizeOnFullscreen={isFullscreen} />
      <Options />
    </div>
  );
}

export default App;
