// src/components/CustomCursor.js
import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
    ></div>
  );
};

export default CustomCursor;
