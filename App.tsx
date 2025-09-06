
import React, { useState, useEffect, useRef } from 'react';
import PasswordGate from './PasswordGate';
import Dashboard from './Dashboard';
import { CORRECT_PASSWORD } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time for a more premium feel
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Parallax effect for the background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const { clientX, clientY } = e;
        const x = (window.innerWidth / 2 - clientX) / 50;
        const y = (window.innerHeight / 2 - clientY) / 50;
        bgRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div ref={bgRef} className="parallax-bg"></div>
      <div className="min-h-screen w-full bg-transparent text-white relative z-0">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
              <h1 className="font-orbitron text-3xl text-cyan-400 animate-pulse">PROMPT OS</h1>
          </div>
        ) : !isAuthenticated ? (
          <PasswordGate
            onUnlock={handleUnlock}
            correctPassword={CORRECT_PASSWORD}
            title="PROMPT OS"
            subtitle="Enter Access Code"
          />
        ) : (
          <Dashboard />
        )}
      </div>
    </>
  );
};

export default App;