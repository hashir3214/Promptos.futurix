
import React from 'react';
import Typewriter from './Typewriter';

const WelcomeHub: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="animate-fadeIn animate-fadeIn-delay-1">
        <h1 className="text-5xl font-orbitron text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          System Online: Welcome to PromptOS
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          The nexus of your digital sovereignty.
        </p>
      </header>

      <section className="animate-fadeIn animate-fadeIn-delay-2 border border-cyan-400/20 bg-black/20 p-6 rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.1)]">
        <h2 className="text-2xl font-orbitron text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] shimmer-text">The Futurix Mandate</h2>
        <div className="text-gray-300 leading-relaxed max-w-3xl prose prose-invert">
            <Typewriter 
            text="Futurix is built to create timeless digital experiences that merge innovation, elegance, and simplicity. Our vision is to set new standards for futuristic tools and knowledge, making them accessible while delivering luxury in every detail." 
            speed={25} 
            />
        </div>
      </section>

      <section className="animate-fadeIn animate-fadeIn-delay-3">
        <h2 className="text-2xl font-orbitron text-purple-400 mb-4">Interface Navigation</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          Your command interface is located to the port (left). The{' '}
          <strong className="text-cyan-400">Prompt Arsenal</strong> contains an
          arsenal of high-yield cognitive tools. For our Elite members, the{' '}
          <strong className="text-purple-400">Hidden Vault</strong> safeguards our most potent, 
          proprietary assets. Your ascension begins now.
        </p>
      </section>
    </div>
  );
};

export default WelcomeHub;