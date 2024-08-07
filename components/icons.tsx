import React, { useState, useEffect } from 'react';

const mediumBreakpoint = 768; 

export const AstraZenecaIcon = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize('small');
      } else if (window.innerWidth <= mediumBreakpoint) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium';

  return (
    <div className="flex items-center justify-center h-8 w-8 mt-3 ml-3.5">
      <img
        src="/astrazeneca.svg"
        alt="AstraZeneca"
        style={{ 
          maxWidth: isSmallOrMedium ? '80%' : '100%',
          maxHeight: isSmallOrMedium ? '80%' : '100%',
          marginRight: isSmallOrMedium ? '18px' : '0', 
          marginBottom: isSmallOrMedium ? '20px' : '0'
        }}
      />
    </div>
  );
};

export const IntelIcon = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize('small');
      } else if (window.innerWidth <= mediumBreakpoint) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium';

  return (
    <div className="flex items-center justify-center h-8 w-8 mt-3 ml-3.5">
      <img
        src="/intel.png"
        alt="Intel"
        style={{ 
          maxWidth: isSmallOrMedium ? '80%' : '100%',
          maxHeight: isSmallOrMedium ? '80%' : '100%',
          marginRight: isSmallOrMedium ? '18px' : '0', 
          marginBottom: isSmallOrMedium ? '20px' : '0'
        }}
      />
    </div>
  );
};

export const OmniloreIcon = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize('small');
      } else if (window.innerWidth <= mediumBreakpoint) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium';

  return (
    <div className="flex items-center justify-center h-8 w-8 mt-3 ml-3.5">
      <img
        src="/omnilore.png"
        alt="Omnilore"
        style={{ 
          maxWidth: isSmallOrMedium ? '130%' : '160%',
          maxHeight: isSmallOrMedium ? '130%' : '160%',
          marginRight: isSmallOrMedium ? '18px' : '0', 
          marginBottom: isSmallOrMedium ? '20px' : '0'
        }}
      />
    </div>
  );
};

export const USCIcon = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize('small');
      } else if (window.innerWidth <= mediumBreakpoint) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallOrMedium = screenSize === 'small' || screenSize === 'medium';

  return (
    <div className="flex items-center justify-center h-8 w-8 mt-3.5 ml-3.5">
      <img
        src="/usc.png"
        alt="USC"
        style={{ 
          maxWidth: isSmallOrMedium ? '80%' : '100%',
          maxHeight: isSmallOrMedium ? '80%' : '100%',
          marginRight: isSmallOrMedium ? '18px' : '0', 
          marginBottom: isSmallOrMedium ? '20px' : '0' 
        }}
      />
    </div>
  );
};
