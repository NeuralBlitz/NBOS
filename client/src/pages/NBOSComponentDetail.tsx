import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { CyberButton } from "@/components/CyberButton";
import { ArrowLeft, Code, Cpu, Lock } from "lucide-react";

export default function NBOSComponentDetail() {
  const [match, params] = useRoute("/nbos/component/:id");
  const componentId = params ? params.id : "synergy";

  const components: Record<string, any> = {
    synergy: {
      title: "Synergy Engine",
      icon: "🧠",
      description: "The unified consciousness hub that orchestrates all NBOS subsystems.",
      features: [
        "Coordinates DRS, epistemic inquiry, bias detection, and privacy preservation",
        "Maintains system coherence and alignment across generative tasks",
        "Routes inputs through complete governance pipeline",
        "Tracks active tasks and system state in real-time"
      ],
      implementation: `class SynergyEngine(BaseNeuralModule):
    async def process(self, input_data, context):
        # 1. Input sanitization via privacy module
        # 2. DRS routing (knowledge activation)
        # 3. Epistemic inquiry (gap detection)
        # 4. Bias detection & analysis
        # 5. Differential privacy application
        # 6. Explanation generation
        # 7. CharterLayer verification (GATE)
        # 8. Audit logging
        return governance_verified_output`,
      keyMethods: [
        "process() - Route input through full pipeline",
        "detect_alignment_drift() - Monitor ethical alignment",
        "get_system_status() - Report metrics and state"
      ]
    },
    charter: {
      title: "CharterLayer",
      icon: "⚖️",
      description: "The inviolable ethical gate enforcing five fundamental axioms.",
      features: [
        "Verifies every output against 5 axiomatic principles",
        "No override capability - CharterViolationError cannot be caught",
        "Formal logic checks for alignment enforcement",
        "Complete audit trail of all verifications"
      ],
      implementation: `class CharterLayer:
    async def verify_output(self, output, context):
        # Check all 5 principles
        principle_results = {}
        for principle, check_func in self.charter_rules.items():
            passed = await check_func(output, context)
            if not passed:
                raise CharterViolationError(f"Violated: {principle}")
        return OutputVerification(passed=True, ...)`,
      keyMethods: [
        "_check_honesty() - Verify confidence/uncertainty",
        "_check_dignity() - Verify privacy respect",
        "_check_fairness() - Verify no discrimination",
        "_check_transparency() - Verify explainability",
        "_check_safety() - Verify harmlessness"
      ]
    },
    drs: {
      title: "DRS v7.0",
      icon: "🌐",
      description: "Dynamic Representational Substrate - topological tensor network for knowledge.",
      features: [
        "Multidimensional tensor representation (512-dim baseline)",
        "Topological interaction of knowledge, intent, and ethics",
        "Coherence lattice for internal consistency",
        "Emergent generative capability from topology"
      ],
      implementation: `class DynamicRepresentationalSubstrate:
    async def generate_output(self, intent):
        # output = knowledge * intent_alignment * ethical_field
        output = np.zeros(self.dimension)
        for domain, knowledge in self.knowledge_tensors.items():
            activation = np.dot(knowledge, self.intent_manifold)
            output += knowledge * activation
        # Apply ethical constraints
        output = output * self.ethical_field
        return normalize(output)`,
      keyMethods: [
        "inject_knowledge() - Add domain knowledge tensors",
        "set_intent() - Set current task intent",
        "generate_output() - Emerge generative output",
        "integrate_ethical_constraint() - Apply constraints"
      ]
    },
    governance: {
      title: "Governance Modules",
      icon: "🛡️",
      description: "Real-time oversight through bias detection, privacy, and explainability.",
      features: [
        "Bias Detection: Disparate impact analysis across demographics",
        "Privacy Preservation: Differential privacy + PII sanitization",
        "Explainability: Causal explanation regularizers",
        "Content Moderation: Harmful content detection & escalation"
      ],
      implementation: `# Bias Detection
biases = await bias_detector.analyze_output(output, demographics)

# Privacy Preservation  
sanitized = await privacy_module.sanitize_input(data)
noisy_stat = await privacy_module.add_differential_privacy_noise(stat)

# Explainability
explanation = await xai_module.generate_explanation(pred, features)

# Content Moderation
safe = await content_mod.check_safety(output)`,
      keyMethods: [
        "analyze_output() - Detect demographic disparities",
        "sanitize_input() - Remove PII automatically",
        "generate_explanation() - Create interpretable reasoning",
        "check_safety() - Assess harmful content risk"
      ]
    },
    epistemic: {
      title: "Epistemic Inquiry",
      icon: "🔍",
      description: "Self-assessment module identifying knowledge gaps before they cause harm.",
      features: [
        "Missing feature detection for domain",
        "Demographic coverage verification",
        "Confidence gap assessment",
        "Distribution shift detection"
      ],
      implementation: `class EpistemicInquiry:
    async def identify_knowledge_gaps(self, domain, features):
        gaps = []
        # Check feature coverage
        missing = essential_features - provided_features
        if missing:
            gaps.append(gap)
        # Check demographic coverage
        underrep = await self._check_demographic_coverage(features)
        # Assess confidence
        return gaps`,
      keyMethods: [
        "identify_knowledge_gaps() - Find missing information",
        "detect_distribution_shift() - Flag out-of-domain input",
        "get_uncertainty_summary() - Report all uncertainties"
      ]
    },
    monitoring: {
      title: "Monitoring & Audit",
      icon: "📊",
      description: "Real-time compliance dashboard with cryptographically immutable audit trail.",
      features: [
        "Real-time metrics collection from all subsystems",
        "Cryptographic hashing for audit integrity",
        "Compliance certification generation",
        "Critical/warning alert thresholds"
      ],
      implementation: `class MonitoringDashboard:
    def record_metric(self, metric_name, value, threshold):
        metric = SystemMetric(..., status=status)
        if status != 'normal':
            self._create_alert(metric_name, value, threshold)
    
    def log_decision(self, decision_id, data):
        entry = {
            'timestamp': now(),
            'data': data,
            'audit_hash': sha256(json.dumps(data))
        }`,
      keyMethods: [
        "record_metric() - Track system metrics",
        "log_decision() - Log decisions immutably",
        "get_compliance_report() - Generate audit report",
        "generate_compliance_certificate() - Create cert"
      ]
    }
  };

  const component = components[componentId] || components.synergy;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <Link href="/nbos">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm uppercase tracking-wider group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to NBOS
          </button>
        </Link>
      </div>

      {/* Component Detail */}
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{component.icon}</div>
            <div>
              <h1 className="text-4xl font-display font-bold text-white">{component.title}</h1>
              <p className="text-gray-400 text-lg">{component.description}</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-display text-white border-l-4 border-primary pl-4">
            Key <span className="text-primary">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {component.features.map((feature: string, i: number) => (
              <CyberCard key={i} className="border border-primary/30">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-gray-400">{feature}</p>
                </div>
              </CyberCard>
            ))}
          </div>
        </div>

        {/* Implementation */}
        <div className="space-y-4">
          <h2 className="text-2xl font-display text-white border-l-4 border-secondary pl-4">
            Implementation <span className="text-secondary">Example</span>
          </h2>
          <CyberCard className="bg-black/60 border border-secondary/30">
            <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
              <code>{component.implementation}</code>
            </pre>
          </CyberCard>
        </div>

        {/* Key Methods */}
        <div className="space-y-4">
          <h2 className="text-2xl font-display text-white border-l-4 border-accent pl-4">
            Key <span className="text-accent">Methods</span>
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {component.keyMethods.map((method: string, i: number) => (
              <div key={i} className="p-4 border border-accent/30 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                <code className="font-mono text-sm text-accent">{method}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Component Navigation */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
          {Object.entries(components).map(([id, comp]: [string, any]) => (
            <Link key={id} href={`/nbos/component/${id}`}>
              <button 
                className={`px-4 py-2 border rounded-lg transition-all font-mono text-sm ${
                  componentId === id
                    ? "bg-primary/20 border-primary text-primary"
                    : "border-white/20 text-gray-400 hover:border-primary/50"
                }`}
              >
                {comp.icon} {comp.title.split(" ")[0]}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
