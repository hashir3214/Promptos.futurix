
// FIX: Import newly added types.
import type { PromptCategory, Resource, CelestialBody, SolarPromptData } from './types';

export const CORRECT_PASSWORD = 'Futurix_Promptos_Elite_9821';

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    category: 'Strategic Intelligence',
    prompts: [
      {
        title: 'Predictive Market Trajectory Analysis',
        prompt: 'Execute a comprehensive market trajectory analysis for a [disruptive technology] targeting the [specific industry]. Synthesize data on consumer adoption rates, regulatory landscapes, and competitor pivot strategies to forecast a 5-year growth and saturation model.',
      },
      {
        title: 'Corporate Counter-Intelligence Briefing',
        prompt: 'Generate a simulated counter-intelligence briefing for a CEO in the [tech sector]. Identify the top 3 most likely vectors for industrial espionage, outline psychological profiles of potential internal threats, and propose a multi-layered defense protocol using both human and technological assets.',
      },
    ],
  },
  {
    category: 'Cognitive & Creative Amplification',
    prompts: [
      {
        title: 'Cognitive Hook Matrix',
        prompt: 'Construct a matrix of 5 distinct cognitive hooks for a digital campaign centered on [luxury product]. Each hook must target a different psychological trigger (e.g., scarcity, social proof, authority) and be adaptable for ultra-short-form video content.',
      },
      {
        title: 'Conceptual Universe Blueprint',
        prompt: 'Architect the blueprint for a new fictional universe intended for a multi-platform media franchise. Detail the core cosmological laws, the primary socio-political conflict, the dominant philosophical questions, and a unique aesthetic blending [genre A] with [historical period B].',
      },
    ],
  },
  {
    category: 'Human Potential Optimization',
    prompts: [
      {
        title: 'Hyper-Learning Protocol Designer',
        prompt: 'Design a 30-day hyper-learning protocol for achieving proficiency in [complex skill, e.g., quantum computing principles]. The protocol must integrate neuro-linguistic programming, spaced repetition, and skill deconstruction techniques, culminating in a practical capstone project.',
      },
      {
        title: 'Executive Deep Work Architect',
        prompt: 'Architect a 4-hour "Deep Work" block for a C-suite executive tasked with [critical strategic decision]. The structure must optimize cognitive performance by defining pre-session rituals, focus-interval timing, strategic cognitive-load shifting, and a post-session data synthesis period.',
      },
    ],
  },
];

export const HIDDEN_VAULT_PROMPTS: PromptCategory[] = [
    {
        category: 'Elite-Tier Strategic Frameworks',
        prompts: [
            {
                title: 'Pre-Mortem Failure Simulation',
                prompt: 'Act as a board of adversarial strategists. I am about to launch [high-stakes project]. Conduct a "pre-mortem" analysis to identify the most plausible and catastrophic failure points. Provide a detailed report on the chain of events that would lead to each failure, and propose non-obvious countermeasures.',
            },
            {
                title: 'Cognitive Re-framing for High-Stakes Negotiation',
                prompt: 'Act as a master negotiator and behavioral psychologist. I am entering a high-stakes negotiation with [describe the other party and context]. Provide a script that uses advanced psychological framing techniques (e.g., loss aversion, anchor pricing, temporal distortion) to architect the negotiation space and steer the outcome in my favor.',
            },
            {
                title: 'Market Anomaly Exploitation Model',
                prompt: 'You are an AI specializing in quantitative analysis and algorithmic trading. Analyze the following real-time data stream [provide sample data or describe data source] for the [specific asset class] market. Identify three subtle, exploitable anomalies that traditional models would likely miss. For each anomaly, describe the pattern, its statistical significance, and a high-level strategy to capitalize on it with minimal risk exposure.',
            }
        ]
    },
    {
        category: 'Cognitive & Reality Augmentation',
        prompts: [
            {
                title: 'Synthetic Reality Architect',
                prompt: 'Design a high-fidelity synthetic reality environment for training special operations teams in [complex urban environment]. The simulation must include dynamic, unpredictable civilian and threat AI behaviors, realistic physics for ballistics and structural integrity, and physiological feedback loops (e.g., stress indicators) for trainees. Describe the core architecture, the AI behavior models, and the key metrics for measuring performance.',
            },
            {
                title: 'Memetic Warfare Catalyst',
                prompt: 'Act as a cultural psychoanalyst and master propagandist. Your task is to design a "memetic catalyst" to shift public opinion within [target demographic] regarding [controversial topic]. The catalyst should not be a direct statement but a cluster of interconnected ideas, symbols, and narratives that are highly shareable and emotionally resonant. Detail the core meme, its variations for different media platforms, and the psychological levers it activates.',
            }
        ]
    }
];

// FIX: Add RESOURCES constant for the Resources.tsx component.
export const RESOURCES: Resource[] = [
  {
    title: 'Prompt Engineering Guide',
    description: 'A comprehensive guide to prompt engineering techniques and best practices for advanced AI models.',
    link: '#',
    type: 'link',
  },
  {
    title: 'AI Ethics & Safety Framework',
    description: 'Download our proprietary framework for building ethical, robust, and secure AI systems.',
    link: '#',
    type: 'download',
  },
  {
    title: 'Futurix Design System v2.1',
    description: 'Access the component library, design tokens, and UX guidelines for the PromptOS interface.',
    link: '#',
    type: 'link',
  },
];

// FIX: Add SOLAR_SYSTEM_DATA constant for the SolarPrompt.tsx component.
export const SOLAR_SYSTEM_DATA: CelestialBody[] = [
    { id: 'sun', name: 'Sol', color: 'gold', glowColor: 'yellow', size: 12, orbitRadius: 0, orbitSpeed: 0 },
    { id: 'mercury', name: 'Mercury', color: '#A9A9A9', glowColor: '#E5E5E5', size: 1.5, orbitRadius: 12, orbitSpeed: 88 },
    { id: 'venus', name: 'Venus', color: '#FFA500', glowColor: '#FFC500', size: 2.5, orbitRadius: 18, orbitSpeed: 225 },
    { id: 'earth', name: 'Terra', color: '#4682B4', glowColor: '#5B92E5', size: 2.8, orbitRadius: 26, orbitSpeed: 365 },
    { id: 'mars', name: 'Mars', color: '#FF4500', glowColor: '#FF6347', size: 2, orbitRadius: 35, orbitSpeed: 687 },
    { id: 'jupiter', name: 'Jupiter', color: '#DEB887', glowColor: '#F0D8B5', size: 6, orbitRadius: 50, orbitSpeed: 4333 },
];

// FIX: Add SOLAR_PROMPT_CONTENT constant for the SolarPrompt.tsx component.
export const SOLAR_PROMPT_CONTENT: SolarPromptData[] = [
    {
        celestialId: 'earth',
        prompts: [
            { title: 'Global Climate Mitigation Model', prompt: 'Generate a 10-year strategic forecast for global climate change mitigation, focusing on carbon capture technologies and their economic impact on G7 nations.' },
            { title: 'Global Biodiversity Hotspot Analysis', prompt: 'Analyze the cascading ecological impact of deforestation in the Amazon rainforest on three critical global biodiversity hotspots.' },
        ],
        aiNews: [
            { title: 'AI Predicts Oceanic Dead Zones with 99.8% Accuracy', summary: 'A new deep learning model has demonstrated unprecedented accuracy in predicting the formation of oceanic hypoxic zones up to 18 months in advance.' },
        ]
    },
    {
        celestialId: 'mars',
        prompts: [
            { title: 'Phase 1 Terraforming Strategy', prompt: 'Outline a multi-stage terraforming strategy for Mars, detailing atmospheric composition modifications required to achieve a surface pressure of 10 kPa.' },
            { title: 'Martian Colony Resource Optimization', prompt: 'Design a closed-loop resource management AI for a subterranean Martian colony of 150 specialists, focusing on water reclamation and hydroponic food production.' },
        ],
        aiNews: [
            { title: 'First AI-Guided Rover Discovers Subsurface Brine Lake', summary: 'The "Resilience" rover, powered by an autonomous geological AI, has confirmed the presence of a significant subsurface liquid brine reservoir in the Argyre Planitia region of Mars.' },
        ]
    },
];