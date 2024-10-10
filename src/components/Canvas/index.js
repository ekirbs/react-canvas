import React, { useEffect, useRef } from 'react';
import './canvas.css';

const Canvas = React.memo(({ resizeOnFullscreen, lineWidth, isVariable, color, isRainbow }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.strokeStyle = '#100932'; // || 'LOOPER'
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = 50;
      ctx.globalCompositeOperation = 'lighten';
      console.log('Canvas rendered');
    };

    resizeCanvas();

    // || event listeners
    document.addEventListener('fullscreenchange', resizeCanvas);
    document.addEventListener('webkitfullscreenchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    return () => {
      document.removeEventListener('fullscreenchange', resizeCanvas);
      document.removeEventListener('webkitfullscreenchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
    };
  }, [resizeOnFullscreen]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    const directionRef = { current: true };

    function draw(e) {
      if (!isDrawing) return;

      const mouseX =
        e.type === 'touchmove'
          ? e.touches[0].clientX - canvas.offsetLeft
          : e.clientX - canvas.offsetLeft;
      const mouseY =
        e.type === 'touchmove'
          ? e.touches[0].clientY - canvas.offsetTop
          : e.clientY - canvas.offsetTop;

      if (isRainbow) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        hue = (hue + 1) % 360;
      } else {
        ctx.strokeStyle = color;
      }

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      [lastX, lastY] = [mouseX, mouseY];

      if (isVariable) {
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
          directionRef.current = !directionRef.current;
        }
        ctx.lineWidth += directionRef.current ? 1 : -1;
      } else {
        ctx.lineWidth = lineWidth;
      }
    }

    // || mouse events
    const mouseDownHandler = (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const mouseMoveHandler = (e) => draw(e);
    const mouseUpHandler = () => (isDrawing = false);
    const mouseOutHandler = () => (isDrawing = false);

    // || touchscreen events
    const touchStartHandler = (e) => {
      isDrawing = true;
      [lastX, lastY] = [
        e.touches[0].clientX - canvas.offsetLeft,
        e.touches[0].clientY - canvas.offsetTop,
      ];
      e.preventDefault();
    };

    const touchMoveHandler = (e) => {
      draw(e);
      e.preventDefault();
    };

    const touchEndHandler = () => (isDrawing = false);

    canvas.addEventListener('mousedown', mouseDownHandler);
    canvas.addEventListener('mousemove', mouseMoveHandler);
    canvas.addEventListener('mouseup', mouseUpHandler);
    canvas.addEventListener('mouseout', mouseOutHandler);

    canvas.addEventListener('touchstart', touchStartHandler);
    canvas.addEventListener('touchmove', touchMoveHandler);
    canvas.addEventListener('touchend', touchEndHandler);

    return () => {

      canvas.removeEventListener('mousedown', mouseDownHandler);
      canvas.removeEventListener('mousemove', mouseMoveHandler);
      canvas.removeEventListener('mouseup', mouseUpHandler);
      canvas.removeEventListener('mouseout', mouseOutHandler);

      canvas.removeEventListener('touchstart', touchStartHandler);
      canvas.removeEventListener('touchmove', touchMoveHandler);
      canvas.removeEventListener('touchend', touchEndHandler);
    };
  }, [isVariable, lineWidth, color, isRainbow]);

  useEffect(() => {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = lineWidth;

    console.log('Line width updated:', lineWidth);
  }, [lineWidth]);

  return <canvas id="draw" ref={canvasRef}></canvas>;
});

export default Canvas;
