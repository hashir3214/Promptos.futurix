
import React, { useState, FormEvent, useRef, useEffect } from 'react';

interface PasswordGateProps {
  onUnlock: () => void;
  onClose?: () => void;
  correctPassword?: string;
  title: string;
  subtitle: string;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock, onClose, correctPassword, title, subtitle }) => {
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      setIsError(true);
      setPassword('');
      setTimeout(() => setIsError(false), 500);
    }
  };

  const wrapperClasses = onClose
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm' // Modal style
    : 'h-screen w-full flex items-center justify-center'; // Fullscreen style

  return (
    <div className={wrapperClasses}>
      <div className={`bg-gray-900/50 border border-gray-700/50 rounded-lg p-8 shadow-2xl shadow-cyan-500/10 text-center max-w-md w-full animate-fadeIn relative ${isError ? 'animate-shake' : ''}`}>
        {onClose && (
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-2xl">&times;</button>
        )}
        <h1 className="text-4xl font-orbitron text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">{title}</h1>
        <p className="text-gray-400 mb-8">{subtitle}</p>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full bg-gray-800/50 border-2 rounded-md px-4 py-3 text-center text-lg text-white font-mono tracking-widest focus:outline-none transition-all duration-300 ${isError ? 'border-red-500 shadow-[0_0_10px_rgba(255,0,0,0.5)]' : 'border-gray-600 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.5)]'}`}
            placeholder="ACCESS_CODE"
          />
          <button
            type="submit"
            className="w-full mt-6 bg-cyan-500 text-black font-bold font-orbitron py-3 rounded-md uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
