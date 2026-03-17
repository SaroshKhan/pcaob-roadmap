// Design: Institutional Modernism | Section: Market Context
// Warm neutral bg, gold accents for emphasis, serif for quotes

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { contextStats, industryQuotes } from '@/lib/roadmapData';
import { TrendingDown, Quote, ExternalLink } from 'lucide-react';

const AI_GOV_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/90961013/Tq827qtSGp9PRyxMktWeD6/ai-governance-UxrHcg2E2HduqAMr4goBMi.webp';

export default function ContextSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="context" className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
            Operating Context
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
            The Imperative for Data and AI Modernization
          </h2>
          <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
            PCAOB operates in an environment where audit firms are rapidly adopting AI, the SEC
            has created a dedicated AI Task Force, and the Board has signaled a clear mandate for
            technology-led innovation. The question is not whether to modernize, but how to do so
            with discipline and measurable accountability.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14"
        >
          {contextStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-[#16365C]/8 rounded-lg p-4 hover:border-[#16365C]/20 hover:shadow-sm transition-all group"
            >
              <p className="text-[10px] font-mono text-[#16365C]/40 uppercase tracking-wider mb-2 leading-tight">
                {stat.label}
              </p>
              <p className="font-mono text-xl font-bold text-[#16365C] mb-1">{stat.value}</p>
              <p className="text-[10px] text-[#16365C]/40 leading-tight">{stat.source}</p>
            </div>
          ))}
        </motion.div>

        {/* Two-column: Industry context + Quote */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Industry context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-lg font-bold text-[#16365C] mb-6">
              The Firms Are Moving. The Regulator Must Keep Pace.
            </h3>
            <div className="space-y-4">
              <div className="bg-white border border-[#16365C]/8 rounded-lg p-5">
                <p className="text-sm font-semibold text-[#16365C] mb-2">Big Four AI Adoption</p>
                <p className="text-sm text-[#16365C]/70 leading-relaxed">
                  All four major audit firms are deploying GenAI at scale. Deloitte's Omnia platform
                  won AI Innovation of the Year in 2024. KPMG is integrating AI agents into its Clara
                  smart audit platform for 95,000 auditors. EY and PwC have launched AI-powered tools
                  for audit evidence analysis and process documentation. The firms PCAOB oversees are
                  investing heavily in AI capabilities that the regulator must be equipped to evaluate.
                </p>
              </div>
              <div className="bg-white border border-[#16365C]/8 rounded-lg p-5">
                <p className="text-sm font-semibold text-[#16365C] mb-2">SEC AI Task Force</p>
                <p className="text-sm text-[#16365C]/70 leading-relaxed">
                  In August 2025, the SEC established a dedicated AI Task Force led by Chief AI Officer
                  Valerie Szczepanik to centralize and accelerate responsible AI adoption across the
                  Commission. PCAOB's enterprise data and AI investment aligns with this broader
                  regulatory modernization trajectory.
                </p>
              </div>
              <div className="bg-white border border-[#16365C]/8 rounded-lg p-5">
                <p className="text-sm font-semibold text-[#16365C] mb-2">Federal Modernization Benchmarks</p>
                <p className="text-sm text-[#16365C]/70 leading-relaxed">
                  The GAO reports that 11 critical federal legacy systems cost $754 million per year to
                  maintain. The OCC invests over $150 million annually in IT infrastructure. Against
                  these benchmarks, PCAOB's three-year data and AI investment of $7.3M to $9.5M
                  represents a measured, proportionate approach to modernization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quotes column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-semibold text-[#16365C]/60 uppercase tracking-wider mb-2">
              Leadership Signals
            </h3>
            {industryQuotes.map((q, i) => (
              <div
                key={i}
                className="bg-white border-l-3 rounded-lg p-5 shadow-sm"
                style={{ borderLeftColor: '#B8860B' }}
              >
                <Quote className="w-4 h-4 text-[#B8860B]/40 mb-2" />
                <p className="text-sm text-[#16365C]/80 font-serif italic leading-relaxed mb-3">
                  "{q.quote}"
                </p>
                <div>
                  <p className="text-xs font-semibold text-[#16365C]">{q.author}</p>
                  <p className="text-[10px] text-[#16365C]/50">{q.role} | {q.context}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
