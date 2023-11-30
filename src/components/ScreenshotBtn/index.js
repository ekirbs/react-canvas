import React from 'react';
import './screenshotbtn.css';

function ScreenshotBtn() {
  const takeScreenshot = () => {
    const canvas = document.getElementById('draw');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'doodle.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button id="screenshot" onClick={takeScreenshot}>
        Take Screenshot
      </button>
    </>
  );
}

export default ScreenshotBtn;
