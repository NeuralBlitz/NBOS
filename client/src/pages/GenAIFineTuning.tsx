import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { ArrowLeft, Upload, Zap } from "lucide-react";
import { Link } from "wouter";

export default function GenAIFineTuning() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Model Fine-Tuning</h1>
          <p className="text-gray-400">Customize models for domain-specific use cases</p>
        </div>
        <Link href="/genai">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dataset Upload */}
        <CyberCard className="border border-primary/30">
          <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5" /> Prepare Dataset
          </h3>
          <div className="space-y-4">
            <div className="p-6 border-2 border-dashed border-primary/30 rounded-lg hover:border-primary/50 transition-colors cursor-pointer text-center">
              <p className="text-gray-400 text-sm">Drag and drop your training data (JSON, CSV)</p>
              <p className="text-xs text-gray-600 mt-2">or click to browse</p>
            </div>
            
            <div className="space-y-2 text-sm">
              <label className="text-gray-400 block">Training Split</label>
              <div className="flex gap-2">
                <input type="text" placeholder="80" className="flex-1 bg-black/50 border border-primary/20 rounded p-2 text-white text-xs" />
                <span className="text-gray-500 pt-2">% training</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <label className="text-gray-400 block">Validation Split</label>
              <div className="flex gap-2">
                <input type="text" placeholder="20" className="flex-1 bg-black/50 border border-primary/20 rounded p-2 text-white text-xs" />
                <span className="text-gray-500 pt-2">% validation</span>
              </div>
            </div>

            <CyberButton variant="primary" className="w-full">
              Upload & Validate
            </CyberButton>
          </div>
        </CyberCard>

        {/* Fine-Tuning Config */}
        <CyberCard className="border border-secondary/30">
          <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Tuning Configuration
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Base Model</label>
              <select className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm">
                <option>GPT-3.5-turbo (base)</option>
                <option>GPT-4 (advanced)</option>
                <option>Claude-3 (specialized)</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Learning Rate</label>
              <input type="number" placeholder="0.0001" className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm" />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Epochs</label>
              <input type="number" placeholder="3" className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm" />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Batch Size</label>
              <select className="w-full bg-black/50 border border-secondary/20 rounded p-2 text-white text-sm">
                <option>8</option>
                <option>16</option>
                <option>32</option>
                <option>64</option>
              </select>
            </div>

            <CyberButton variant="secondary" className="w-full">
              Start Fine-Tuning
            </CyberButton>
          </div>
        </CyberCard>
      </div>

      {/* Pre-trained Models */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display text-white border-l-4 border-primary pl-4">
          Available <span className="text-primary">Models</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Legal Documents", desc: "Fine-tuned for legal language", version: "v2.1" },
            { name: "Medical Text", desc: "Healthcare domain expertise", version: "v1.8" },
            { name: "Technical Docs", desc: "Software & engineering", version: "v3.0" }
          ].map((model) => (
            <CyberCard key={model.name} className="border border-primary/30">
              <h4 className="font-bold text-white mb-2">{model.name}</h4>
              <p className="text-xs text-gray-400 mb-3">{model.desc}</p>
              <div className="text-xs text-gray-500 mb-3">Version: {model.version}</div>
              <CyberButton variant="secondary" className="w-full text-xs">
                Use Model
              </CyberButton>
            </CyberCard>
          ))}
        </div>
      </div>

      {/* Process */}
      <CyberCard className="border border-accent/30">
        <h3 className="text-lg font-bold text-accent mb-4">Fine-Tuning Process</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">1.</span>
            <span className="text-gray-400">Upload your training dataset with examples of desired outputs</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">2.</span>
            <span className="text-gray-400">Configure learning parameters: learning rate, batch size, epochs</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">3.</span>
            <span className="text-gray-400">System preserves ethical principles while adapting to your domain</span>
          </div>
          <div className="flex gap-3">
            <span className="text-accent font-bold shrink-0">4.</span>
            <span className="text-gray-400">Evaluate model on validation set and deploy custom version</span>
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
}
