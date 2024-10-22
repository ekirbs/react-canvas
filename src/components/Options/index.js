import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';

import Tooltip from '../Tooltip';

import './options.css';

function Options({ toggleOptions }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Tooltip text="Options" className="options-tooltip-container">
      <div className="options-container">
        <div className="options-content" onClick={toggleDropdown}>
          {showDropdown ? (
            <FaTimes className="fa-times options-icon" onClick={toggleOptions} />
          ) : (
            <FaBars className="fa-bars options-icon" onClick={toggleOptions} />
          )}
        </div>
      </div>
    </Tooltip>
  );
}

export default Options;
