"use client";
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [text, currentIndex]);

  return (
    <span>{displayText}</span>
  );
};

export default Typewriter;
