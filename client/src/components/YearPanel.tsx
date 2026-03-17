// Design: Institutional Modernism | Component: Year Panel
// Expandable accordions, month-by-month milestones, GenAI market context

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import type { YearData } from '@/lib/roadmapData';
import {
  ChevronDown, ChevronRight, CheckCircle2, Brain,
  Database, BarChart3, BookOpen, Sparkles, Calendar,
  FileText, TrendingUp, Globe
} from 'lucide-react';

const categoryIcons = {
  governance: BookOpen,
  platform: Database,
  genai: Brain,
  analytics: BarChart3,
};

const categoryLabels = {
  governance: 'Governance',
  platform: 'Platform',
  genai: 'GenAI',
  analytics: 'Analytics',
};

interface YearPanelProps {
  year: YearData;
  index: number;
}

export default function YearPanel({ year, index }: YearPanelProps) {
  const { ref, isVisible } = useInView();
  const [expandedGenAI, setExpandedGenAI] = useState<number | null>(null);
  const [showDeliverables, setShowDeliverables] = useState(false);
  const [showMilestones, setShowMilestones] = useState(false);
  const [showDSTrace, setShowDSTrace] = useState(false);

  return (
    <section
      id={year.id}
      className="py-16"
      style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFAF8' }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Year header */}
          <div className="flex items-start gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
              style={{ backgroundColor: year.color }}
            >
              <span className="text-white font-mono text-base font-bold">
                Y{index + 1}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: year.color }}>
                  {year.theme}
                </h2>
                <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ backgroundColor: year.colorLight, color: year.color }}>
                  {year.window}
                </span>
              </div>
              <p className="text-[#16365C]/70 font-serif text-lg leading-relaxed max-w-3xl">
                {year.subtitle}
              </p>
            </div>
          </div>

          {/* Budget and staffing strip */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white border rounded-xl px-6 py-4 shadow-sm" style={{ borderColor: year.color + '20' }}>
              <p className="text-[10px] text-[#16365C]/50 font-mono uppercase tracking-wider mb-1">Investment</p>
              <p className="font-mono text-2xl font-bold" style={{ color: year.color }}>
                {year.budget.range || year.budget.base}
              </p>
            </div>
            <div className="bg-white border rounded-xl px-6 py-4 shadow-sm" style={{ borderColor: year.color + '20' }}>
              <p className="text-[10px] text-[#16365C]/50 font-mono uppercase tracking-wider mb-1">Team</p>
              <p className="font-mono text-2xl font-bold" style={{ color: year.color }}>
                {year.staffing.base}
              </p>
              {year.staffing.range && (
                <p className="text-[10px] text-[#16365C]/50 mt-0.5">{year.staffing.range}</p>
              )}
            </div>
            <div className="bg-white border rounded-xl px-6 py-4 shadow-sm" style={{ borderColor: year.color + '20' }}>
              <p className="text-[10px] text-[#16365C]/50 font-mono uppercase tracking-wider mb-1">GenAI Capabilities</p>
              <p className="font-mono text-2xl font-bold" style={{ color: year.color }}>
                {year.genAICapabilities.length}
              </p>
            </div>
            <div className="bg-white border rounded-xl px-6 py-4 shadow-sm" style={{ borderColor: year.color + '20' }}>
              <p className="text-[10px] text-[#16365C]/50 font-mono uppercase tracking-wider mb-1">Deliverables</p>
              <p className="font-mono text-2xl font-bold" style={{ color: year.color }}>
                {year.deliverables.length}
              </p>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* What Leadership Gets */}
            <div className="bg-white border border-[#B8860B]/15 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-[#B8860B] rounded-full" />
                <h3 className="text-lg font-bold text-[#16365C]">What Leadership Gets</h3>
              </div>
              <ul className="space-y-3">
                {year.leadershipGets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: year.color }} />
                    <span className="text-sm text-[#16365C]/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Must Be True */}
            <div className="bg-[#FAFAF8] border border-[#16365C]/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-[#16365C]/30 rounded-full" />
                <h3 className="text-lg font-bold text-[#16365C]">What Must Be True to Scale</h3>
              </div>
              <ul className="space-y-3">
                {year.mustBeTrue.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 mt-0.5 rounded border-2 flex-shrink-0" style={{ borderColor: year.color + '40' }} />
                    <span className="text-sm text-[#16365C]/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GenAI Capabilities */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5" style={{ color: year.color }} />
              <h3 className="text-lg font-bold text-[#16365C]">GenAI Capabilities</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full ml-1" style={{ backgroundColor: year.colorLight, color: year.color }}>
                AI-Enabled
              </span>
            </div>
            <div className="space-y-3">
              {year.genAICapabilities.map((cap, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden transition-all shadow-sm"
                  style={{ borderColor: expandedGenAI === i ? year.color + '40' : '#16365C10' }}
                >
                  <button
                    onClick={() => setExpandedGenAI(expandedGenAI === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFAF8] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: year.color + '10' }}>
                        <Brain className="w-4 h-4 flex-shrink-0" style={{ color: year.color }} />
                      </div>
                      <span className="font-semibold text-sm text-[#16365C]">{cap.name}</span>
                    </div>
                    {expandedGenAI === i ? (
                      <ChevronDown className="w-4 h-4 text-[#16365C]/40" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#16365C]/40" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedGenAI === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 border-t" style={{ borderColor: year.color + '10' }}>
                          <div className="grid md:grid-cols-2 gap-5 pt-5">
                            <div>
                              <p className="text-[10px] font-semibold text-[#16365C]/50 uppercase tracking-wider mb-2">Description</p>
                              <p className="text-sm text-[#16365C]/70 leading-relaxed">{cap.description}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-[#16365C]/50 uppercase tracking-wider mb-2">Value Case</p>
                              <p className="text-sm text-[#16365C]/70 leading-relaxed">{cap.valueCase}</p>
                            </div>
                          </div>
                          {cap.marketContext && (
                            <div className="mt-4 bg-[#16365C]/3 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Globe className="w-3.5 h-3.5 text-[#4A7C9B]" />
                                <p className="text-[10px] font-semibold text-[#4A7C9B] uppercase tracking-wider">Market Context</p>
                              </div>
                              <p className="text-xs text-[#16365C]/60 leading-relaxed">{cap.marketContext}</p>
                            </div>
                          )}
                          <div className="mt-3 flex items-center gap-2">
                            <FileText className="w-3 h-3 text-[#B8860B]" />
                            <span className="text-xs text-[#B8860B] font-mono">{cap.dsReference}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones (collapsible) */}
          <div className="mb-6">
            <button
              onClick={() => setShowMilestones(!showMilestones)}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              {showMilestones ? (
                <ChevronDown className="w-5 h-5 text-[#16365C]/40" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#16365C]/40" />
              )}
              <Calendar className="w-4 h-4" style={{ color: year.color }} />
              <h3 className="text-lg font-bold text-[#16365C]">
                {index === 0 ? 'Month-by-Month Milestones' : 'Quarterly Milestones'}
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#16365C]/5 text-[#16365C]/50">
                {year.milestones.length}
              </span>
            </button>
            <AnimatePresence>
              {showMilestones && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="relative pl-6 border-l-2 ml-3 space-y-0" style={{ borderColor: year.color + '30' }}>
                    {year.milestones.map((ms, i) => (
                      <div key={i} className="relative pb-6 last:pb-0">
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-[calc(1.5rem+5px)] w-2.5 h-2.5 rounded-full border-2 bg-white"
                          style={{ borderColor: year.color }}
                        />
                        <div className="bg-white border border-[#16365C]/8 rounded-lg p-4 ml-2 hover:shadow-sm transition-shadow">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: year.colorLight, color: year.color }}>
                              {ms.period}
                            </span>
                            <span className="font-semibold text-sm text-[#16365C]">{ms.title}</span>
                          </div>
                          <p className="text-sm text-[#16365C]/70 leading-relaxed mb-2">{ms.deliverables}</p>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                            <span className="text-xs text-[#2E7D32]/70">{ms.qualityCheck}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Deliverables (collapsible) */}
          <div className="mb-6">
            <button
              onClick={() => setShowDeliverables(!showDeliverables)}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              {showDeliverables ? (
                <ChevronDown className="w-5 h-5 text-[#16365C]/40" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#16365C]/40" />
              )}
              <h3 className="text-lg font-bold text-[#16365C]">Deliverables</h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#16365C]/5 text-[#16365C]/50">
                {year.deliverables.length}
              </span>
            </button>
            <AnimatePresence>
              {showDeliverables && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    {year.deliverables.map((del, i) => {
                      const Icon = categoryIcons[del.category];
                      return (
                        <div key={i} className="flex items-start gap-3 bg-white border border-[#16365C]/5 rounded-lg p-4 hover:shadow-sm transition-shadow">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: year.colorLight }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: year.color }} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#16365C]">{del.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-mono text-[#16365C]/40">{del.quarter}</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: year.colorLight, color: year.color }}>
                                {categoryLabels[del.category]}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DS Traceability (collapsible) */}
          <div>
            <button
              onClick={() => setShowDSTrace(!showDSTrace)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {showDSTrace ? (
                <ChevronDown className="w-5 h-5 text-[#16365C]/40" />
              ) : (
                <ChevronRight className="w-5 h-5 text-[#16365C]/40" />
              )}
              <h3 className="text-sm font-semibold text-[#16365C]/60">Data Strategy Traceability</h3>
            </button>
            <AnimatePresence>
              {showDSTrace && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pl-7 space-y-1.5">
                    {year.dsTraceability.map((item, i) => (
                      <p key={i} className="text-xs text-[#16365C]/50 font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/40 flex-shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
