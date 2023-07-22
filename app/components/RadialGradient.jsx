import React, { useEffect } from 'react';
import styles from '../css/CursorGradient.module.css';

const RadialGradient = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradient = document.querySelector('.radial-gradient');
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseXpercentage = Math.round((e.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((e.pageY / windowHeight) * 100);

      gradient.style.background = `radial-gradient(600px at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
  <div className={`${styles.radialGradient} radial-gradient`}></div>
  )
};

export default RadialGradient;
