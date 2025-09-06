
export interface Prompt {
  title: string;
  prompt: string;
}

export interface PromptCategory {
  category: string;
  prompts: Prompt[];
}

export type Section = 'welcome' | 'prompts' | 'vault' | 'promptCraft';

// FIX: Add Resource type for Resources.tsx component.
export interface Resource {
  title: string;
  description: string;
  link: string;
  type: 'download' | 'link';
}

// FIX: Add types for SolarPrompt.tsx component.
export interface CelestialBody {
  id: string;
  name: string;
  glowColor: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  color: string;
}

export interface AiNews {
  title: string;
  summary: string;
}

export interface SolarPromptData {
  celestialId: string;
  prompts: Prompt[];
  aiNews: AiNews[];
}
