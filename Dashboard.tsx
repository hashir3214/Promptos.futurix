
import React, { useState } from 'react';
import type { Section } from './types';
import WelcomeHub from './WelcomeHub';
import PromptLibraries from './PromptLibraries';
import HiddenVault from './HiddenVault';
import PromptCraft from './PromptCraft';
import PasswordGate from './PasswordGate';
import { CORRECT_PASSWORD } from './constants';
import { HomeIcon, BookOpenIcon, LockClosedIcon, ChevronLeftIcon, SparklesIcon } from './Icons';

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center w-full px-4 py-3 text-sm transition-all duration-300 ease-in-out group ${
      isActive
        ? 'bg-cyan-400/10 text-cyan-300'
        : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
    }`}
  >
    {isActive && <div className="absolute left-0 w-1 h-full bg-cyan-400 rounded-r-full shadow-[0_0_8px] shadow-cyan-400"></div>}
    <span className={`transition-transform duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'}`}>
      {icon}
    </span>
    <span className="ml-4 font-medium tracking-wider">{label}</span>
  </button>
);

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('welcome');
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleVaultAccess = () => {
    setIsVaultUnlocked(true);
    setIsVaultModalOpen(false);
    setActiveSection('vault');
  };

  const renderContent = () => {
    if (activeSection === 'vault' && !isVaultUnlocked) {
      // This case should not happen if logic is correct, but as a fallback
      return <WelcomeHub />;
    }
    switch (activeSection) {
      case 'welcome':
        return <WelcomeHub />;
      case 'prompts':
        return <PromptLibraries />;
      case 'vault':
        return <HiddenVault />;
      case 'promptCraft':
        return <PromptCraft />;
      default:
        return <WelcomeHub />;
    }
  };

  const navItems = [
    { id: 'welcome', label: 'Welcome Hub', icon: <HomeIcon /> },
    { id: 'prompts', label: 'Prompt Arsenal', icon: <BookOpenIcon /> },
    { id: 'promptCraft', label: 'Prompt Craft', icon: <SparklesIcon /> },
    { id: 'vault', label: 'Hidden Vault', icon: <LockClosedIcon /> },
  ];

  return (
    <div className="flex h-screen bg-black/30 backdrop-blur-xl animate-fadeIn">
      {isVaultModalOpen && (
        <PasswordGate
          onUnlock={handleVaultAccess}
          onClose={() => setIsVaultModalOpen(false)}
          correctPassword={CORRECT_PASSWORD}
          title="Vault Security Protocol"
          subtitle="Confirm Identity to Access Elite Tier"
        />
      )}
      
      {/* Sidebar Navigation */}
      <nav className={`flex flex-col bg-gray-900/50 border-r border-gray-700/50 transition-all duration-300 ease-in-out ${isNavCollapsed ? 'w-20' : 'w-64'}`}>
        <div className={`flex items-center justify-between p-5 border-b border-gray-700/50 ${isNavCollapsed ? 'px-0 justify-center' : ''}`}>
           {!isNavCollapsed && <h1 className="text-xl font-orbitron text-cyan-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.4)] shimmer-text">PromptOS</h1>}
           <button onClick={() => setIsNavCollapsed(!isNavCollapsed)} className="p-2 rounded-full hover:bg-gray-700/50">
                <ChevronLeftIcon className={`transition-transform duration-300 ${isNavCollapsed ? 'rotate-180' : ''}`} />
            </button>
        </div>
        <div className="flex-grow py-4">
          {navItems.map(item => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={isNavCollapsed ? '' : item.label}
              isActive={activeSection === item.id}
              onClick={() => {
                if (item.id === 'vault') {
                  if (isVaultUnlocked) {
                    setActiveSection('vault');
                  } else {
                    setIsVaultModalOpen(true);
                  }
                } else {
                  setActiveSection(item.id as Section);
                }
              }}
            />
          ))}
        </div>
        <div className="p-4 border-t border-gray-700/50">
          {!isNavCollapsed && <p className="text-xs text-center text-gray-500">Futurix Elite Access v1.0</p>}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 md:p-12">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;