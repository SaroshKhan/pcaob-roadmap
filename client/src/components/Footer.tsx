// Design: Institutional Modernism | Component: Footer
// Navy bg, three columns, CIO script, document references

import { useState } from 'react';
import { cioScript } from '@/lib/roadmapData';
import { Landmark, ChevronDown, ChevronRight, FileText, BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [showScript, setShowScript] = useState(false);

  return (
    <footer className="bg-[#0D2240] relative overflow-hidden">
      {/* Subtle top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent" />

      <div className="container py-14">
        {/* CIO Presentation Script */}
        <div className="mb-10">
          <button
            onClick={() => setShowScript(!showScript)}
            className="flex items-center gap-2 mb-4 group"
          >
            {showScript ? (
              <ChevronDown className="w-4 h-4 text-[#B8860B]/60" />
            ) : (
              <ChevronRight className="w-4 h-4 text-[#B8860B]/60" />
            )}
            <FileText className="w-4 h-4 text-[#B8860B]" />
            <span className="text-sm font-semibold text-[#B8860B] group-hover:text-[#B8860B]/80 transition-colors">
              CIO Presentation Script
            </span>
          </button>
          {showScript && (
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 max-w-4xl ml-6">
              <p className="text-white/60 font-serif text-sm leading-relaxed italic">
                "{cioScript}"
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="w-4 h-4 text-[#B8860B]" />
              <h4 className="text-white font-semibold text-sm">PCAOB Enterprise Data Roadmap</h4>
            </div>
            <p className="text-white/35 text-xs leading-relaxed">
              A three-year strategic plan for building enterprise data and AI capabilities
              that strengthen PCAOB oversight of the auditing profession. This roadmap is
              structured around decision gates that ensure fiscal discipline and evidence-based
              investment scaling.
            </p>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">Key Documents</h4>
            <ul className="space-y-2.5">
              {[
                'Enterprise Data Strategy',
                'Statement of Work — Data Managed Service',
                'PCAOB Request for Proposal 09OT2025',
                'Comprehensive Context and Scenario Synthesis',
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <BookOpen className="w-3 h-3 text-white/20 flex-shrink-0" />
                  <span className="text-white/35 text-xs">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/50 font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">Framework References</h4>
            <ul className="space-y-2.5">
              {[
                'PCAOB Strategic Plan 2022-2026',
                'PCAOB GenAI Spotlight (July 2024)',
                'Christina Ho: Four Strategies for a Tech-Forward Future',
                'SEC AI Task Force (August 2025)',
                'SEC 2026 Budget Approval',
              ].map((ref, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3 text-white/20 flex-shrink-0" />
                  <span className="text-white/35 text-xs">{ref}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            Office of Technology | Enterprise Data Program
          </p>
          <p className="text-white/20 text-xs font-mono">
            Version 1.0 | March 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
