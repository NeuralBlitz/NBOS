import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CyberCard } from "@/components/CyberCard";
import { Activity, Zap, TrendingUp, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    latency: [],
    throughput: [],
    compliance: [],
    errorRate: []
  });

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const now = new Date().toLocaleTimeString();
        return {
          latency: [...(prev.latency || []), {
            time: now,
            value: Math.random() * 500 + 100,
            threshold: 300
          }].slice(-20),
          throughput: [...(prev.throughput || []), {
            time: now,
            value: Math.random() * 1000 + 500,
            threshold: 800
          }].slice(-20),
          compliance: [...(prev.compliance || []), {
            time: now,
            value: 99.5 + Math.random() * 0.5,
            threshold: 99.0
          }].slice(-20),
          errorRate: [...(prev.errorRate || []), {
            time: now,
            value: Math.random() * 1,
            threshold: 0.5
          }].slice(-20)
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black border border-primary/50 p-2 rounded text-xs text-primary font-mono">
          {payload[0].value.toFixed(2)}
        </div>
      );
    }
    return null;
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
          <h1 className="text-4xl font-display font-bold text-white mb-2">Performance Metrics</h1>
          <p className="text-gray-400">Real-time system metrics with animated graphs</p>
        </div>
        <Link href="/">
          <button className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </button>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CyberCard className="border border-primary/30">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Avg Latency</span>
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-bold text-primary"
            >
              {metrics.latency.length > 0 ? (metrics.latency[metrics.latency.length - 1].value.toFixed(0)) : "0"}ms
            </motion.div>
            <div className="text-xs text-gray-500">±50ms variance</div>
          </div>
        </CyberCard>

        <CyberCard className="border border-secondary/30">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Throughput</span>
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-bold text-secondary"
            >
              {metrics.throughput.length > 0 ? (metrics.throughput[metrics.throughput.length - 1].value.toFixed(0)) : "0"}/s
            </motion.div>
            <div className="text-xs text-gray-500">requests/second</div>
          </div>
        </CyberCard>

        <CyberCard className="border border-accent/30">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Compliance</span>
              <Activity className="w-5 h-5 text-accent" />
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-bold text-accent"
            >
              {metrics.compliance.length > 0 ? (metrics.compliance[metrics.compliance.length - 1].value.toFixed(2)) : "0"}%
            </motion.div>
            <div className="text-xs text-gray-500">charter compliance</div>
          </div>
        </CyberCard>

        <CyberCard className="border border-destructive/30">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Error Rate</span>
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-bold text-destructive"
            >
              {metrics.errorRate.length > 0 ? (metrics.errorRate[metrics.errorRate.length - 1].value.toFixed(3)) : "0"}%
            </motion.div>
            <div className="text-xs text-gray-500">system errors</div>
          </div>
        </CyberCard>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CyberCard className="border border-primary/30">
          <h3 className="text-lg font-bold text-primary mb-6">Latency Over Time</h3>
          {metrics.latency.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={metrics.latency}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip content={customTooltip} />
                <Line type="monotone" dataKey="value" stroke="#00f0ff" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="threshold" stroke="#666" strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CyberCard>

        <CyberCard className="border border-secondary/30">
          <h3 className="text-lg font-bold text-secondary mb-6">Throughput Over Time</h3>
          {metrics.throughput.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={metrics.throughput}>
                <defs>
                  <linearGradient id="colorThroughput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6d28d9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6d28d9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip content={customTooltip} />
                <Area type="monotone" dataKey="value" stroke="#6d28d9" fillOpacity={1} fill="url(#colorThroughput)" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </CyberCard>

        <CyberCard className="border border-accent/30">
          <h3 className="text-lg font-bold text-accent mb-6">Charter Compliance</h3>
          {metrics.compliance.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={metrics.compliance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis tick={{ fontSize: 12, fill: '#888' }} domain={[98, 100.5]} />
                <Tooltip content={customTooltip} />
                <Line type="monotone" dataKey="value" stroke="#f59e0b" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CyberCard>

        <CyberCard className="border border-destructive/30">
          <h3 className="text-lg font-bold text-destructive mb-6">Error Rate Trend</h3>
          {metrics.errorRate.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metrics.errorRate}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip content={customTooltip} />
                <Bar dataKey="value" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CyberCard>
      </div>

      {/* Metrics Legend */}
      <CyberCard className="border border-white/20 bg-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2">Latency</h4>
            <p className="text-xs text-gray-500">Time to process request (ms). Target &lt;300ms</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2">Throughput</h4>
            <p className="text-xs text-gray-500">Requests processed per second. Target &gt;800/s</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2">Compliance</h4>
            <p className="text-xs text-gray-500">Charter principle compliance percentage. Target &gt;99%</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-2">Error Rate</h4>
            <p className="text-xs text-gray-500">System errors per request. Target &lt;0.5%</p>
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
}
