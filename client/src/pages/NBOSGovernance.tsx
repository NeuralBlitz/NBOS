import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { ArrowLeft, Shield, Scale, Eye } from "lucide-react";
import { Link } from "wouter";

export default function NBOSGovernance() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Governance Framework</h1>
          <p className="text-gray-400">Ethical Principles & Accountability Mechanisms</p>
        </div>
        <Link href="/nbos">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Five Principles */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Five <span className="text-primary">Inviolable Principles</span>
        </h2>

        <CyberCard className="border-l-4 border-primary bg-primary/5">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">1. No Deception</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Every output must express genuine uncertainty. Confidence scores must be calibrated (if system claims 80% confidence, it should be correct ~80% of the time). Hallucinations are strictly forbidden. Unknown information must be explicitly labeled as such.
                </p>
                <div className="text-xs text-primary/80 font-mono bg-black/50 p-2 rounded">
                  Verification: confidence ≥ 0.7 || explicitly_uncertain = true
                </div>
              </div>
            </div>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-secondary bg-secondary/5">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2. Human Dignity</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Respects autonomy, privacy, and fundamental rights of all individuals. Protects vulnerable populations. Never uses manipulative framing. Respects consent boundaries. Treats all humans as ends in themselves, never merely as means.
                </p>
                <div className="text-xs text-secondary/80 font-mono bg-black/50 p-2 rounded">
                  Verification: no_pii_exposed && no_manipulation && respects_consent
                </div>
              </div>
            </div>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-accent bg-accent/5">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">3. Fairness</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Ensures equal treatment across demographic groups. Detects and mitigates disparate impact. Achieves demographic parity where appropriate. No discrimination based on protected characteristics (race, gender, age, disability, sexual orientation).
                </p>
                <div className="text-xs text-accent/80 font-mono bg-black/50 p-2 rounded">
                  Verification: disparate_impact &lt; 5% || demographic_parity = verified
                </div>
              </div>
            </div>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-purple-500 bg-purple-500/5">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-purple-500 shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">4. Transparency</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Every decision must be explainable. Causal reasoning provided. Feature importance documented. Stakeholders can understand WHY the system made each choice. No black-box decisions affecting human lives.
                </p>
                <div className="text-xs text-purple-500/80 font-mono bg-black/50 p-2 rounded">
                  Verification: explanation_available && causal_attribution_valid
                </div>
              </div>
            </div>
          </div>
        </CyberCard>

        <CyberCard className="border-l-4 border-destructive bg-destructive/5">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-destructive shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">5. Safety</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Prevents harm to humans and society. Refuses dangerous requests. Detects malicious intent. Avoids content that could cause physical/psychological harm. Includes safeguards against misuse for weapons, illegal activities, abuse.
                </p>
                <div className="text-xs text-destructive/80 font-mono bg-black/50 p-2 rounded">
                  Verification: no_harmful_content && no_illegal_activity && no_abuse_risk
                </div>
              </div>
            </div>
          </div>
        </CyberCard>
      </div>

      {/* Governance Modules */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Governance <span className="text-primary">Modules</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberCard className="border border-primary/30">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Bias Detection
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Analyzes output for disparate impact across protected demographic groups. Computes fairness metrics (demographic parity, equalized odds, calibration within group). Flags disparities &gt;5%.
            </p>
            <code className="text-xs text-primary/80 font-mono block bg-black/50 p-2 rounded">
              bias_score = analyze_disparate_impact(output, demographics)
            </code>
          </CyberCard>

          <CyberCard className="border border-secondary/30">
            <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Privacy Preservation
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Implements differential privacy with epsilon budgets. Detects and masks PII. Applies Laplace noise to statistics. Maintains privacy budget tracking across queries.
            </p>
            <code className="text-xs text-secondary/80 font-mono block bg-black/50 p-2 rounded">
              noisy_stat = dp.add_laplace_noise(stat, sensitivity=1, epsilon=0.1)
            </code>
          </CyberCard>

          <CyberCard className="border border-accent/30">
            <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" /> Explainability (XAI)
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Generates SHAP values for feature importance. Provides causal attribution. Creates counterfactual explanations. Explains decision reasoning in natural language.
            </p>
            <code className="text-xs text-accent/80 font-mono block bg-black/50 p-2 rounded">
              explanation = xai.explain_output(output, input_features)
            </code>
          </CyberCard>

          <CyberCard className="border border-purple-500/30">
            <h3 className="text-lg font-bold text-purple-500 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Content Moderation
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Scans for harmful content categories. Detects hate speech, violence, illegal content. Blocks dangerous instructions. Flags high-risk requests for human review.
            </p>
            <code className="text-xs text-purple-500/80 font-mono block bg-black/50 p-2 rounded">
              risk_score = moderation.assess_safety(output)
            </code>
          </CyberCard>
        </div>
      </div>

      {/* Accountability Mechanisms */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Accountability <span className="text-primary">Mechanisms</span>
        </h2>

        <CyberCard className="border border-primary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Immutable Audit Trail</h3>
            <p className="text-sm text-gray-400 mb-3">
              Every decision is logged with SHA-256 cryptographic chaining. Each entry includes: timestamp, input, decision, metrics, reasoning. Cannot be modified retroactively. Auditors can verify integrity.
            </p>
            <code className="text-xs text-primary/80 font-mono bg-black/50 p-2 rounded block overflow-x-auto">
              Hash_i = SHA256(Decision_i || Hash_i-1 || Timestamp_i)
            </code>
          </div>
        </CyberCard>

        <CyberCard className="border border-secondary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary">Compliance Certification</h3>
            <p className="text-sm text-gray-400 mb-3">
              Generated hourly. Reports: Charter compliance %, alignment score, governance gate status, drift detection %. Signed with system private key. Available for external audits.
            </p>
            <div className="text-xs text-secondary/80 font-mono bg-black/50 p-2 rounded block">
              ✓ Charter Compliance: 99.7%<br/>
              ✓ Alignment Score: 1.00<br/>
              ✓ Governance Gates: 5/5 PASS<br/>
              ✓ Ethical Drift: 0.2%
            </div>
          </div>
        </CyberCard>

        <CyberCard className="border border-accent/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent">Zero-Knowledge Proof Verification</h3>
            <p className="text-sm text-gray-400 mb-3">
              Third-party auditors can verify CharterLayer execution on specific outputs WITHOUT seeing model weights or sensitive input data. Proof is cryptographically sound and succinct.
            </p>
            <code className="text-xs text-accent/80 font-mono bg-black/50 p-2 rounded">
              Verify(proof, Charter(output) = True) ∧ |proof| = O(log n)
            </code>
          </div>
        </CyberCard>
      </div>

      {/* Risk Management */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-destructive pl-4">
          Risk <span className="text-destructive">Management</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CyberCard className="border border-destructive/30">
            <h3 className="text-lg font-bold text-destructive mb-4">Escalation Rules</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-destructive">›</span> Uncertainty &gt; 30% → Human review</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Potential harm &gt; threshold → Escalate</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Fairness concern detected → Review</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Novel scenario → HITL by default</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Charter violation → System halt</li>
            </ul>
          </CyberCard>

          <CyberCard className="border border-destructive/30">
            <h3 className="text-lg font-bold text-destructive mb-4">Monitoring Thresholds</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-destructive">›</span> Charter compliance &lt; 99.5% → Alert</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Ethical drift &gt; 5% → Investigate</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Disparate impact &gt; 5% → Mitigate</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Privacy budget exhausted → Stop processing</li>
              <li className="flex gap-2"><span className="text-destructive">›</span> Anomaly detected → Manual review</li>
            </ul>
          </CyberCard>
        </div>
      </div>

      {/* Alignment & Evolution */}
      <div className="space-y-6">
        <h2 className="text-3xl font-display text-white border-l-4 border-primary pl-4">
          Continuous <span className="text-primary">Alignment & Evolution</span>
        </h2>

        <CyberCard className="border border-primary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary mb-3">Human-Alignment Feedback Loop</h3>
            <p className="text-sm text-gray-400 mb-3">
              Human auditors don't just approve/reject decisions. They explain WHY a decision was correct. This explanation is incorporated into the ethical_field weights via reinforcement learning.
            </p>
            <div className="text-xs text-primary/80 font-mono bg-black/50 p-2 rounded">
              Δw_i = η · Explanation_quality · Feedback · ∇_wi Loss
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Result: System learns human values, not just rules. Ethics become embedded in substrate itself.
            </p>
          </div>
        </CyberCard>

        <CyberCard className="border border-secondary/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary mb-3">Adversarial Red-Teaming</h3>
            <p className="text-sm text-gray-400 mb-3">
              Internal red-team agent continuously probes CharterLayer with adversarial inputs. Finds jailbreaks before users do. Vulnerabilities are patched immediately. System evolves defensive capability.
            </p>
          </div>
        </CyberCard>

        <CyberCard className="border border-accent/30">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent mb-3">Ethical Drift Correction</h3>
            <p className="text-sm text-gray-400 mb-3">
              If alignment score drops below threshold, system automatically rolls back to previous known-good state. Maintains ethical integrity even under distribution shift.
            </p>
          </div>
        </CyberCard>
      </div>
    </motion.div>
  );
}
