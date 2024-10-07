import React, { useEffect } from 'react';
import './canvas.css';

function Canvas({ resizeOnFullscreen }) {
  useEffect(() => {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    // // || canvas resize on fullscreen toggle
    // const resizeCanvas = () => {
    //   if (resizeOnFullscreen) {
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //   }
    // };

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas dimensions to match the viewport
    resizeCanvas();

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 50;
    ctx.globalCompositeOperation = 'lighten';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

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

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      [lastX, lastY] = [mouseX, mouseY];

      hue = (hue + 1) % 360;

      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      ctx.lineWidth += direction ? 1 : -1;
    }

    //     // || mouse events
    //     const mouseDownHandler = (e) => {
    //       isDrawing = true;
    //       [lastX, lastY] = [e.offsetX, e.offsetY];
    //     };

    //     const mouseMoveHandler = (e) => {
    //       draw(e);
    //     };

    //     const mouseUpHandler = () => {
    //       isDrawing = false;
    //     };

    //     const mouseOutHandler = () => {
    //       isDrawing = false;
    //     };

    //     // || touchscreen events
    //     const touchStartHandler = (e) => {
    //       isDrawing = true;
    //       [lastX, lastY] = [e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop];
    //       e.preventDefault();
    //     };

    //     const touchMoveHandler = (e) => {
    //       draw(e);
    //       e.preventDefault();
    //     };

    //     const touchEndHandler = () => {
    //       isDrawing = false;
    //     };

    //     // || event listeners
    //     window.addEventListener('resize', resizeCanvas);

    //     canvas.addEventListener('mousedown', mouseDownHandler);
    //     canvas.addEventListener('mousemove', mouseMoveHandler);
    //     canvas.addEventListener('mouseup', mouseUpHandler);
    //     canvas.addEventListener('mouseout', mouseOutHandler);

    //     canvas.addEventListener('touchstart', touchStartHandler);
    //     canvas.addEventListener('touchmove', touchMoveHandler);
    //     canvas.addEventListener('touchend', touchEndHandler);

    //     return () => {
    //       window.removeEventListener('resize', resizeCanvas);
    //       canvas.removeEventListener('mousedown', mouseDownHandler);
    //       canvas.removeEventListener('mousemove', mouseMoveHandler);
    //       canvas.removeEventListener('mouseup', mouseUpHandler);
    //       canvas.removeEventListener('mouseout', mouseOutHandler);
    //       canvas.removeEventListener('touchstart', touchStartHandler);
    //       canvas.removeEventListener('touchmove', touchMoveHandler);
    //       canvas.removeEventListener('touchend', touchEndHandler);
    //     };

    //   }, [resizeOnFullscreen]);

    //   return <canvas id="draw"></canvas>;
    // }

    // Event Handlers for mouse and touch interactions
    const mouseDownHandler = (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    const touchStartHandler = (e) => {
      isDrawing = true;
      [lastX, lastY] = [
        e.touches[0].clientX - canvas.offsetLeft,
        e.touches[0].clientY - canvas.offsetTop,
      ];
      e.preventDefault();
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    // Add event listeners for mouse and touch inputs
    canvas.addEventListener('mousedown', mouseDownHandler);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', touchStartHandler);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Add resize listener and fullscreen listener
    window.addEventListener('resize', resizeCanvas);

    if (resizeOnFullscreen) {
      const fullscreenChangeHandler = () => resizeCanvas();
      document.addEventListener('fullscreenchange', fullscreenChangeHandler);
      document.addEventListener(
        'webkitfullscreenchange',
        fullscreenChangeHandler
      ); // Safari support

      return () => {
        document.removeEventListener(
          'fullscreenchange',
          fullscreenChangeHandler
        );
        document.removeEventListener(
          'webkitfullscreenchange',
          fullscreenChangeHandler
        );
      };
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', mouseDownHandler);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
      canvas.removeEventListener('touchstart', touchStartHandler);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [resizeOnFullscreen]);

  return <canvas id="draw"></canvas>;
}

export default Canvas;
