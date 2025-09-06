
import React from 'react';
import { RESOURCES } from '../constants';
import type { Resource } from '../types';
import { DownloadIcon, LinkIcon } from './icons/Icons';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700/60 rounded-lg p-5 flex flex-col justify-between hover:border-cyan-500/50 transition-colors duration-300">
      <div>
        <h3 className="text-lg font-bold text-cyan-300">{resource.title}</h3>
        <p className="text-sm text-gray-400 mt-2 mb-4">{resource.description}</p>
      </div>
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto self-start flex items-center gap-2 text-sm font-semibold bg-gray-700/50 text-cyan-300 px-4 py-2 rounded-md hover:bg-cyan-500/20 transition-colors"
      >
        {resource.type === 'download' ? <DownloadIcon /> : <LinkIcon />}
        <span>{resource.type === 'download' ? 'Download' : 'Access Link'}</span>
      </a>
    </div>
  );
};


const Resources: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-5xl font-orbitron text-cyan-300">Resources</h1>
        <p className="mt-2 text-lg text-gray-400">Curated materials to enhance your workflow.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((resource, index) => (
          <div key={index} className={`animate-fadeIn animate-fadeIn-delay-${index + 1}`}>
            <ResourceCard resource={resource} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;