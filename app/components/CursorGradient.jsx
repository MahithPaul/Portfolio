import React, { useEffect } from 'react';
import styles from '../css/CursorGradient.module.css';

const CursorGradient = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor');

      // Set the position of the cursor gradient to the mouse position
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Add the event listener to track mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`${styles.cursor} cursor`}></div>
  );
};

export default CursorGradient;
