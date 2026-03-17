// Design: Institutional Modernism | Section: Scenarios
// Clustered column chart comparing two scenarios, value realization text box
// No team size chart, no FTE references

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { scenarios } from '@/lib/roadmapData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowRight, Zap } from 'lucide-react';

const COLORS = {
  base: '#16365C',
  accelerated: '#4A7C9B',
};

export default function ScenarioSection() {
  const { ref, isVisible } = useInView();

  // Build clustered data for the chart
  const chartData = [
    {
      year: '2026',
      'Base Case': scenarios[0].years[0].budget,
      'Accelerated': scenarios[1].years[0].budget,
    },
    {
      year: '2027',
      'Base Case': scenarios[0].years[1].budget,
      'Accelerated': scenarios[1].years[1].budget,
    },
    {
      year: '2028',
      'Base Case': scenarios[0].years[2].budget,
      'Accelerated': scenarios[1].years[2].budget,
    },
  ];

  const baseTotal = scenarios[0].years.reduce((sum, y) => sum + y.budget, 0);
  const accelTotal = scenarios[1].years.reduce((sum, y) => sum + y.budget, 0);

  return (
    <section id="scenarios" className="py-20 bg-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-12">
            <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
              Investment Scenarios
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
              Two Paths, One Commitment
            </h2>
            <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
              Both scenarios share the same Year 1 foundation investment. The difference emerges
              in Years 2 and 3, where the accelerated path delivers greater mission impact sooner
              through expanded GenAI capabilities and faster platform buildout.
            </p>
          </div>

          {/* Scenario descriptions */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {scenarios.map((scenario, i) => (
              <div
                key={i}
                className="border rounded-xl p-6"
                style={{
                  borderColor: i === 0 ? COLORS.base + '20' : COLORS.accelerated + '20',
                  backgroundColor: i === 0 ? '#FAFAF8' : '#F5F9FB',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: i === 0 ? COLORS.base : COLORS.accelerated }}
                  />
                  <h3 className="font-bold text-[#16365C]">{scenario.name}</h3>
                  <span
                    className="font-mono text-sm font-bold ml-auto"
                    style={{ color: i === 0 ? COLORS.base : COLORS.accelerated }}
                  >
                    ${i === 0 ? baseTotal.toFixed(1) : accelTotal.toFixed(1)}M
                  </span>
                </div>
                <p className="text-sm text-[#16365C]/70 leading-relaxed mb-4">{scenario.description}</p>
                <div className="flex gap-3">
                  {scenario.years.map((y, j) => (
                    <div key={j} className="flex-1 bg-white rounded-lg p-3 border border-[#16365C]/5 text-center">
                      <p className="text-[10px] font-mono text-[#16365C]/40 mb-1">{y.year}</p>
                      <p className="font-mono text-sm font-bold text-[#16365C]">${y.budget}M</p>
                      <p className="text-[10px] text-[#16365C]/40 mt-0.5">{y.genAIMaturity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Clustered Column Chart + Value Realization Box */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 bg-[#FAFAF8] border border-[#16365C]/8 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-[#16365C]/60 uppercase tracking-wider mb-6">
                Annual Investment Comparison
              </h3>
              <div style={{ width: '100%', minHeight: '340px' }}>
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={chartData} barGap={4} barCategoryGap="25%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#16365C10" />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: '#16365C80', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}
                      axisLine={{ stroke: '#16365C15' }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: '#16365C80', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}
                      axisLine={{ stroke: '#16365C15' }}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}M`}
                      domain={[0, 7]}
                    />
                    <Tooltip
                      formatter={(value: number) => [`$${value}M`, '']}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #16365C15',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}
                    />
                    <Bar dataKey="Base Case" fill={COLORS.base} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Accelerated" fill={COLORS.accelerated} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Value Realization Text Box */}
            <div className="bg-gradient-to-br from-[#16365C] to-[#1a4a6a] rounded-xl p-6 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#B8860B]" />
                  <h3 className="font-bold text-sm">Why the Accelerated Path Delivers More Value Sooner</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#B8860B] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">GenAI Reaches Operational Scale in 2027</p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        The additional investment in Year 2 expands GenAI from pilot workflows to
                        operational tools across three or more divisions by mid-2027, rather than
                        end-of-year. Cross-engagement pattern analysis and enforcement
                        case intelligence become available six months earlier.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#B8860B] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Predictive Risk Modeling Arrives in Early 2028</p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        The Year 3 accelerated budget enables predictive audit risk modeling to
                        reach production in Q1 2028 rather than Q3, giving PCAOB a full inspection
                        cycle of data-driven selection before the 2028 annual report.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#B8860B] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Compounding Returns on Earlier Investment</p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Every month of operational GenAI generates measurable efficiency gains.
                        Accelerating the timeline by six months in Year 2 and three months in Year 3
                        compounds into significantly greater cumulative value over the three-year arc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#B8860B]" />
                  <p className="text-xs text-white/50">
                    The incremental ${(accelTotal - baseTotal).toFixed(1)}M over three years
                    accelerates value realization by 6-9 months across all major capability areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary comparison table */}
          <div className="overflow-x-auto rounded-xl border border-[#16365C]/8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#FAFAF8]">
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold text-[#16365C]/50 uppercase tracking-wider">Dimension</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: COLORS.base }}>Base Case</th>
                  <th className="text-left py-3.5 px-5 text-[10px] font-semibold uppercase tracking-wider" style={{ color: COLORS.accelerated }}>Accelerated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: 'Three-Year Total', base: `$${baseTotal.toFixed(1)}M`, accel: `$${accelTotal.toFixed(1)}M` },
                  { dim: 'GenAI Operational by', base: 'Q4 2027', accel: 'Q2 2027' },
                  { dim: 'Predictive Risk Model', base: 'Q3 2028', accel: 'Q1 2028' },
                  { dim: 'Divisions Served by End of Year 2', base: '3', accel: '4-5' },
                  { dim: 'Automated Reporting Coverage', base: 'Top 10 reports', accel: 'Top 15 reports + ad hoc' },
                  { dim: 'Internal Capability Transition', base: 'Q4 2028', accel: 'Q3 2028' },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[#16365C]/5 hover:bg-[#16365C]/[0.02] transition-colors">
                    <td className="py-3.5 px-5 text-sm font-medium text-[#16365C]">{row.dim}</td>
                    <td className="py-3.5 px-5 text-sm text-[#16365C]/70">{row.base}</td>
                    <td className="py-3.5 px-5 text-sm text-[#16365C]/70">{row.accel}</td>
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
