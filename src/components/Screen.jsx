import React, { useEffect, useState } from 'react';
import './Screen.css';

export const Screen = ({ value }) => {
  const [isSmallFont, setIsSmallFont] = useState(false);

  useEffect(() => {
    // Check if the text length exceeds a certain threshold
    setIsSmallFont(value.length > 9); // Adjust the threshold as needed
  }, [value]);

  return <div className={`screen ${isSmallFont ? 'small' : ''}`}>{value}</div>;
};
