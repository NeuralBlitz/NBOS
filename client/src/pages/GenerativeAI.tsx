import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { Zap, Brain, Settings, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function GenerativeAI() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-4 border-b border-primary/20 pb-6">
        <h1 className="text-5xl font-display font-bold text-white">
          Generative <span className="text-primary">AI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Powerful text generation, fine-tuning, and evaluation tools with built-in ethical governance
        </p>
      </div>

      {/* Core Capabilities */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Core <span className="text-primary">Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/genai/generation">
            <CyberCard className="cursor-pointer hover:bg-primary/10 transition-colors border-l-4 border-primary">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">Text Generation</h3>
                </div>
                <p className="text-gray-400">
                  Generate high-quality text with fine-grained control over tone, style, and length. All outputs verified through CharterLayer.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Multi-style generation</li>
                  <li>✓ Controllable parameters</li>
                  <li>✓ Ethical verification</li>
                  <li>✓ Real-time streaming</li>
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-primary text-sm">
                  Explore →
                </div>
              </div>
            </CyberCard>
          </Link>

          <Link href="/genai/finetuning">
            <CyberCard className="cursor-pointer hover:bg-secondary/10 transition-colors border-l-4 border-secondary">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-white">Model Fine-Tuning</h3>
                </div>
                <p className="text-gray-400">
                  Customize models for specific domains and use cases. Maintain ethical principles while adapting to your needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Custom datasets</li>
                  <li>✓ Domain adaptation</li>
                  <li>✓ Preserve ethics</li>
                  <li>✓ Version control</li>
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-secondary text-sm">
                  Explore →
                </div>
              </div>
            </CyberCard>
          </Link>

          <Link href="/genai/evaluation">
            <CyberCard className="cursor-pointer hover:bg-accent/10 transition-colors border-l-4 border-accent">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-white">Output Evaluation</h3>
                </div>
                <p className="text-gray-400">
                  Evaluate generation quality with multiple metrics: coherence, relevance, fairness, and alignment.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Multi-metric evaluation</li>
                  <li>✓ Fairness assessment</li>
                  <li>✓ Comparative analysis</li>
                  <li>✓ Benchmark scores</li>
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-accent text-sm">
                  Explore →
                </div>
              </div>
            </CyberCard>
          </Link>

          <Link href="/genai/configuration">
            <CyberCard className="cursor-pointer hover:bg-purple-500/10 transition-colors border-l-4 border-purple-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Settings className="w-8 h-8 text-purple-500" />
                  <h3 className="text-xl font-bold text-white">Model Configuration</h3>
                </div>
                <p className="text-gray-400">
                  Fine-tune generation parameters: temperature, top_k, frequency penalty, and more.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Temperature control</li>
                  <li>✓ Sampling strategies</li>
                  <li>✓ Constraint enforcement</li>
                  <li>✓ Preset templates</li>
                </ul>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-purple-500 text-sm">
                  Explore →
                </div>
              </div>
            </CyberCard>
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Key <span className="text-accent">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CyberCard className="border border-primary/30">
            <h4 className="font-bold text-primary mb-3">Ethical Generation</h4>
            <p className="text-sm text-gray-400">
              All outputs pass through CharterLayer verification. Ensures honesty, fairness, dignity, transparency, and safety.
            </p>
          </CyberCard>

          <CyberCard className="border border-secondary/30">
            <h4 className="font-bold text-secondary mb-3">Explainability</h4>
            <p className="text-sm text-gray-400">
              Understand why the model generated each token. Access causal attribution and feature importance.
            </p>
          </CyberCard>

          <CyberCard className="border border-accent/30">
            <h4 className="font-bold text-accent mb-3">Fairness Control</h4>
            <p className="text-sm text-gray-400">
              Specify fairness constraints. System automatically mitigates disparate impact across demographics.
            </p>
          </CyberCard>

          <CyberCard className="border border-purple-500/30">
            <h4 className="font-bold text-purple-500 mb-3">Real-Time Metrics</h4>
            <p className="text-sm text-gray-400">
              Monitor generation metrics in real-time: latency, throughput, compliance, error rate.
            </p>
          </CyberCard>
        </div>
      </div>

      {/* Architecture Integration */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Architecture <span className="text-primary">Integration</span>
        </h2>
        <CyberCard className="border border-primary/30 bg-black/60">
          <p className="text-gray-400 mb-4 leading-relaxed">
            GenAI systems are built on the NBOS (NeuralBlitz Operating System) foundation, ensuring all generation inherits ethical governance:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="text-primary font-bold mb-2">Input Processing</h4>
              <p className="text-gray-400">Privacy preservation, PII masking, input validation</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-secondary font-bold mb-2">Generation</h4>
              <p className="text-gray-400">DRS substrate, intent alignment, coherence maintenance</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-accent font-bold mb-2">Governance</h4>
              <p className="text-gray-400">Bias detection, fairness, explainability, content moderation</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-purple-500 font-bold mb-2">Verification</h4>
              <p className="text-gray-400">Charter verification, audit logging, compliance certification</p>
            </div>
          </div>
        </CyberCard>
      </div>

      {/* Getting Started */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Getting <span className="text-accent">Started</span>
        </h2>
        <CyberCard className="border border-accent/30">
          <ol className="space-y-4 text-gray-400">
            <li className="flex gap-4">
              <span className="text-accent font-bold shrink-0">1.</span>
              <span>Visit Text Generation to create your first prompt and generate outputs</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold shrink-0">2.</span>
              <span>Review Model Configuration to understand generation parameters and constraints</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold shrink-0">3.</span>
              <span>Evaluate Outputs to assess quality, fairness, and alignment metrics</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold shrink-0">4.</span>
              <span>Fine-tune Models for domain-specific use cases and custom behaviors</span>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-bold shrink-0">5.</span>
              <span>Monitor Real-time metrics to track system performance and compliance</span>
            </li>
          </ol>
        </CyberCard>
      </div>
    </motion.div>
  );
}
