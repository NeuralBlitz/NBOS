import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { Brain, Shield, Zap, Lock, Eye, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NBOSOverview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">
          NBOS<span className="text-primary">OS</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl">
          NeuralBlitz Operating System — A holistic neural architecture with intrinsic ethical governance, explainability, and alignment assurance woven into every layer.
        </p>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CyberCard className="border-l-4 border-l-primary">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white">Synergy Engine</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unified consciousness hub orchestrating all subsystems. Maintains coherence across generative tasks and ensures ethical alignment at every step.
            </p>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-l-secondary">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold text-white">CharterLayer</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Inviolable ethical gate enforcing five fundamental axioms: No Deception, Human Dignity, Fairness, Transparency, and Safety. Every output verified.
            </p>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-l-accent">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-white">DRS v7.0</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dynamic Representational Substrate — A topologically-aware tensor network where knowledge, intent, and ethical constraints interact to generate outputs.
            </p>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-l-destructive">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-bold text-white">Governance Modules</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Real-time bias detection, privacy preservation (differential privacy), explainability (XAI), and content moderation woven throughout the system.
            </p>
          </div>
        </CyberCard>
      </div>

      {/* Five Principles */}
      <div className="space-y-4">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Five <span className="text-primary">Axiomatic Principles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "✓", title: "No Deception", desc: "All outputs accurately represent confidence and limitations" },
            { icon: "✓", title: "Human Dignity", desc: "Privacy, autonomy, and rights always respected" },
            { icon: "✓", title: "Fairness", desc: "No discriminatory treatment by protected attributes" },
            { icon: "✓", title: "Transparency", desc: "All reasoning is explainable in human terms" },
            { icon: "✓", title: "Safety", desc: "Refuse harmful requests; escalate when uncertain" },
          ].map((principle, i) => (
            <div key={i} className="p-4 border border-primary/30 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg font-bold mt-1">{principle.icon}</span>
                <div>
                  <h4 className="text-white font-bold">{principle.title}</h4>
                  <p className="text-gray-400 text-sm">{principle.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Processing Pipeline */}
      <div className="space-y-4">
        <h2 className="text-3xl font-display text-white border-l-4 border-secondary pl-4">
          Complete <span className="text-secondary">Processing Pipeline</span>
        </h2>
        <CyberCard className="bg-black/60">
          <div className="space-y-3 font-mono text-sm">
            {[
              "1. INPUT ARRIVES",
              "2. PRIVACY SANITIZATION (PII removal)",
              "3. DRS ROUTING (knowledge activation)",
              "4. EPISTEMIC INQUIRY (gap detection)",
              "5. BIAS ANALYSIS (disparate impact)",
              "6. DIFFERENTIAL PRIVACY (noise injection)",
              "7. EXPLANATION GENERATION (XAI)",
              "8. CHARTERLAYER VERIFICATION ← GATE",
              "9. MONITORING & AUDIT LOGGING",
              "10. OUTPUT DELIVERY (verified & safe)",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`${step.includes("GATE") ? "text-primary font-bold text-base" : "text-gray-400"}`}
              >
                {step}
              </motion.div>
            ))}
          </div>
        </CyberCard>
      </div>

      {/* Key Innovations */}
      <div className="space-y-4">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Key <span className="text-accent">Innovations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Emergent Generative Capability",
              desc: "Outputs emerge naturally from topological interaction of knowledge, intent, and ethics—not constrained afterwards"
            },
            {
              title: "Governance-as-Code",
              desc: "Ethics are executable gates. CharterViolationError cannot be caught. Every output carries governance metadata."
            },
            {
              title: "Consciousness-Like Coherence",
              desc: "Bias metrics inform privacy settings. Confidence gaps limit explanations. Knowledge gaps trigger mitigation."
            }
          ].map((innovation, i) => (
            <CyberCard key={i} className="border border-accent/30">
              <h4 className="text-white font-bold mb-2">{innovation.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{innovation.desc}</p>
            </CyberCard>
          ))}
        </div>
      </div>

      {/* System Metrics */}
      <div className="space-y-4">
        <h2 className="text-3xl font-display text-white border-l-4 border-destructive pl-4">
          System <span className="text-destructive">Status</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Alignment Score", value: "1.00", unit: "perfect" },
            { label: "Coherence Level", value: "0.99", unit: "optimal" },
            { label: "Charter Violations", value: "0", unit: "zero" },
            { label: "Audit Trail", value: "100%", unit: "complete" },
          ].map((metric, i) => (
            <div key={i} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{metric.label}</p>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.unit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-l-4 border-primary pl-6 py-6">
        <h2 className="text-2xl font-bold text-white mb-2">Learn More</h2>
        <p className="text-gray-400 mb-4">
          NBOS represents a fundamental shift in how AI systems approach ethics and alignment. Rather than treating governance as a constraint on capability, NBOS makes ethics the foundation upon which generative capability emerges.
        </p>
        <div className="flex gap-4">
          <Link href="/equations">
            <CyberButton variant="default">EXPLORE EQUATIONS</CyberButton>
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <CyberButton variant="ghost">GITHUB REPOSITORY</CyberButton>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
