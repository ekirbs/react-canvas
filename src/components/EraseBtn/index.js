import React from 'react';
import './erasebtn.css';

function EraseBtn() {
  const clearCanvas = () => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  };

  return (
    <>
      <button id="erase" onClick={clearCanvas}>
        ERASE
      </button>
    </>
  );
}

export default EraseBtn;
