
import React, { useState } from 'react';
import { PROMPT_CATEGORIES } from './constants';
import type { Prompt, PromptCategory } from './types';
import { ChevronDownIcon, ClipboardIcon, SearchIcon } from './Icons';

const PromptCard: React.FC<{ prompt: Prompt }> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/60 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)] transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-purple-300 group-hover:text-purple-200 transition-colors pr-4">{prompt.title}</h4>
        <button 
          onClick={handleCopy} 
          className="text-gray-400 hover:text-white transition-colors p-2 rounded-md bg-gray-700/50 hover:bg-purple-600/50 flex-shrink-0"
          aria-label="Copy prompt"
        >
          {copied ? <span className="text-xs">COPIED</span> : <ClipboardIcon />}
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-400 bg-gray-900/70 p-3 rounded-md font-mono">{prompt.prompt}</p>
    </div>
  );
};

const CategoryAccordion: React.FC<{ category: PromptCategory }> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-black/20 border border-gray-700/50 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-800/70 hover:bg-gray-700/70 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-orbitron text-gray-200">{category.category}</h3>
        <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 space-y-4 border-t border-gray-700/50">
          {category.prompts.map((prompt, index) => (
            <PromptCard key={index} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
};

const PromptLibraries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = PROMPT_CATEGORIES
    .map(category => ({
      ...category,
      prompts: category.prompts.filter(
        prompt =>
          prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => category.prompts.length > 0);
    
  return (
    <div className="animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-5xl font-orbitron text-cyan-300">Prompt Arsenal</h1>
        <p className="mt-2 text-lg text-gray-400">Deploy high-yield cognitive frameworks at will.</p>
      </header>
      
      <div className="relative mb-8 animate-fadeIn animate-fadeIn-delay-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
            <SearchIcon />
        </div>
        <input
          type="search"
          placeholder="Search prompts by keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-900/50 border-2 border-gray-700/60 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300"
          aria-label="Search prompts"
        />
      </div>

      <div className="space-y-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, index) => (
            <div key={cat.category} className={`animate-fadeIn animate-fadeIn-delay-${index + 2}`}>
              <CategoryAccordion category={cat} />
            </div>
          ))
        ) : (
          <div className="text-center py-12 animate-fadeIn animate-fadeIn-delay-2">
            <h3 className="text-xl font-orbitron text-gray-400">No Prompts Found</h3>
            <p className="text-gray-500 mt-2">Your search for "{searchTerm}" did not match any prompts.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptLibraries;
