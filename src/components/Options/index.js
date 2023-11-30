import React from 'react';
import './optionsbtn.css';

function Options({ toggleOptions }) {
  return (
    <>
      <button id="options" onClick={toggleOptions}>
        Options
      </button>
    </>
  );
}

export default Options;
