import React from 'react';
import { FaEraser } from "react-icons/fa";
import './erasebtn.css';

function EraseBtn() {
  const clearCanvas = () => {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  };

  return (
    <>
      <FaEraser className="eraseBtn" onClick={clearCanvas} />
    </>
  );
}

export default EraseBtn;
