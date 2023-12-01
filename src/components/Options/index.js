import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './optionsbtn.css';

function Options({ toggleOptions }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="button-container">
        <div className="options-icon" onClick={toggleDropdown}>
          {showDropdown ? (
            <FaTimes className="FaTimes, optionsBtn" onClick={toggleOptions} />
          ) : (
            <FaBars className="Fatimes, optionsBtn" onClick={toggleOptions} />
          )}
        </div>
      </div>
    </>
  );
}

export default Options;
