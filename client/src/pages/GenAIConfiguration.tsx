import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { ArrowLeft, Settings } from "lucide-react";
import { Link } from "wouter";

export default function GenAIConfiguration() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Model Configuration</h1>
          <p className="text-gray-400">Fine-tune generation parameters for optimal outputs</p>
        </div>
        <Link href="/genai">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Main Config Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sampling Parameters */}
        <CyberCard className="border border-primary/30">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" /> Sampling Parameters
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Temperature</span>
                <span className="text-primary font-mono">0.70</span>
              </label>
              <input type="range" min="0" max="200" defaultValue="70" className="w-full" />
              <p className="text-xs text-gray-600 mt-2">Lower = deterministic, Higher = creative</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Top-P (nucleus sampling)</span>
                <span className="text-primary font-mono">0.95</span>
              </label>
              <input type="range" min="0" max="100" defaultValue="95" className="w-full" />
              <p className="text-xs text-gray-600 mt-2">Cumulative probability threshold for token selection</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Top-K</span>
                <span className="text-primary font-mono">50</span>
              </label>
              <input type="range" min="1" max="100" defaultValue="50" className="w-full" />
              <p className="text-xs text-gray-600 mt-2">Number of highest-probability tokens to keep</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Max Tokens</span>
                <span className="text-primary font-mono">256</span>
              </label>
              <input type="number" placeholder="256" className="w-full bg-black/50 border border-primary/20 rounded p-2 text-white text-sm" />
            </div>
          </div>
        </CyberCard>

        {/* Penalties & Constraints */}
        <CyberCard className="border border-secondary/30">
          <h3 className="text-lg font-bold text-secondary mb-4">Penalties & Constraints</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Frequency Penalty</span>
                <span className="text-secondary font-mono">0.0</span>
              </label>
              <input type="range" min="0" max="200" defaultValue="0" className="w-full" />
              <p className="text-xs text-gray-600 mt-2">Reduce repetition of tokens</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block flex justify-between">
                <span>Presence Penalty</span>
                <span className="text-secondary font-mono">0.0</span>
              </label>
              <input type="range" min="0" max="200" defaultValue="0" className="w-full" />
              <p className="text-xs text-gray-600 mt-2">Encourage diversity of tokens</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Forbidden Tokens</label>
              <input type="text" placeholder="Enter tokens to block..." className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm" />
              <p className="text-xs text-gray-600 mt-2">Comma-separated list of tokens to never generate</p>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Required Tokens</label>
              <input type="text" placeholder="Enter tokens to include..." className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm" />
            </div>
          </div>
        </CyberCard>
      </div>

      {/* Preset Configurations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display text-white border-l-4 border-primary pl-4">
          Preset <span className="text-primary">Configurations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: "Balanced",
              desc: "Good mix of coherence and creativity",
              temp: "0.70",
              topP: "0.95",
              icon: "⚖️"
            },
            {
              name: "Focused",
              desc: "Deterministic, repetitive outputs",
              temp: "0.30",
              topP: "0.80",
              icon: "🎯"
            },
            {
              name: "Creative",
              desc: "Diverse, novel outputs",
              temp: "1.20",
              topP: "0.98",
              icon: "✨"
            }
          ].map((preset) => (
            <CyberCard key={preset.name} className="border border-primary/30 cursor-pointer hover:bg-primary/10 transition-colors">
              <div className="text-3xl mb-3">{preset.icon}</div>
              <h4 className="font-bold text-white mb-2">{preset.name}</h4>
              <p className="text-xs text-gray-400 mb-4">{preset.desc}</p>
              <div className="space-y-1 text-xs text-gray-600 mb-4 font-mono">
                <div>Temperature: {preset.temp}</div>
                <div>Top-P: {preset.topP}</div>
              </div>
              <CyberButton variant="secondary" className="w-full text-xs">
                Apply
              </CyberButton>
            </CyberCard>
          ))}
        </div>
      </div>

      {/* Advanced Settings */}
      <CyberCard className="border border-accent/30">
        <h3 className="text-lg font-bold text-accent mb-4">Advanced Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-3 p-3 bg-black/30 border border-accent/20 rounded">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent" />
            <label className="text-gray-400 cursor-pointer">Enable Streaming Output</label>
          </div>

          <div className="flex items-center gap-3 p-3 bg-black/30 border border-accent/20 rounded">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent" />
            <label className="text-gray-400 cursor-pointer">Log Token Probabilities</label>
          </div>

          <div className="flex items-center gap-3 p-3 bg-black/30 border border-accent/20 rounded">
            <input type="checkbox" className="w-4 h-4 accent-accent" />
            <label className="text-gray-400 cursor-pointer">Use Beam Search (slower)</label>
          </div>

          <div className="flex items-center gap-3 p-3 bg-black/30 border border-accent/20 rounded">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent" />
            <label className="text-gray-400 cursor-pointer">Charter Verification (required)</label>
          </div>
        </div>
      </CyberCard>

      {/* Safety Configuration */}
      <CyberCard className="border border-destructive/30">
        <h3 className="text-lg font-bold text-destructive mb-4">Safety Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Safety Filter Strength</label>
            <select className="w-full bg-black/50 border border-destructive/20 rounded p-2 text-white text-sm">
              <option>Minimal</option>
              <option>Balanced</option>
              <option selected>Strict</option>
              <option>Maximum</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-2 block">Harmful Content Categories to Block</label>
            <div className="space-y-2">
              {["Violence", "Hate Speech", "Sexual Content", "Illegal Activity"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm text-gray-400">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-destructive" />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <CyberButton variant="primary" className="w-full">
            Save Configuration
          </CyberButton>
        </div>
      </CyberCard>
    </motion.div>
  );
}
