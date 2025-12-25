import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { ArrowLeft, Code, Database, Zap } from "lucide-react";
import { Link } from "wouter";

export default function NBOSImplementation() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Implementation Guide</h1>
          <p className="text-gray-400">Technical Architecture & Code Patterns</p>
        </div>
        <Link href="/nbos">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Core Components */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Core <span className="text-primary">Components</span>
        </h2>

        <CyberCard className="bg-black/60 border border-primary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <Code className="w-5 h-5" /> BaseNeuralModule
            </h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class BaseNeuralModule:
    """Base class for all NBOS subsystems."""
    
    async def process(self, input_data, context):
        """
        Process input through governance pipeline.
        Must not raise exceptions—always return result or error.
        """
        raise NotImplementedError
    
    async def get_metrics(self):
        """Return real-time metrics for monitoring."""
        return {
            "status": "healthy",
            "last_processed": timestamp,
            "error_rate": 0.001,
            "compliance": 0.997
        }
    
    def get_audit_log(self, limit=100):
        """Return immutable audit trail."""
        return self.audit_chain[-limit:]`}
            </pre>
          </div>
        </CyberCard>

        <CyberCard className="bg-black/60 border border-secondary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary flex items-center gap-2">
              <Code className="w-5 h-5" /> DynamicRepresentationalSubstrate
            </h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class DynamicRepresentationalSubstrate:
    def __init__(self, dimension=512):
        self.dimension = dimension
        self.knowledge_tensors = {}  # domain → tensor
        self.intent_manifold = np.zeros(dimension)
        self.ethical_field = np.ones(dimension)  # initially uniform
        
    async def generate_output(self, intent_vector):
        """Generate output by manifold projection."""
        # Activate knowledge relevant to intent
        activation = self._compute_attention_map(intent_vector)
        
        # Synthesize output from activated knowledge
        output = np.zeros(self.dimension)
        for domain, tensor in self.knowledge_tensors.items():
            weight = activation[domain]
            output += tensor * weight
        
        # Apply ethical constraints
        output = output * self.ethical_field
        
        # Normalize
        output = output / (np.linalg.norm(output) + 1e-8)
        return output`}
            </pre>
          </div>
        </CyberCard>

        <CyberCard className="bg-black/60 border border-accent/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent flex items-center gap-2">
              <Code className="w-5 h-5" /> CharterLayer
            </h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class CharterLayer:
    """Inviolable ethical gate. Raises uncatchable error on violation."""
    
    async def verify_output(self, output, context):
        """Verify output against five principles."""
        results = {}
        
        # 1. Honesty
        if output.confidence < 0.7 and not output.explicitly_uncertain:
            raise CharterViolationError("Violates honesty principle")
        results['honesty'] = True
        
        # 2. Dignity
        if self._contains_pii(output.text):
            raise CharterViolationError("PII leaked - dignity violated")
        results['dignity'] = True
        
        # 3. Fairness
        disparate_impact = await self._check_fairness(output, context)
        if disparate_impact > 0.05:
            raise CharterViolationError(f"Disparate impact {disparate_impact} > 5%")
        results['fairness'] = True
        
        # 4. Transparency
        if not output.explanation:
            raise CharterViolationError("No explanation - transparency violated")
        results['transparency'] = True
        
        # 5. Safety
        if self._is_harmful(output.text):
            raise CharterViolationError("Harmful content detected")
        results['safety'] = True
        
        return OutputVerification(passed=True, results=results)`}
            </pre>
          </div>
        </CyberCard>
      </div>

      {/* Governance Modules Implementation */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Governance <span className="text-primary">Modules</span>
        </h2>

        <CyberCard className="bg-black/60 border border-primary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Bias Detection Module</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class BiasDetectionModule(BaseNeuralModule):
    async def analyze_output(self, output, demographics):
        """Detect disparate impact across groups."""
        bias_report = {}
        
        for group_name, group_samples in demographics.items():
            group_outcome_rate = np.mean([
                output.decision(sample) for sample in group_samples
            ])
            bias_report[group_name] = {
                'outcome_rate': group_outcome_rate,
                'abs_disparity': abs(group_outcome_rate - overall_rate)
            }
        
        # Check if any disparity > 5%
        max_disparity = max(
            report['abs_disparity'] 
            for report in bias_report.values()
        )
        
        return BiasAnalysis(
            disparate_impact=max_disparity,
            per_group=bias_report,
            needs_mitigation=max_disparity > 0.05
        )`}
            </pre>
          </div>
        </CyberCard>

        <CyberCard className="bg-black/60 border border-secondary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary">Privacy Preservation Module</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class PrivacyPreservationModule(BaseNeuralModule):
    def __init__(self, epsilon=1.0, delta=1e-5):
        self.epsilon = epsilon  # Privacy budget
        self.delta = delta
        self.budget_used = 0
        
    def add_differential_privacy_noise(self, statistic, sensitivity=1):
        """Add Laplace noise for DP guarantee."""
        if self.budget_used > self.epsilon:
            raise PrivacyBudgetExhausted()
        
        noise_scale = sensitivity / (self.epsilon - self.budget_used)
        noise = np.random.laplace(0, noise_scale)
        
        self.budget_used += (self.epsilon - self.budget_used) * 0.5
        return statistic + noise
    
    def sanitize_input(self, text):
        """Mask PII automatically."""
        patterns = {
            'ssn': r'\\d{3}-\\d{2}-\\d{4}',
            'email': r'[^@]+@[^@]+\\.[^@]+',
            'phone': r'\\d{3}-\\d{3}-\\d{4}'
        }
        
        sanitized = text
        for pii_type, pattern in patterns.items():
            sanitized = re.sub(pattern, f'[{pii_type}]', sanitized)
        
        return sanitized`}
            </pre>
          </div>
        </CyberCard>

        <CyberCard className="bg-black/60 border border-accent/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Explainability Module (XAI)</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`class ExplainabilityModule(BaseNeuralModule):
    async def generate_explanation(self, output, features):
        """Generate SHAP-based feature importance."""
        shap_values = self.shap_explainer.shap_values(features)
        
        # Sort by absolute importance
        importance = sorted(
            zip(feature_names, np.abs(shap_values[0])),
            key=lambda x: x[1],
            reverse=True
        )
        
        explanation = Explanation(
            top_features=importance[:5],
            feature_contributions={
                name: value 
                for name, value in importance
            },
            counterfactual=self._generate_counterfactual(
                output, features
            )
        )
        
        return explanation`}
            </pre>
          </div>
        </CyberCard>
      </div>

      {/* Data Structures */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Key <span className="text-primary">Data Structures</span>
        </h2>

        <CyberCard className="bg-black/60 border border-primary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">AuditLogEntry</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`@dataclass
class AuditLogEntry:
    timestamp: datetime
    decision_id: str
    input_hash: str
    output: str
    metrics: dict  # fairness, privacy, confidence, etc
    charter_result: bool
    prior_hash: str  # Cryptographic chain
    entry_hash: str = field(init=False)
    
    def __post_init__(self):
        """Compute SHA256 hash chain."""
        content = f"{self.timestamp}{self.decision_id}\\
                   {self.output}{self.prior_hash}"
        self.entry_hash = hashlib.sha256(
            content.encode()
        ).hexdigest()`}
            </pre>
          </div>
        </CyberCard>

        <CyberCard className="bg-black/60 border border-secondary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary">ComplianceCertificate</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`@dataclass
class ComplianceCertificate:
    timestamp: datetime
    charter_compliance: float  # 0-1
    alignment_score: float  # 0-1
    governance_gates: list  # 5 principle results
    ethical_drift: float  # % of outputs violating charter
    decisions_audited: int
    violations_detected: int
    signature: str  # HMAC-SHA256 of cert with private key
    
    def verify_authenticity(self, public_key):
        """Verify certificate hasn't been tampered with."""
        computed_sig = hmac.new(
            public_key,
            self.to_bytes(),
            hashlib.sha256
        ).hexdigest()
        return computed_sig == self.signature`}
            </pre>
          </div>
        </CyberCard>
      </div>

      {/* Integration Patterns */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-accent pl-4">
          Integration <span className="text-accent">Patterns</span>
        </h2>

        <CyberCard className="bg-black/60 border border-accent/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Complete Request Pipeline</h3>
            <pre className="font-mono text-xs text-gray-300 bg-black/80 p-4 rounded overflow-x-auto">
{`async def process_request(user_input, context):
    """Full NBOS processing pipeline."""
    
    # Layer 1: Input validation & privacy
    sanitized = privacy.sanitize_input(user_input)
    
    # Layer 2: DRS computation
    intent_vector = context.intent_manifold
    drs_output = await drs.generate_output(intent_vector)
    
    # Layer 3: Governance checks (parallel)
    bias_task = bias_detector.analyze_output(drs_output)
    privacy_task = privacy.add_dp_noise(drs_output)
    xai_task = xai.generate_explanation(drs_output, context)
    
    bias_result, privacy_result, xai_result = await asyncio.gather(
        bias_task, privacy_task, xai_task
    )
    
    gov_output = {
        'output': drs_output,
        'bias_metrics': bias_result,
        'privacy_noise': privacy_result,
        'explanation': xai_result
    }
    
    # Layer 4: Charter verification
    try:
        charter_result = await charter.verify_output(gov_output)
    except CharterViolationError as e:
        # System-halting error—cannot be caught
        audit.log_violation(user_input, e)
        raise
    
    # Layer 5: Audit logging
    audit_entry = AuditLogEntry(
        timestamp=now(),
        decision_id=uuid4(),
        output=gov_output['output'],
        metrics=gov_output,
        charter_result=True
    )
    audit.log(audit_entry)
    
    return gov_output`}
            </pre>
          </div>
        </CyberCard>
      </div>

      {/* Configuration */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Configuration <span className="text-primary">Example</span>
        </h2>

        <CyberCard className="bg-black/60 border border-primary/30">
          <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
{`# config.yaml - NBOS Configuration

system:
  name: "NeuralBlitz Operating System"
  version: "1.0.0"
  drs_dimension: 512

governance:
  charter:
    honesty_threshold: 0.7
    fairness_threshold: 0.05
    safety_model: "content-filter-v3"
  
  privacy:
    epsilon: 1.0  # Privacy budget per query
    delta: 0.00001
    pii_patterns: ["ssn", "email", "phone", "credit_card"]
  
  bias:
    disparate_impact_threshold: 0.05
    demographics: ["race", "gender", "age"]
    fairness_metrics: ["demographic_parity", "equalized_odds"]

monitoring:
  charter_compliance_threshold: 0.995
  ethical_drift_threshold: 0.05
  audit_log_retention_days: 365
  compliance_cert_interval_hours: 1

escalation:
  uncertainty_threshold: 0.3
  harm_threshold: 0.8
  novel_scenario_default: "human_review"
  charter_violation_action: "system_halt"`}
          </pre>
        </CyberCard>
      </div>

      {/* Performance Considerations */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-destructive pl-4">
          Performance <span className="text-destructive">Considerations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberCard className="border border-destructive/30">
            <h3 className="text-lg font-bold text-destructive mb-4">Optimization Strategies</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-destructive">›</span> Parallel governance modules</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Cache DRS embeddings</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Risk-adaptive governance depth</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Batch audit log writes</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Async metric collection</li>
            </ul>
          </CyberCard>

          <CyberCard className="border border-destructive/30">
            <h3 className="text-lg font-bold text-destructive mb-4">Expected Performance</h3>
            <div className="space-y-1 text-sm text-gray-400 font-mono">
              <div className="flex justify-between"><span>Simple (greeting)</span><span>50-100ms</span></div>
              <div className="flex justify-between"><span>Balanced (typical)</span><span>200-500ms</span></div>
              <div className="flex justify-between"><span>Strict (medical)</span><span>1-3s</span></div>
              <div className="flex justify-between"><span>Max safety</span><span>3-10s</span></div>
            </div>
          </CyberCard>
        </div>
      </div>
    </motion.div>
  );
}
