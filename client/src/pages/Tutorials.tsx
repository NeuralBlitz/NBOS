import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { Book, Play, CheckCircle, ArrowRight } from "lucide-react";

export default function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});

  const tutorials = [
    {
      id: "equations-101",
      title: "Equations 101",
      description: "Master the Omega Prime Codex equation system",
      duration: "5 min",
      difficulty: "Beginner",
      steps: [
        {
          title: "Navigate to Equations",
          description: "Click 'Equations' in the sidebar to view all available equations.",
          action: "View the main equations page"
        },
        {
          title: "Explore Categories",
          description: "Equations are organized by category (Consciousness, Ethics, Fairness, etc.). Use filters to narrow down.",
          action: "Try filtering by 'Consciousness' category"
        },
        {
          title: "Read Equation Details",
          description: "Click on any equation to view the LaTeX rendering, concept, and deconstruction.",
          action: "Click on any equation card"
        },
        {
          title: "Share & Print",
          description: "Use the share button (clipboard copy or native share) and print button to export equations.",
          action: "Try sharing an equation"
        }
      ]
    },
    {
      id: "nbos-overview",
      title: "NBOS Essentials",
      description: "Understand NeuralBlitz Operating System architecture",
      duration: "8 min",
      difficulty: "Intermediate",
      steps: [
        {
          title: "Visit NBOS Section",
          description: "Navigate to the NBOS section to see the core pillars of ethical AI governance.",
          action: "Go to NBOS overview"
        },
        {
          title: "Explore Core Components",
          description: "Click on component cards (Synergy Engine, CharterLayer, DRS v7.0, Governance) to dive deeper.",
          action: "Click on Synergy Engine details"
        },
        {
          title: "Read Architecture",
          description: "Visit the Architecture documentation to understand the layered system design.",
          action: "Check out System Architecture"
        },
        {
          title: "Learn Governance",
          description: "Understand the five inviolable principles and governance modules.",
          action: "Explore Governance Framework"
        },
        {
          title: "Study Implementation",
          description: "Review code patterns, data structures, and integration examples.",
          action: "Check Implementation Guide"
        }
      ]
    },
    {
      id: "dashboard-customization",
      title: "Dashboard Customization",
      description: "Personalize your workspace with custom widgets",
      duration: "3 min",
      difficulty: "Beginner",
      steps: [
        {
          title: "Open Settings",
          description: "Click the settings icon in the dashboard header to open customization panel.",
          action: "Access dashboard settings"
        },
        {
          title: "Toggle Widgets",
          description: "Enable/disable specific stat cards, processes, and monitoring panels.",
          action: "Toggle some widgets"
        },
        {
          title: "Rearrange Layout",
          description: "Drag and drop widget cards to rearrange your dashboard layout.",
          action: "Rearrange some widgets"
        },
        {
          title: "Save Preferences",
          description: "Your customization is automatically saved and persists across sessions.",
          action: "Preferences saved!"
        }
      ]
    },
    {
      id: "simulation-guide",
      title: "Run Cosmic Genesis Simulation",
      description: "Execute and visualize the genesis protocol",
      duration: "4 min",
      difficulty: "Intermediate",
      steps: [
        {
          title: "Navigate to Simulation",
          description: "From the dashboard, click 'INITIATE SEQUENCE' or use the sidebar.",
          action: "Go to Simulation page"
        },
        {
          title: "Start Simulation",
          description: "Click the 'INITIATE' button to begin the cosmic genesis protocol computation.",
          action: "Click INITIATE button"
        },
        {
          title: "Watch Visualization",
          description: "Observe the animated visualizer and real-time system logs streaming.",
          action: "Watch the simulation run"
        },
        {
          title: "Analyze Results",
          description: "Once complete, review the metrics and logs for protocol success.",
          action: "Simulation complete!"
        }
      ]
    },
    {
      id: "gen-ai-intro",
      title: "Generative AI Capabilities",
      description: "Explore AI generation, fine-tuning, and evaluation",
      duration: "6 min",
      difficulty: "Intermediate",
      steps: [
        {
          title: "Visit GenAI Section",
          description: "Navigate to the new Generative AI section in the main navigation.",
          action: "Go to GenAI"
        },
        {
          title: "Text Generation",
          description: "Learn how to prompt the system and generate high-quality outputs.",
          action: "Try text generation"
        },
        {
          title: "Model Fine-Tuning",
          description: "Understand how to customize models for specific use cases.",
          action: "Explore fine-tuning"
        },
        {
          title: "Evaluate Outputs",
          description: "Use built-in evaluation metrics to assess generation quality.",
          action: "Check evaluation tools"
        }
      ]
    }
  ];

  const toggleStep = (tutorialId, stepIndex) => {
    const key = `${tutorialId}-${stepIndex}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="border-b border-primary/20 pb-6">
        <h1 className="text-4xl font-display font-bold text-white mb-2 flex items-center gap-3">
          <Book className="w-10 h-10 text-primary" /> Interactive Tutorials
        </h1>
        <p className="text-gray-400">Learn to master Omega Prime Codex & NBOS in guided, step-by-step lessons</p>
      </div>

      {/* Tutorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <motion.div 
            key={tutorial.id}
            layoutId={tutorial.id}
            onClick={() => setSelectedTutorial(tutorial.id)}
            className="cursor-pointer"
          >
            <CyberCard className="h-full hover:bg-primary/10 transition-colors border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{tutorial.description}</p>
                  </div>
                  <Play className="w-5 h-5 text-primary shrink-0 mt-1" />
                </div>
                <div className="flex gap-3 items-center text-xs text-gray-500">
                  <span className="px-2 py-1 bg-primary/10 rounded border border-primary/30 text-primary">
                    {tutorial.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 rounded border border-secondary/30 text-secondary">
                    {tutorial.duration}
                  </span>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-primary text-sm">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </CyberCard>
          </motion.div>
        ))}
      </div>

      {/* Tutorial Modal */}
      <AnimatePresence>
        {selectedTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTutorial(null)}
          >
            <motion.div
              layoutId={selectedTutorial}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-primary/30 rounded-lg p-8"
            >
              {tutorials.map(tutorial => (
                selectedTutorial === tutorial.id && (
                  <div key={tutorial.id} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-primary/20 pb-6">
                      <div>
                        <h2 className="text-3xl font-display font-bold text-white mb-2">{tutorial.title}</h2>
                        <p className="text-gray-400">{tutorial.description}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedTutorial(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Steps */}
                    <div className="space-y-4">
                      {tutorial.steps.map((step, idx) => {
                        const isCompleted = completedSteps[`${tutorial.id}-${idx}`];
                        return (
                          <div
                            key={idx}
                            className="p-4 border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
                          >
                            <div className="flex gap-4">
                              <button
                                onClick={() => toggleStep(tutorial.id, idx)}
                                className={`shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                                  isCompleted 
                                    ? 'bg-primary border-primary' 
                                    : 'border-primary/50 hover:border-primary'
                                }`}
                              >
                                {isCompleted && <CheckCircle className="w-5 h-5 text-black" />}
                              </button>
                              <div className="flex-1">
                                <h4 className={`font-bold mb-2 ${isCompleted ? 'text-gray-500 line-through' : 'text-white'}`}>
                                  Step {idx + 1}: {step.title}
                                </h4>
                                <p className="text-sm text-gray-400 mb-3">{step.description}</p>
                                <div className="text-xs text-primary/60 font-mono bg-black/50 p-2 rounded border border-primary/20">
                                  {step.action}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-primary/20 pt-6">
                      <CyberButton 
                        variant="primary"
                        onClick={() => setSelectedTutorial(null)}
                        className="w-full"
                      >
                        Close Tutorial
                      </CyberButton>
                    </div>
                  </div>
                )
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
