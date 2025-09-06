
import React, { useState, useEffect } from 'react';
import { SparklesIcon, ArrowLeftIcon, ArrowRightIcon, RefreshIcon, ClipboardIcon } from './Icons';

const principles = [
  { title: 'Role & Persona', description: 'Assign the AI a specific role (e.g., "expert marketer") to frame its knowledge and tone.' },
  { title: 'Context is King', description: 'Provide detailed background information and relevant data to ground the AI\'s response.' },
  { title: 'Define the Task', description: 'Use clear, direct verbs and specify the exact action you want the AI to perform (e.g., "summarize," "analyze," "generate").' },
  { title: 'Provide Exemplars', description: 'Include 2-3 examples of your desired output format and style (few-shot prompting) to guide the AI.' },
  { title: 'Specify Format', description: 'Explicitly state the desired output format, such as JSON, markdown table, or a numbered list.' },
  { title: 'Chain of Thought', description: 'Ask the AI to "think step-by-step" to break down complex problems and improve reasoning accuracy.' },
];

const modelData = {
  gemini: {
    name: 'Gemini',
    tagline: 'Google\'s Multimodal Powerhouse',
    tips: [
      'Leverage its native multimodality by combining text, images, and code in a single prompt.',
      'Use `responseSchema` with JSON mode for reliable, structured data output.',
      'Ideal for complex reasoning tasks and analyzing visual information.',
    ],
  },
  chatgpt: {
    name: 'ChatGPT',
    tagline: 'The Conversational Virtuoso',
    tips: [
      'Excels at creative writing, brainstorming, and maintaining conversational context.',
      'Use iterative refinement; chat with it to shape and improve its initial responses.',
      'Strongest for tasks requiring natural language generation and human-like dialogue.',
    ],
  },
  deepseek: {
    name: 'DeepSeek',
    tagline: 'The Coder\'s Specialist',
    tips: [
      'Highly optimized for code generation, explanation, and debugging across many languages.',
      'Be extremely specific with technical requirements, libraries, and language versions.',
      'Excellent for translating code, optimizing algorithms, and generating documentation.',
    ],
  },
};

type ModelKey = keyof typeof modelData;

const tutorialSteps = [
    { 
        title: 'Step 1: Assign a Persona', 
        field: 'persona',
        feedback: "Excellent. Giving the AI a persona focuses its knowledge and sets a professional tone.",
        options: ['Act as a world-class marketing strategist', 'Act as a senior software engineer specializing in AI', 'Act as a renowned science fiction author'] 
    },
    { 
        title: 'Step 2: Define the Task', 
        field: 'task',
        feedback: "Perfect. A clear, actionable task prevents ambiguity and gets you closer to the desired output.",
        options: ['develop a campaign slogan', 'write a function to analyze sentiment', 'outline a short story plot'] 
    },
    { 
        title: 'Step 3: Provide Context', 
        field: 'context',
        feedback: "Crucial. Context grounds the AI, ensuring the output is relevant and tailored to your specific needs.",
        isTextarea: true,
        placeholder: "e.g., for a new line of zero-gravity sneakers called 'Stellars'."
    },
    { 
        title: 'Step 4: Specify the Format',
        field: 'format',
        feedback: "Great choice. Explicitly defining the format saves you time on post-processing and makes the output immediately usable.",
        options: ['as a bulleted list of 5 options', 'as a JSON object with "slogan" and "targetAudience" keys', 'in a three-paragraph summary']
    }
];

const InteractiveTutorial: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({
        persona: '',
        task: '',
        context: "for a new line of zero-gravity sneakers called 'Stellars'.",
        format: ''
    });
    const [finalPrompt, setFinalPrompt] = useState('');
    const [copied, setCopied] = useState(false);

    const initialSelections = {
        persona: '', task: '', context: "for a new line of zero-gravity sneakers called 'Stellars'.", format: ''
    };

    useEffect(() => {
        const { persona, task, context, format } = selections;
        const prompt = `${persona || '[Persona]'}. Your task is to ${task || '[Task]'}. The context is: ${context || '[Context]'}. Provide the output ${format || '[Format]'}.`;
        setFinalPrompt(prompt);
    }, [selections]);
    
    const handleSelection = (field: string, value: string) => {
        setSelections(prev => ({ ...prev, [field]: value }));
    };
    
    const handleReset = () => {
        setSelections(initialSelections);
        setCurrentStep(0);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(finalPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const stepData = tutorialSteps[currentStep];

    return (
        <div className="bg-black/30 border border-purple-500/30 rounded-lg p-6 shadow-lg shadow-purple-500/10">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-orbitron text-purple-300">Interactive Prompt Builder</h3>
                <button onClick={handleReset} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <RefreshIcon /> Reset
                </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-6">
                <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Tutorial Step */}
                <div className="animate-slide-in-right" key={currentStep}>
                    <h4 className="text-lg font-semibold text-gray-200 mb-1">{stepData.title}</h4>
                    {selections[stepData.field as keyof typeof selections] && <p className="text-sm text-cyan-300 mb-4 h-10">{stepData.feedback}</p>}
                    {!selections[stepData.field as keyof typeof selections] && <p className="text-sm text-gray-500 mb-4 h-10 italic">Make a selection to see feedback.</p>}
                    
                    <div className="space-y-3">
                        {stepData.isTextarea ? (
                            <textarea 
                                value={selections.context}
                                onChange={(e) => handleSelection('context', e.target.value)}
                                placeholder={stepData.placeholder}
                                className="w-full bg-gray-800/60 border border-gray-600 rounded-md p-3 text-white focus:border-purple-500 focus:ring-purple-500/50 focus:ring-1 transition-all"
                                rows={4}
                            />
                        ) : (
                            stepData.options.map(option => {
                                const isSelected = selections[stepData.field as keyof typeof selections] === option;
                                return (
                                <button key={option} onClick={() => handleSelection(stepData.field, option)}
                                    className={`w-full text-left p-3 rounded-md border-2 transition-all duration-200 ${isSelected ? 'bg-purple-600/40 border-purple-500 text-white animate-pulse-bg' : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50'}`}>
                                    {option}
                                </button>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Right: Prompt Preview */}
                <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-700 flex flex-col">
                    <h4 className="font-semibold text-gray-300 mb-2">Prompt Preview</h4>
                    <div className="flex-grow font-mono text-sm text-gray-400 bg-black/50 p-3 rounded-md min-h-[150px]">
                        <span className="text-purple-300">{selections.persona || '[Persona]'}</span>. Your task is to <span className="text-cyan-300">{selections.task || '[Task]'}</span>. The context is: <span className="text-green-300">{selections.context || '[Context]'}</span>. Provide the output <span className="text-orange-300">{selections.format || '[Format]'}</span>.
                    </div>
                     <button onClick={handleCopy} className="mt-4 w-full flex items-center justify-center gap-2 bg-cyan-500 text-black font-bold font-orbitron py-2 rounded-md hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all">
                        <ClipboardIcon/> {copied ? 'COPIED!' : 'Copy Prompt'}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6 border-t border-gray-700/50 pt-4">
                <button onClick={() => setCurrentStep(s => s - 1)} disabled={currentStep === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-md text-white hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    <ArrowLeftIcon /> Previous
                </button>
                <button onClick={() => setCurrentStep(s => s + 1)} disabled={currentStep === tutorialSteps.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-md text-white hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    Next <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

const PrincipleCard: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
  <div
    className="bg-gray-800/50 border border-gray-700/60 p-5 rounded-lg hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 animate-card-flip-in"
    style={{ animationDelay: `${delay * 100}ms`, opacity: 0 }}
  >
    <h3 className="text-lg font-orbitron text-cyan-300 flex items-center gap-2">
      <SparklesIcon /> {title}
    </h3>
    <p className="mt-2 text-sm text-gray-400">{description}</p>
  </div>
);

const PromptCraft: React.FC = () => {
  const [activeModel, setActiveModel] = useState<ModelKey>('gemini');
  const activeModelData = modelData[activeModel];

  return (
    <div className="space-y-12 animate-fadeIn">
      <header className="animate-fadeIn animate-fadeIn-delay-1">
        <h1 className="text-5xl font-orbitron text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] shimmer-text">
          Prompt Crafting Matrix
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Architecting elite prompts for superior AI interaction.
        </p>
      </header>
      
      <section className="animate-fadeIn animate-fadeIn-delay-4">
        <InteractiveTutorial />
      </section>

      <section className="animate-fadeIn animate-fadeIn-delay-2">
        <h2 className="text-2xl font-orbitron text-purple-400 mb-6">Core Principles of Prompt Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <PrincipleCard key={p.title} title={p.title} description={p.description} delay={i} />
          ))}
        </div>
      </section>

      <section className="animate-fadeIn animate-fadeIn-delay-3">
        <h2 className="text-2xl font-orbitron text-purple-400 mb-6">AI Model Specialization</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex lg:flex-col gap-2">
            {(Object.keys(modelData) as ModelKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveModel(key)}
                className={`w-full text-left font-orbitron p-3 rounded-md transition-all duration-300 border-2 ${
                  activeModel === key
                    ? 'bg-purple-600/30 border-purple-500 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-700/50 hover:border-gray-500'
                }`}
              >
                {modelData[key].name}
              </button>
            ))}
          </div>
          <div className="flex-1 bg-black/30 border border-gray-700/50 rounded-lg p-6 relative overflow-hidden min-h-[250px]">
            {activeModelData && (
              <div className="animate-scan-in" key={activeModel}>
                <h3 className="text-2xl font-bold text-purple-300">{activeModelData.name}</h3>
                <p className="text-sm text-gray-400 italic mb-4">{activeModelData.tagline}</p>
                <ul className="space-y-3 list-disc list-inside text-gray-300">
                  {activeModelData.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-purple-900/30 via-purple-900/10 to-transparent opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromptCraft;