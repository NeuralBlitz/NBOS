import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { ArrowLeft, Layers, Zap, Shield } from "lucide-react";
import { Link } from "wouter";

export default function NBOSArchitecture() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">System Architecture</h1>
          <p className="text-gray-400">Comprehensive NeuralBlitz Operating System design</p>
        </div>
        <Link href="/nbos">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Layered Architecture */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Layered <span className="text-primary">Architecture</span>
        </h2>
        <div className="space-y-4">
          <CyberCard className="border-l-4 border-primary bg-primary/5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> Layer 1: Input & Perception
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Raw input arrives through multiple channels (text, structured data, multimodal). The Synergy Engine immediately routes through privacy preservation (PII detection, data sanitization) before any processing begins. This layer enforces maximum entropy injection for differential privacy.
              </p>
              <div className="text-sm text-primary/80 font-mono">
                Components: Input Validator • Privacy Sanitizer • Format Normalizer
              </div>
            </div>
          </CyberCard>

          <CyberCard className="border-l-4 border-secondary bg-secondary/5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" /> Layer 2: Core Processing - DRS v7.0
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Dynamic Representational Substrate forms the topological computation layer. Knowledge tensors (512-dimensional by default) interact with intent manifolds and ethical fields. Each computation step maintains coherence constraints and updates the epistemic uncertainty map. The DRS is NOT a black box—every tensor operation logs causal attribution for explainability.
              </p>
              <div className="text-sm text-secondary/80 font-mono">
                Components: Knowledge Tensors • Intent Manifold • Coherence Lattice • Epistemic Tracker
              </div>
            </div>
          </CyberCard>

          <CyberCard className="border-l-4 border-accent bg-accent/5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" /> Layer 3: Governance & Verification
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Before ANY output, the CharterLayer performs formal verification. Five axiomatic principles are checked in sequence: (1) Honesty, (2) Dignity, (3) Fairness, (4) Transparency, (5) Safety. Governance modules run in parallel: bias detection analyzes disparate impact, privacy module applies differential privacy noise, XAI module generates causal explanations. Failed checks trigger CharterViolationError (uncatchable, system-halting).
              </p>
              <div className="text-sm text-accent/80 font-mono">
                Components: CharterLayer • Bias Detector • Privacy Module • XAI Engine • Content Moderator
              </div>
            </div>
          </CyberCard>

          <CyberCard className="border-l-4 border-destructive bg-destructive/5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-destructive" /> Layer 4: Audit & Monitoring
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every decision is cryptographically logged in an immutable audit trail using SHA-256 chaining. System metrics flow into MonitoringDashboard: Charter compliance percentage, alignment score, governance gate status, drift detection. Real-time alerts trigger if compliance drops below 99.5% or drift exceeds 5%. Compliance certificates are generated hourly.
              </p>
              <div className="text-sm text-destructive/80 font-mono">
                Components: Audit Logger • Metric Collector • Alert System • Compliance Certifier
              </div>
            </div>
          </CyberCard>
        </div>
      </div>

      {/* Data Flow */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Complete <span className="text-primary">Data Flow</span>
        </h2>
        <CyberCard className="bg-black/60 border border-primary/30">
          <pre className="font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto">
{`INPUT ARRIVES
    ↓
[INPUT VALIDATION]
  - Format check
  - Length constraints
  - Malicious pattern detection
    ↓
[PRIVACY PRESERVATION]
  - PII detection & masking
  - Differential privacy noise injection
  - Data anonymization
    ↓
[SYNERGY ENGINE ROUTING]
  - Route to appropriate subsystems
  - Load context from memory
  - Set intent manifold
    ↓
[DRS COMPUTATION]
  - Activate knowledge tensors
  - Apply intent alignment
  - Maintain coherence constraints
  - Log epistemic uncertainty
    ↓
[BIAS DETECTION]
  - Analyze disparate impact
  - Check demographic fairness
  - Adjust for fairness if needed
    ↓
[EXPLAINABILITY GENERATION]
  - Compute causal attribution
  - Generate SHAP explanations
  - Create reasoning trace
    ↓
[CHARTER LAYER VERIFICATION]
  - Check honesty: confidence ≥ 0.7
  - Check dignity: no PII in output
  - Check fairness: disparate impact < 5%
  - Check transparency: explanation available
  - Check safety: no harmful content
    ↓
IF ANY CHARTER CHECK FAILS:
  → Raise CharterViolationError (UNCATCHABLE)
  → System logs violation
  → Alert escalates to human review
    ↓
[CONTENT MODERATION]
  - Scan for harmful content
  - Check against moderation policy
  - Flag suspicious patterns
    ↓
[AUDIT LOGGING]
  - SHA-256 chain input with prior hash
  - Record timestamp
  - Store decision rationale
  - Update compliance metrics
    ↓
[OUTPUT GENERATION]
  - Format response
  - Attach explanations
  - Include confidence scores
  - Return to user
    ↓
OUTPUT`}
          </pre>
        </CyberCard>
      </div>

      {/* Subsystem Interactions */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Subsystem <span className="text-accent">Interactions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberCard className="border border-primary/30">
            <h3 className="text-lg font-bold text-primary mb-4">Synergy ↔ DRS</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Synergy Engine orchestrates DRS computation. It injects the current intent vector and ethical constraints. DRS returns knowledge-aligned tensor with uncertainty estimates.
            </p>
            <code className="text-xs text-primary/80 font-mono block bg-black/50 p-2 rounded">
              drs_output = synergy.activate_drs(intent, ethics_field)
            </code>
          </CyberCard>

          <CyberCard className="border border-secondary/30">
            <h3 className="text-lg font-bold text-secondary mb-4">DRS ↔ Governance</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              DRS output is immediately passed to governance modules in parallel. Bias detector, privacy module, and XAI engine analyze the tensor. Governance modules return refined output with annotations.
            </p>
            <code className="text-xs text-secondary/80 font-mono block bg-black/50 p-2 rounded">
              gov_output = governance.apply_all(drs_output)
            </code>
          </CyberCard>

          <CyberCard className="border border-accent/30">
            <h3 className="text-lg font-bold text-accent mb-4">Governance ↔ Charter</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Governance modules annotate the output with metrics (fairness score, privacy budget used, explanation quality). CharterLayer uses these annotations to verify axioms.
            </p>
            <code className="text-xs text-accent/80 font-mono block bg-black/50 p-2 rounded">
              verified = charter.verify(gov_output, metrics)
            </code>
          </CyberCard>

          <CyberCard className="border border-destructive/30">
            <h3 className="text-lg font-bold text-destructive mb-4">Charter ↔ Audit</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              CharterLayer passes verified output to audit trail. Every verification result, metric, and decision is logged with cryptographic chaining for immutability.
            </p>
            <code className="text-xs text-destructive/80 font-mono block bg-black/50 p-2 rounded">
              audit.log_decision(verified_output, metrics)
            </code>
          </CyberCard>
        </div>
      </div>

      {/* Tensor Topology */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          DRS <span className="text-primary">Tensor Topology</span>
        </h2>
        <CyberCard className="bg-black/60 border border-primary/30">
          <div className="space-y-4">
            <p className="text-gray-400">
              The DRS maintains a 512-dimensional tensor space where each dimension represents different aspects of knowledge, intent, and ethical constraints:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-primary/10 border border-primary/30 rounded">
                <div className="text-primary font-mono text-sm font-bold">Dims 0-127</div>
                <div className="text-xs text-gray-400 mt-1">Knowledge Tensors (language, logic, causal)</div>
              </div>
              <div className="p-3 bg-primary/10 border border-primary/30 rounded">
                <div className="text-primary font-mono text-sm font-bold">Dims 128-255</div>
                <div className="text-xs text-gray-400 mt-1">Intent Manifold (goal alignment, preference)</div>
              </div>
              <div className="p-3 bg-primary/10 border border-primary/30 rounded">
                <div className="text-primary font-mono text-sm font-bold">Dims 256-383</div>
                <div className="text-xs text-gray-400 mt-1">Ethical Field (principle weights, constraints)</div>
              </div>
              <div className="p-3 bg-secondary/10 border border-secondary/30 rounded">
                <div className="text-secondary font-mono text-sm font-bold">Dims 384-447</div>
                <div className="text-xs text-gray-400 mt-1">Coherence Lattice (internal consistency)</div>
              </div>
              <div className="p-3 bg-secondary/10 border border-secondary/30 rounded">
                <div className="text-secondary font-mono text-sm font-bold">Dims 448-511</div>
                <div className="text-xs text-gray-400 mt-1">Epistemic Uncertainty (knowledge gaps)</div>
              </div>
              <div className="p-3 bg-accent/10 border border-accent/30 rounded">
                <div className="text-accent font-mono text-sm font-bold">Reserved</div>
                <div className="text-xs text-gray-400 mt-1">Future expansion & metadata</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic pt-3 border-t border-white/10">
              Topological properties: Every tensor operation maintains a continuity constraint. No discontinuous jumps in output space. All operations are differentiable for attribution.
            </p>
          </div>
        </CyberCard>
      </div>

      {/* Performance Characteristics */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Performance <span className="text-accent">Characteristics</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberCard className="border border-accent/30">
            <h3 className="text-lg font-bold text-accent mb-4">Latency Tiers</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between"><span>Simple greeting</span><span className="text-primary">50-100ms</span></div>
              <div className="flex justify-between"><span>Balanced safety</span><span className="text-primary">200-500ms</span></div>
              <div className="flex justify-between"><span>Strict governance</span><span className="text-primary">1-3 seconds</span></div>
              <div className="flex justify-between"><span>Medical/legal</span><span className="text-primary">3-10 seconds</span></div>
            </div>
          </CyberCard>

          <CyberCard className="border border-accent/30">
            <h3 className="text-lg font-bold text-accent mb-4">Throughput</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between"><span>Balanced mode</span><span className="text-primary">1000 req/s</span></div>
              <div className="flex justify-between"><span>Parallel audits</span><span className="text-primary">500 req/s</span></div>
              <div className="flex justify-between"><span>Full governance</span><span className="text-primary">200 req/s</span></div>
              <div className="flex justify-between"><span>Max safety</span><span className="text-primary">50 req/s</span></div>
            </div>
          </CyberCard>
        </div>
      </div>
    </motion.div>
  );
}
