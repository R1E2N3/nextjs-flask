"use client";

import React, { useState } from 'react';

const DynamicRadioButtons = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default DynamicRadioButtons;