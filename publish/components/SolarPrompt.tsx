
import React, { useState } from 'react';
import { SOLAR_SYSTEM_DATA, SOLAR_PROMPT_CONTENT } from '../constants';
import type { CelestialBody, SolarPromptData, Prompt, AiNews } from '../types';

const DataModal: React.FC<{ body: CelestialBody; data: SolarPromptData | undefined; onClose: () => void }> = ({ body, data, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="bg-gray-900/80 border-2 border-cyan-400/50 rounded-lg p-6 shadow-2xl shadow-cyan-500/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl z-10">&times;</button>
        <h2 className="text-3xl font-orbitron text-cyan-300 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]" style={{ color: body.glowColor }}>
          {body.name} Data Stream
        </h2>

        {!data ? (
          <p className="text-gray-400">No data available for this celestial body.</p>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-orbitron text-purple-400 mb-3">Cognitive Prompts</h3>
              <div className="space-y-3">
                {data.prompts.map((p, i) => (
                  <div key={i} className="bg-black/40 p-3 rounded-md border border-gray-700">
                    <h4 className="font-bold text-purple-300">{p.title}</h4>
                    <p className="text-sm text-gray-400 mt-1 font-mono">{p.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-orbitron text-teal-400 mb-3">AI News Feed</h3>
              <div className="space-y-3">
                {data.aiNews.map((n, i) => (
                  <div key={i} className="bg-black/40 p-3 rounded-md border border-gray-700">
                    <h4 className="font-bold text-teal-300">{n.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{n.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const SolarPrompt: React.FC = () => {
    const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(null);

    const handlePlanetClick = (body: CelestialBody) => {
        setSelectedBody(body);
    };

    const closeModal = () => {
        setSelectedBody(null);
    };
    
    const selectedBodyData = SOLAR_PROMPT_CONTENT.find(d => d.celestialId === selectedBody?.id);

    return (
        <div className="w-full h-full animate-fadeIn relative overflow-hidden">
             {selectedBody && <DataModal body={selectedBody} data={selectedBodyData} onClose={closeModal} />}
            <header className="text-center mb-4 absolute top-0 left-1/2 -translate-x-1/2 z-10 p-4">
                <h1 className="text-5xl font-orbitron text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
                    Solar Prompt System
                </h1>
                <p className="mt-2 text-lg text-gray-400">
                    Select a celestial body to access its data stream.
                </p>
            </header>
            
            <div className="solar-system-container">
                <div className="solar-system">
                    <div className="sun"></div>
                    {SOLAR_SYSTEM_DATA.map(planet => (
                        <div
                            key={planet.id}
                            className="orbit"
                            style={{
                                width: `${planet.orbitRadius * 2}vmin`,
                                height: `${planet.orbitRadius * 2}vmin`,
                                transform: `translate(-50%, -50%)`,
                                animationDuration: `${planet.orbitSpeed}s`,
                            }}
                        >
                            <div
                                className="planet"
                                onClick={() => handlePlanetClick(planet)}
                                style={{
                                    width: `${planet.size}vmin`,
                                    height: `${planet.size}vmin`,
                                    left: `${planet.orbitRadius}vmin`,
                                    background: planet.color,
                                    boxShadow: `0 0 15px ${planet.glowColor}`,
                                    '--planet-glow-color': planet.glowColor,
                                } as React.CSSProperties}
                            >
                                <div className="planet-label">{planet.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolarPrompt;