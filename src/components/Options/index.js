import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

import './options.css';

function Options({ toggleOptions }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="options-container">
        <div className="options-icon" onClick={toggleDropdown}>
          {showDropdown ? (
            <FaTimes className="fa-times, options" onClick={toggleOptions} />
          ) : (
            <FaBars className="fa-bars, options" onClick={toggleOptions} />
          )}
        </div>
      </div>
    </>
  );
}

export default Options;
