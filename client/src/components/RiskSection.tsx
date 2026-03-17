import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { risks } from '@/lib/roadmapData';
import type { RiskItem } from '@/lib/roadmapData';
import { AlertTriangle, X, Shield, User } from 'lucide-react';

function getRiskColor(likelihood: number, impact: number): string {
  const score = likelihood * impact;
  if (score >= 16) return '#C62828';
  if (score >= 12) return '#E65100';
  if (score >= 8) return '#F9A825';
  if (score >= 4) return '#2E7D32';
  return '#4CAF50';
}

function getRiskLabel(likelihood: number, impact: number): string {
  const score = likelihood * impact;
  if (score >= 16) return 'Critical';
  if (score >= 12) return 'High';
  if (score >= 8) return 'Medium';
  return 'Low';
}

export default function RiskSection() {
  const { ref, isVisible } = useInView();
  const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null);

  return (
    <section id="risks" className="py-20 bg-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-12">
            <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
              Risk Management
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
              Proactive Risk Management Anchored in Enterprise Priorities
            </h2>
            <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
              Significant risks have been identified and have an associated mitigation strategy
              as well as an accountable owner. The decision-gate model provides a structured risk
              control, with investment scaling tied to evidence at each stage.
            </p>
          </div>

          {/* Risk heatmap */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Heatmap visualization */}
            <div>
              <h3 className="text-sm font-semibold text-[#16365C]/60 uppercase tracking-wider mb-4">
                Likelihood vs. Impact Matrix
              </h3>
              <div className="bg-[#FAFAF8] border border-[#16365C]/10 rounded-xl p-6">
                {/* Y-axis label */}
                <div className="flex">
                  <div className="flex flex-col justify-center mr-2">
                    <span className="text-[10px] font-mono text-[#16365C]/40 -rotate-90 whitespace-nowrap">
                      IMPACT
                    </span>
                  </div>
                  <div className="flex-1">
                    {/* Grid */}
                    <div className="grid grid-cols-5 gap-1">
                      {[5, 4, 3, 2, 1].map(impact => (
                        [1, 2, 3, 4, 5].map(likelihood => {
                          const risksInCell = risks.filter(
                            r => r.likelihood === likelihood && r.impact === impact
                          );
                          const bgColor = getRiskColor(likelihood, impact);
                          return (
                            <div
                              key={`${likelihood}-${impact}`}
                              className="aspect-square rounded-md flex items-center justify-center relative group"
                              style={{ backgroundColor: bgColor + '15', border: `1px solid ${bgColor}20` }}
                            >
                              {risksInCell.map((risk, i) => (
                                <button
                                  key={risk.id}
                                  onClick={() => setSelectedRisk(risk)}
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-mono font-bold hover:scale-125 transition-transform shadow-sm"
                                  style={{ backgroundColor: bgColor }}
                                  title={risk.name}
                                >
                                  {risk.id.replace('risk-', '')}
                                </button>
                              ))}
                            </div>
                          );
                        })
                      ))}
                    </div>
                    {/* X-axis label */}
                    <p className="text-[10px] font-mono text-[#16365C]/40 text-center mt-2">
                      LIKELIHOOD
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk list */}
            <div>
              <h3 className="text-sm font-semibold text-[#16365C]/60 uppercase tracking-wider mb-4">
                Top Risks
              </h3>
              <div className="space-y-3">
                {risks.map((risk) => {
                  const color = getRiskColor(risk.likelihood, risk.impact);
                  const label = getRiskLabel(risk.likelihood, risk.impact);
                  return (
                    <button
                      key={risk.id}
                      onClick={() => setSelectedRisk(risk)}
                      className="w-full text-left bg-white border border-[#16365C]/8 rounded-lg p-4 hover:border-[#16365C]/20 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-mono font-bold"
                            style={{ backgroundColor: color }}
                          >
                            {risk.id.replace('risk-', '')}
                          </div>
                          <span className="font-semibold text-sm text-[#16365C]">{risk.name}</span>
                        </div>
                        <span
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: color + '15', color }}
                        >
                          {label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 pl-10">
                        <span className="text-xs text-[#16365C]/40">
                          L: {risk.likelihood}/5
                        </span>
                        <span className="text-xs text-[#16365C]/40">
                          I: {risk.impact}/5
                        </span>
                        <span className="text-xs text-[#16365C]/40">
                          {risk.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Risk detail modal */}
        <AnimatePresence>
          {selectedRisk && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedRisk(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5" style={{ color: getRiskColor(selectedRisk.likelihood, selectedRisk.impact) }} />
                    <h3 className="text-lg font-bold text-[#16365C]">{selectedRisk.name}</h3>
                  </div>
                  <button onClick={() => setSelectedRisk(null)} className="text-[#16365C]/40 hover:text-[#16365C]">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: getRiskColor(selectedRisk.likelihood, selectedRisk.impact) + '15',
                      color: getRiskColor(selectedRisk.likelihood, selectedRisk.impact),
                    }}
                  >
                    {getRiskLabel(selectedRisk.likelihood, selectedRisk.impact)}
                  </span>
                  <span className="text-xs text-[#16365C]/40 font-mono">
                    Likelihood: {selectedRisk.likelihood}/5 | Impact: {selectedRisk.impact}/5
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-[#16365C]/40" />
                      <p className="text-xs font-semibold text-[#16365C]/50 uppercase">Mitigation Strategy</p>
                    </div>
                    <p className="text-sm text-[#16365C]/70 leading-relaxed">{selectedRisk.mitigation}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-[#16365C]/40" />
                      <p className="text-xs font-semibold text-[#16365C]/50 uppercase">Accountable Owner</p>
                    </div>
                    <p className="text-sm text-[#16365C]/70">{selectedRisk.owner}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
