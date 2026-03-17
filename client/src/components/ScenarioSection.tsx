// Design: Institutional Modernism | Section: Investment Scenarios
// Dark bg, scenario toggle, recharts bar charts, summary metrics

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { scenarios } from '@/lib/roadmapData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DATA_FLOW_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/90961013/Tq827qtSGp9PRyxMktWeD6/data-flow-abstract-WTLVLHXdiS3MWc7GvGfQsJ.webp';

export default function ScenarioSection() {
  const { ref, isVisible } = useInView();
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = scenarios[activeScenario];

  const budgetData = scenario.years.map(y => ({
    year: y.year.toString(),
    budget: y.budget,
  }));

  const staffingData = scenario.years.map(y => ({
    year: y.year.toString(),
    staffing: y.staffing,
  }));

  const yearColors = ['#16365C', '#4A7C9B', '#2D6A6A'];
  const totalBudget = scenario.years.reduce((sum, y) => sum + y.budget, 0);

  return (
    <section id="scenarios" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0A1628' }}>
      <div className="absolute inset-0 opacity-10">
        <img src={DATA_FLOW_IMG} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-12">
            <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
              Investment Scenarios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Two Paths, One Commitment to Fiscal Discipline
            </h2>
            <p className="text-white/55 text-lg font-serif leading-relaxed">
              Both scenarios deliver meaningful value. The difference is pace and scope, not
              fiscal responsibility. Each path is governed by the same decision gates.
            </p>
          </div>

          {/* Scenario toggle */}
          <div className="flex gap-3 mb-10">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveScenario(i)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeScenario === i
                    ? 'bg-[#B8860B] text-white shadow-lg shadow-[#B8860B]/20'
                    : 'bg-white/[0.06] text-white/50 border border-white/[0.10] hover:bg-white/[0.10]'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Scenario description */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 mb-10 max-w-3xl">
            <p className="text-white/65 text-sm leading-relaxed font-serif">{scenario.description}</p>
          </div>

          {/* Charts grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Budget chart */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm mb-1">Annual Investment</h3>
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-6">Millions USD</p>
              <div style={{ width: '100%', height: 256, minWidth: 200 }}>
                <ResponsiveContainer width="100%" height={256}>
                  <BarChart data={budgetData} barSize={52}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.25)" fontSize={12} fontFamily="JetBrains Mono" />
                    <YAxis stroke="rgba(255,255,255,0.25)" fontSize={12} fontFamily="JetBrains Mono" tickFormatter={(v) => `$${v}M`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#16365C',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: 'white',
                        fontFamily: 'JetBrains Mono',
                        fontSize: '12px',
                      }}
                      formatter={(value: number) => [`$${value}M`, 'Investment']}
                    />
                    <Bar dataKey="budget" radius={[6, 6, 0, 0]}>
                      {budgetData.map((_, i) => (
                        <Cell key={i} fill={yearColors[i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Staffing chart */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm mb-1">Team Size</h3>
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-6">Full-Time Equivalents</p>
              <div style={{ width: '100%', height: 256, minWidth: 200 }}>
                <ResponsiveContainer width="100%" height={256}>
                  <BarChart data={staffingData} barSize={52}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="year" stroke="rgba(255,255,255,0.25)" fontSize={12} fontFamily="JetBrains Mono" />
                    <YAxis stroke="rgba(255,255,255,0.25)" fontSize={12} fontFamily="JetBrains Mono" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#16365C',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '10px',
                        color: 'white',
                        fontFamily: 'JetBrains Mono',
                        fontSize: '12px',
                      }}
                      formatter={(value: number) => [`${value} FTE`, 'Team']}
                    />
                    <Bar dataKey="staffing" radius={[6, 6, 0, 0]}>
                      {staffingData.map((_, i) => (
                        <Cell key={i} fill={yearColors[i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Summary metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2">Three-Year Total</p>
              <p className="text-white font-mono text-2xl font-bold">${totalBudget.toFixed(1)}M</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2">Peak Team Size</p>
              <p className="text-white font-mono text-2xl font-bold">
                {scenario.years[scenario.years.length - 1].staffing} FTE
              </p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2">GenAI Maturity (Y3)</p>
              <p className="text-white font-mono text-2xl font-bold">
                {scenario.years[scenario.years.length - 1].genAIMaturity}
              </p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center">
              <p className="text-[#B8860B]/50 text-[10px] font-mono uppercase tracking-wider mb-2">Decision Gates</p>
              <p className="text-[#B8860B] font-mono text-2xl font-bold">2</p>
            </div>
          </div>

          {/* Year-by-year comparison table */}
          <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/[0.03]">
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-white/30 uppercase tracking-wider font-mono">Year</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-white/30 uppercase tracking-wider font-mono">Investment</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-white/30 uppercase tracking-wider font-mono">Team</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-white/30 uppercase tracking-wider font-mono">GenAI Maturity</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-white/30 uppercase tracking-wider font-mono">Gate</th>
                </tr>
              </thead>
              <tbody>
                {scenario.years.map((y, i) => (
                  <tr key={i} className="border-t border-white/[0.05]">
                    <td className="py-3.5 px-5">
                      <span className="font-mono text-sm font-semibold" style={{ color: yearColors[i] }}>
                        {y.year}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-sm text-white">${y.budget}M</td>
                    <td className="py-3.5 px-5 font-mono text-sm text-white">{y.staffing} FTE</td>
                    <td className="py-3.5 px-5 text-sm text-white/65">{y.genAIMaturity}</td>
                    <td className="py-3.5 px-5">
                      {i < 2 && (
                        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#B8860B]/12 text-[#B8860B]">
                          Gate {i === 0 ? 'A' : 'B'}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
