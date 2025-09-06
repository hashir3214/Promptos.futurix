
import React, { useState } from 'react';
import { HIDDEN_VAULT_PROMPTS } from './constants';
import type { Prompt } from './types';
import { ClipboardIcon } from './Icons';
import Typewriter from './Typewriter';

const VaultPromptCard: React.FC<{ prompt: Prompt }> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-purple-900/20 p-6 rounded-lg border-2 border-purple-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-30"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h4 className="font-orbitron text-xl text-purple-300 group-hover:text-purple-200 transition-colors pr-4">{prompt.title}</h4>
          <button 
            onClick={handleCopy} 
            className="text-gray-300 hover:text-white transition-colors p-2 rounded-md bg-purple-700/50 hover:bg-purple-600/80 flex-shrink-0"
            aria-label="Copy prompt"
          >
             {copied ? <span className="text-xs">COPIED</span> : <ClipboardIcon />}
          </button>
        </div>
        <div className="text-sm text-gray-300 bg-black/50 p-4 rounded-md font-mono">
           <Typewriter text={prompt.prompt} speed={10} />
        </div>
      </div>
       <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
    </div>
  );
};

const HiddenVault: React.FC = () => {
  let cardIndex = 0;
  return (
    <div className="animate-vault-reveal">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-orbitron text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]">
          Sanctum Access: The Vault
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Elite-tier protocols unlocked. Discretion is paramount.
        </p>
      </header>
      <div className="space-y-12 max-w-4xl mx-auto">
        {HIDDEN_VAULT_PROMPTS.map((category, index) => (
          <section key={index}>
            <h2 className="text-3xl font-orbitron text-purple-300 mb-6 border-b-2 border-purple-500/30 pb-2">
              {category.category}
            </h2>
            <div className="space-y-8">
              {category.prompts.map((prompt) => {
                cardIndex++;
                return (
                  <div key={prompt.title} className={`animate-fadeIn animate-fadeIn-delay-${cardIndex}`}>
                    <VaultPromptCard prompt={prompt} />
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HiddenVault;