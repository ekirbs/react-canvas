import React, { useEffect, useRef, useState } from 'react';

import { FaInfinity } from 'react-icons/fa';

import './lineWidthControls.css';

function LineWidthControls() {
  const [lineWidth, setLineWidth] = useState(10);
  const [isVariable, setisVariable] = useState(true);
  const directionRef = useRef(true);
  const intervalRef = useRef(null);

  const handleSetLineWidth = (width) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null
    setisVariable(false);
    setLineWidth(width);
  };

  const resetToVarWidth = () => {
    clearInterval(intervalRef.current);
    setisVariable(true);
  };

  useEffect(() => {
    if (isVariable) {
      intervalRef.current = setInterval(() => {
        setLineWidth((prevWidth) => {
          if (prevWidth >= 100) {
            directionRef.current = false;
          } else if (prevWidth <= 1) {
            directionRef.current = true;
          }
          return directionRef.current ? prevWidth + 1 : prevWidth - 1;
        });
      }, 50);
      return () => clearInterval(intervalRef.current);
    }
  }, [isVariable]);

  useEffect(() => {
    const canvas = document.getElementById('draw');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = lineWidth;
    }
  }, [lineWidth]);

  // useEffect(() => {
  //   if (isVariable) {
  //     const interval = setInterval(() => {
  //       setLineWidth((prevWidth) => {
  //         if (prevWidth >= 100) {
  //           directionRef.current = false;
  //         } else if (prevWidth <= 1) {
  //           directionRef.current = true;
  //         }
  //         return directionRef.current ? prevWidth + 1 : prevWidth - 1;
  //       });
  //     }, 100);
  //     return () => clearInterval(interval);
  //   }
  // }, [isVariable]);

  

  // useEffect(() => {
  //   const canvas = document.getElementById('draw');
  //   const ctx = canvas.getContext('2d');
  //   ctx.lineWidth = lineWidth;
  // }, [lineWidth]);

  // const setLineWidth = (width) => {
  //   const canvas = document.getElementById('draw');
  //   const ctx = canvas.getContext('2d');
  //   ctx.lineWidth = width;
  // };

  // const resetToVarWidth = () => {
  //   let direction = true;

  //   const canvas = document.getElementById('draw');
  //   const ctx = canvas.getContext('2d');

  //   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  //     direction = !direction;
  //   }
  //   ctx.lineWidth += direction ? 1 : -1;
  // };

  return (
    <div className="line-width-container">
      <h2 className="line-width-title">Line Width</h2>
      <div className="line-width-buttons">
        <button
          className="line-width-sm"
          // onClick={() => setLineWidth(10)}
          onClick={() => handleSetLineWidth(10)}
        ></button>
        <button
          className="line-width-md"
          // onClick={() => setLineWidth(50)}
          onClick={() => handleSetLineWidth(50)}
        ></button>
        <button
          className="line-width-lg"
          // onClick={() => setLineWidth(100)}
          onClick={() => handleSetLineWidth(100)}
        ></button>
        <FaInfinity className="line-width-var" onClick={resetToVarWidth} />
      </div>
    </div>
  );
}

export default LineWidthControls;
