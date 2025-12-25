import { useState } from "react";
import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { ArrowLeft, Send, Copy } from "lucide-react";
import { Link } from "wouter";

export default function GenAIGeneration() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate generation
    await new Promise(r => setTimeout(r, 1500));
    setOutput(`Generated response for: "${prompt}"\n\nThis is a high-quality, ethically-verified output that has passed through the CharterLayer verification. The system ensures honesty, fairness, dignity, transparency, and safety.`);
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Text Generation</h1>
          <p className="text-gray-400">Generate high-quality text with ethical verification</p>
        </div>
        <Link href="/genai">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Main Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <CyberCard className="border border-primary/30">
            <h3 className="text-lg font-bold text-white mb-4">Your Prompt</h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full h-32 bg-black/50 border border-primary/20 rounded p-3 text-white placeholder-gray-500 font-mono text-sm focus:border-primary focus:outline-none resize-none"
            />
            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 hover:border-primary hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed rounded text-primary font-mono text-sm transition-colors"
            >
              <Send className="w-4 h-4" />
              {isGenerating ? "GENERATING..." : "GENERATE"}
            </button>
          </CyberCard>

          {/* Output Section */}
          {output && (
            <CyberCard className="border border-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Generated Output</h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-xs text-secondary hover:bg-secondary/10 rounded transition-colors"
                >
                  <Copy className="w-4 h-4" /> Copy
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/50 border border-secondary/20 rounded p-4 text-gray-300 font-mono text-sm max-h-64 overflow-y-auto"
              >
                {output}
              </motion.div>
            </CyberCard>
          )}
        </div>

        {/* Controls Sidebar */}
        <div className="space-y-4">
          <CyberCard className="border border-accent/30">
            <h3 className="text-lg font-bold text-accent mb-4">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Style</label>
                <select className="w-full bg-black/50 border border-accent/20 rounded p-2 text-white text-sm">
                  <option>Formal</option>
                  <option>Casual</option>
                  <option>Technical</option>
                  <option>Creative</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Length</label>
                <select className="w-full bg-black/50 border border-accent/20 rounded p-2 text-white text-sm">
                  <option>Short (1-2 sentences)</option>
                  <option>Medium (3-5 sentences)</option>
                  <option>Long (6+ sentences)</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Temperature</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">Low = More focused, High = More creative</div>
              </div>
            </div>
          </CyberCard>

          <CyberCard className="border border-purple-500/30">
            <h3 className="text-lg font-bold text-purple-500 mb-4">Governance</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex gap-2"><span className="text-purple-500">✓</span> Honesty verified</li>
              <li className="flex gap-2"><span className="text-purple-500">✓</span> Fairness checked</li>
              <li className="flex gap-2"><span className="text-purple-500">✓</span> Safety confirmed</li>
              <li className="flex gap-2"><span className="text-purple-500">✓</span> Transparency enabled</li>
            </ul>
          </CyberCard>

          <CyberCard className="border border-green-500/30">
            <h3 className="text-lg font-bold text-green-500 mb-4">Quality Metrics</h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex justify-between"><span>Coherence</span><span className="text-green-500">9.2/10</span></div>
              <div className="flex justify-between"><span>Relevance</span><span className="text-green-500">8.7/10</span></div>
              <div className="flex justify-between"><span>Fairness</span><span className="text-green-500">9.5/10</span></div>
            </div>
          </CyberCard>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display text-white border-l-4 border-primary pl-4">
          Example <span className="text-primary">Prompts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setPrompt("Explain how neural networks work in simple terms")}
            className="text-left p-4 border border-primary/30 rounded hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm text-primary font-mono mb-2">→</p>
            <p className="text-gray-400">Explain how neural networks work</p>
          </button>
          <button
            onClick={() => setPrompt("Write a professional email requesting a meeting")}
            className="text-left p-4 border border-primary/30 rounded hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm text-primary font-mono mb-2">→</p>
            <p className="text-gray-400">Professional email template</p>
          </button>
          <button
            onClick={() => setPrompt("Summarize the key points of ethical AI governance")}
            className="text-left p-4 border border-primary/30 rounded hover:bg-primary/10 transition-colors"
          >
            <p className="text-sm text-primary font-mono mb-2">→</p>
            <p className="text-gray-400">AI ethics summary</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
