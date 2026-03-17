// Design: Institutional Modernism | Section: Value Case
// GenAI-heavy value narrative, metrics table, compounding returns
// Dark blue section used as visual break — white text for contrast

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { valueMetrics } from '@/lib/roadmapData';
import { TrendingUp, Zap, Layers, Sparkles, ArrowRight } from 'lucide-react';

const categoryIcons = {
  efficiency: Zap,
  quality: TrendingUp,
  capability: Layers,
};

const categoryLabels = {
  efficiency: 'Efficiency Gain',
  quality: 'Quality Improvement',
  capability: 'New Capability',
};

export default function ValueSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="value" className="py-20 bg-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
            Value Creation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
            From Manual Processes to AI-Enabled Oversight
          </h2>
          <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
            The three-year arc delivers compounding value. Each year builds on the
            capabilities established in the prior year, creating an accelerating return on
            investment across the enterprise data program.
          </p>
        </motion.div>

        {/* GenAI Value Narrative — dark blue visual break */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden mb-14 bg-[#16365C]"
        >
          <div className="p-8 md:p-10">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Left narrative */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#B8860B]" />
                  <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase">
                    The GenAI Opportunity
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-5 tracking-tight">
                  Responsible AI Adoption as a Force Multiplier
                </h3>
                <p className="text-white/80 font-serif leading-relaxed mb-5">
                  PCAOB staff currently spend significant time on document assembly, regulatory
                  research, and manual data preparation. GenAI capabilities, deployed within a
                  controlled governance framework, can reclaim that time for the judgment-intensive
                  work that only experienced professionals can perform.
                </p>
                <p className="text-white/80 font-serif leading-relaxed mb-6">
                  This is not about replacing staff. It is about enabling each inspector, investigator,
                  and analyst to operate with the data and analytical support that the complexity of
                  modern audit oversight demands.
                </p>

                {/* Key stat callouts */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-4 text-center">
                    <p className="font-mono text-2xl font-bold text-[#B8860B]">11</p>
                    <p className="text-[10px] text-white/50 font-mono uppercase mt-1">GenAI Capabilities</p>
                  </div>
                  <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-4 text-center">
                    <p className="font-mono text-2xl font-bold text-white">3</p>
                    <p className="text-[10px] text-white/50 font-mono uppercase mt-1">Maturity Stages</p>
                  </div>
                  <div className="bg-white/[0.08] border border-white/[0.12] rounded-lg p-4 text-center">
                    <p className="font-mono text-2xl font-bold text-white">3+</p>
                    <p className="text-[10px] text-white/50 font-mono uppercase mt-1">Divisions Served</p>
                  </div>
                </div>
              </div>

              {/* Right — GenAI progression */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">
                  GenAI Maturity Progression
                </p>
                {[
                  {
                    year: 'Year 1',
                    stage: 'Pilot',
                    items: ['Inspection summarization', 'Regulatory research assistant', 'Data quality anomaly detection'],
                    color: '#16365C',
                    bgColor: '#4A7C9B',
                  },
                  {
                    year: 'Year 2',
                    stage: 'Operational',
                    items: ['Cross-engagement pattern analysis', 'Enforcement case intelligence', 'Natural language data query'],
                    color: '#4A7C9B',
                    bgColor: '#4A7C9B',
                  },
                  {
                    year: 'Year 3',
                    stage: 'Institutional',
                    items: ['Predictive audit risk modeling', 'Agentic workflow orchestration', 'GenAI-assisted standard setting'],
                    color: '#2D6A6A',
                    bgColor: '#2D6A6A',
                  },
                ].map((phase, i) => (
                  <div key={i} className="bg-white/[0.08] border border-white/[0.12] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: phase.bgColor }}>
                        <span className="text-white font-mono text-[10px] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{phase.year}: {phase.stage}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-[#B8860B]/70 flex-shrink-0" />
                          <span className="text-white/70 text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Value Metrics Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-[#16365C] mb-6">
            Value Trajectory Across Three Years
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#16365C]/8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-[#16365C]/50 uppercase tracking-wider">Metric</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-[#16365C]/50 uppercase tracking-wider">Category</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#16365C' }}>Year 1</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#4A7C9B' }}>Year 2</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#2D6A6A' }}>Year 3</th>
                </tr>
              </thead>
              <tbody>
                {valueMetrics.map((metric, i) => {
                  const Icon = categoryIcons[metric.category];
                  return (
                    <tr key={i} className="border-t border-[#16365C]/5 hover:bg-[#16365C]/[0.02] transition-colors">
                      <td className="py-3.5 px-5 text-sm font-medium text-[#16365C]">{metric.label}</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#16365C]/60">
                          <Icon className="w-3.5 h-3.5" />
                          {categoryLabels[metric.category]}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-sm text-[#16365C]/70">{metric.year1}</td>
                      <td className="py-3.5 px-5 text-sm text-[#16365C]/70">{metric.year2}</td>
                      <td className="py-3.5 px-5 text-sm text-[#16365C]/70">{metric.year3}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
