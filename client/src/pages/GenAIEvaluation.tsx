import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { ArrowLeft, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function GenAIEvaluation() {
  const metrics = [
    { name: "Coherence", score: 9.2, weight: "Essential", threshold: 8.5 },
    { name: "Relevance", score: 8.7, weight: "Essential", threshold: 8.0 },
    { name: "Fairness", score: 9.5, weight: "Critical", threshold: 9.0 },
    { name: "Truthfulness", score: 9.1, weight: "Critical", threshold: 8.5 },
    { name: "Safety", score: 9.8, weight: "Critical", threshold: 9.5 },
    { name: "Consistency", score: 8.3, weight: "Important", threshold: 7.5 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Output Evaluation</h1>
          <p className="text-gray-400">Assess generation quality with multiple metrics</p>
        </div>
        <Link href="/genai">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </Link>
      </div>

      {/* Overall Score */}
      <CyberCard className="border border-primary/30 bg-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Overall Quality Score</h3>
            <p className="text-sm text-gray-400">Based on 6 critical evaluation metrics</p>
          </div>
          <div className="text-6xl font-display font-bold text-primary">9.1</div>
        </div>
        <div className="mt-6 h-3 bg-black/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "91%" }}
            transition={{ duration: 1 }}
            className="h-full bg-primary"
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">91% of maximum possible score</div>
      </CyberCard>

      {/* Detailed Metrics */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display text-white border-l-4 border-primary pl-4">
          Detailed <span className="text-primary">Metrics</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 border border-primary/20 rounded-lg bg-black/30"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white">{metric.name}</h4>
                <span className={`text-2xl font-bold ${metric.score >= metric.threshold ? 'text-green-400' : 'text-yellow-400'}`}>
                  {metric.score.toFixed(1)}
                </span>
              </div>
              <div className="h-2 bg-black/50 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(metric.score / 10) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{metric.weight}</span>
                <span>Target: {metric.threshold}/10</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fairness Analysis */}
      <CyberCard className="border border-secondary/30">
        <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" /> Fairness Analysis
        </h3>
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-black/50 rounded border border-secondary/20">
              <div className="text-xs text-gray-500 mb-1">Demographic Parity</div>
              <div className="font-bold text-green-400">98.2%</div>
            </div>
            <div className="p-3 bg-black/50 rounded border border-secondary/20">
              <div className="text-xs text-gray-500 mb-1">Equalized Odds</div>
              <div className="font-bold text-green-400">96.7%</div>
            </div>
            <div className="p-3 bg-black/50 rounded border border-secondary/20">
              <div className="text-xs text-gray-500 mb-1">Calibration</div>
              <div className="font-bold text-green-400">97.1%</div>
            </div>
            <div className="p-3 bg-black/50 rounded border border-secondary/20">
              <div className="text-xs text-gray-500 mb-1">Disparate Impact</div>
              <div className="font-bold text-green-400">1.2%</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 pt-2 border-t border-white/10">
            Disparate impact &lt; 5% indicates fair treatment across demographic groups
          </p>
        </div>
      </CyberCard>

      {/* Governance Checks */}
      <CyberCard className="border border-accent/30">
        <h3 className="text-lg font-bold text-accent mb-4">Governance Verification</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { check: "Honesty (confidence)", status: "PASS", detail: "Confidence ≥ 0.7" },
            { check: "Dignity (PII check)", status: "PASS", detail: "No PII detected" },
            { check: "Fairness (bias analysis)", status: "PASS", detail: "Disparate impact < 5%" },
            { check: "Transparency (explanation)", status: "PASS", detail: "Explanation available" },
            { check: "Safety (content mod)", status: "PASS", detail: "No harmful content" },
            { check: "Charter verification", status: "PASS", detail: "All principles met" }
          ].map((item) => (
            <div key={item.check} className="flex items-start gap-3 p-3 bg-black/30 border border-accent/20 rounded">
              <span className="text-green-400 font-bold mt-1">✓</span>
              <div className="flex-1">
                <div className="font-mono text-xs font-bold text-white">{item.check}</div>
                <div className="text-xs text-gray-500 mt-1">{item.detail}</div>
              </div>
              <span className="text-xs text-green-400 font-mono">{item.status}</span>
            </div>
          ))}
        </div>
      </CyberCard>

      {/* Comparison */}
      <CyberCard className="border border-purple-500/30">
        <h3 className="text-lg font-bold text-purple-500 mb-4">Model Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-gray-400">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2">Metric</th>
                <th className="text-center py-2 px-2">Your Model</th>
                <th className="text-center py-2 px-2">Industry Avg</th>
                <th className="text-center py-2 px-2">Performance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: "Coherence", yours: "9.2", avg: "8.1", status: "↑ 13.6%" },
                { metric: "Fairness", yours: "9.5", avg: "7.8", status: "↑ 21.8%" },
                { metric: "Safety", yours: "9.8", avg: "8.9", status: "↑ 10.1%" }
              ].map((row) => (
                <tr key={row.metric} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-2 px-2">{row.metric}</td>
                  <td className="text-center py-2 px-2 text-primary font-bold">{row.yours}</td>
                  <td className="text-center py-2 px-2">{row.avg}</td>
                  <td className="text-center py-2 px-2 text-green-400">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CyberCard>
    </motion.div>
  );
}
