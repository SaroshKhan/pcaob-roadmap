// Design: Institutional Modernism | Component: Decision Gate
// Clean dark blue bg with gold accents, white text, metric cards, recommended action

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import type { GateData } from '@/lib/roadmapData';
import { ShieldCheck, ArrowRight, Target } from 'lucide-react';

interface GateSectionProps {
  gate: GateData;
}

const statusConfig = {
  'on-track': { bg: '#E6F4EA', text: '#1B7A3D', label: 'On Track' },
  'at-risk': { bg: '#FFF3E0', text: '#E65100', label: 'At Risk' },
  'not-started': { bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.5)', label: 'Pending' },
};

export default function GateSection({ gate }: GateSectionProps) {
  const { ref, isVisible } = useInView();

  return (
    <section
      id={gate.id}
      className="py-16 bg-[#16365C]"
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Gate header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-[#B8860B] flex items-center justify-center rotate-45 shadow-lg shadow-[#B8860B]/20">
              <ShieldCheck className="w-6 h-6 text-white -rotate-45" />
            </div>
            <div>
              <p className="text-[#B8860B] font-mono text-xs tracking-[0.2em] uppercase">
                Decision Gate
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {gate.name}: {gate.timing}
              </h2>
            </div>
          </div>

          <p className="text-white/75 font-serif text-lg leading-relaxed max-w-3xl mb-10">
            {gate.description}
          </p>

          {/* Metrics grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {gate.metrics.map((metric, i) => {
              const status = statusConfig[metric.status];
              return (
                <div key={i} className="bg-white/[0.06] border border-white/[0.10] rounded-xl p-5 hover:bg-white/[0.08] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <Target className="w-4 h-4 text-[#B8860B]" />
                    <span
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: status.bg, color: status.text }}
                    >
                      {status.label}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm mb-2 leading-snug">{metric.name}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{metric.target}</p>
                </div>
              );
            })}
          </div>

          {/* Recommended action */}
          <div className="bg-[#B8860B]/10 border border-[#B8860B]/25 rounded-xl px-6 py-5 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#B8860B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-4 h-4 text-[#B8860B]" />
              </div>
              <div>
                <p className="text-[#B8860B] font-semibold text-sm mb-1.5">Recommended Action</p>
                <p className="text-white/75 text-sm leading-relaxed">{gate.recommendedAction}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
