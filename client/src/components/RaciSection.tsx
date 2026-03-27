// Design: Institutional Modernism | Section: Executive RACI Matrix
// MECE task groups, one A per row, ideally one R, liberal C and I
// Columns are individuals/roles involved in the program

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

type RaciValue = 'R' | 'A' | 'C' | 'I' | '';

interface RaciRow {
  task: string;
  group: string;
  values: Record<string, RaciValue>;
}

const roles = [
  { id: 'cio', label: 'CIO', short: 'CIO' },
  { id: 'cto', label: 'CTO / Platform Lead', short: 'CTO' },
  { id: 'program', label: 'Program Lead', short: 'PGM' },
  { id: 'governance', label: 'Data Governance Council', short: 'DGC' },
  { id: 'divisions', label: 'Division Directors', short: 'DIV' },
  { id: 'security', label: 'CISO / Security', short: 'SEC' },
  { id: 'budget', label: 'Budget Office', short: 'BUD' },
  { id: 'chair', label: "Chair's Office", short: 'CHR' },
];

const groups = [
  'Strategic Governance',
  'Data Platform & Architecture',
  'GenAI Capabilities',
  'Change Management & Adoption',
  'Budget & Investment',
  'Security & Compliance',
];

const raciData: RaciRow[] = [
  // Strategic Governance
  {
    group: 'Strategic Governance',
    task: 'Approve enterprise data strategy and annual roadmap updates',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'C', divisions: 'I', security: 'I', budget: 'I', chair: 'C' },
  },
  {
    group: 'Strategic Governance',
    task: 'Chair Data Governance Council and set data policy',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'R', divisions: 'C', security: 'C', budget: 'I', chair: 'I' },
  },
  {
    group: 'Strategic Governance',
    task: 'Conduct Gate A / Gate B decision reviews',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'C', divisions: 'C', security: 'C', budget: 'C', chair: 'I' },
  },
  {
    group: 'Strategic Governance',
    task: 'Maintain executive RACI and update annually',
    values: { cio: 'A', cto: 'I', program: 'R', governance: 'C', divisions: 'I', security: 'I', budget: 'I', chair: 'I' },
  },

  // Data Platform & Architecture
  {
    group: 'Data Platform & Architecture',
    task: 'Design and operate Enterprise Data Hub',
    values: { cio: 'I', cto: 'A', program: 'C', governance: 'I', divisions: 'I', security: 'C', budget: 'I', chair: '' },
  },
  {
    group: 'Data Platform & Architecture',
    task: 'Build and maintain enterprise ingestion factory',
    values: { cio: 'I', cto: 'A', program: 'R', governance: 'I', divisions: 'C', security: 'I', budget: 'I', chair: '' },
  },
  {
    group: 'Data Platform & Architecture',
    task: 'Manage enterprise data catalog and metadata',
    values: { cio: 'I', cto: 'A', program: 'R', governance: 'C', divisions: 'C', security: 'I', budget: 'I', chair: '' },
  },
  {
    group: 'Data Platform & Architecture',
    task: 'Define data quality standards and monitoring',
    values: { cio: 'I', cto: 'C', program: 'R', governance: 'A', divisions: 'C', security: 'I', budget: 'I', chair: '' },
  },

  // GenAI Capabilities
  {
    group: 'GenAI Capabilities',
    task: 'Identify and prioritize GenAI champion workflows',
    values: { cio: 'C', cto: 'C', program: 'A', governance: 'I', divisions: 'R', security: 'I', budget: 'I', chair: 'I' },
  },
  {
    group: 'GenAI Capabilities',
    task: 'Develop and deploy GenAI solutions',
    values: { cio: 'I', cto: 'A', program: 'R', governance: 'I', divisions: 'C', security: 'C', budget: 'I', chair: '' },
  },
  {
    group: 'GenAI Capabilities',
    task: 'Establish GenAI governance framework and evaluation rubrics',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'C', divisions: 'I', security: 'C', budget: 'I', chair: 'I' },
  },
  {
    group: 'GenAI Capabilities',
    task: 'Measure and report GenAI value realization',
    values: { cio: 'C', cto: 'I', program: 'A', governance: 'I', divisions: 'C', security: 'I', budget: 'C', chair: 'I' },
  },

  // Change Management & Adoption
  {
    group: 'Change Management & Adoption',
    task: 'Develop AI-readiness change management strategy',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'C', divisions: 'C', security: 'I', budget: 'I', chair: 'I' },
  },
  {
    group: 'Change Management & Adoption',
    task: 'Recruit and support three division champions',
    values: { cio: 'C', cto: 'I', program: 'A', governance: 'I', divisions: 'R', security: 'I', budget: 'I', chair: 'I' },
  },
  {
    group: 'Change Management & Adoption',
    task: 'Deliver data literacy and GenAI training programs',
    values: { cio: 'I', cto: 'C', program: 'A', governance: 'C', divisions: 'R', security: 'I', budget: 'I', chair: '' },
  },
  {
    group: 'Change Management & Adoption',
    task: 'Manage stakeholder communications and Board briefings',
    values: { cio: 'A', cto: 'I', program: 'R', governance: 'I', divisions: 'I', security: 'I', budget: 'I', chair: 'C' },
  },

  // Budget & Investment
  {
    group: 'Budget & Investment',
    task: 'Prepare annual budget justification for data program',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'I', divisions: 'I', security: 'I', budget: 'C', chair: 'I' },
  },
  {
    group: 'Budget & Investment',
    task: 'Manage MSP contract and service-level expectations',
    values: { cio: 'A', cto: 'C', program: 'R', governance: 'I', divisions: 'I', security: 'I', budget: 'C', chair: '' },
  },
  {
    group: 'Budget & Investment',
    task: 'Track and report cost avoidance and ROI metrics',
    values: { cio: 'C', cto: 'I', program: 'A', governance: 'I', divisions: 'C', security: 'I', budget: 'R', chair: 'I' },
  },

  // Security & Compliance
  {
    group: 'Security & Compliance',
    task: 'Review and approve GenAI tooling within security perimeter',
    values: { cio: 'I', cto: 'C', program: 'I', governance: 'I', divisions: 'I', security: 'A', budget: 'I', chair: '' },
  },
  {
    group: 'Security & Compliance',
    task: 'Define data classification and access control policies',
    values: { cio: 'C', cto: 'C', program: 'I', governance: 'C', divisions: 'I', security: 'A', budget: 'I', chair: '' },
  },
  {
    group: 'Security & Compliance',
    task: 'Conduct privacy and compliance assessments for AI use cases',
    values: { cio: 'I', cto: 'C', program: 'C', governance: 'I', divisions: 'I', security: 'A', budget: 'I', chair: '' },
  },
];

function RaciBadge({ value }: { value: RaciValue }) {
  if (!value) return <span className="text-[#16365C]/10">—</span>;

  const styles: Record<string, string> = {
    R: 'bg-[#16365C] text-white',
    A: 'bg-[#B8860B] text-white',
    C: 'bg-[#4A7C9B]/15 text-[#4A7C9B]',
    I: 'bg-[#16365C]/5 text-[#16365C]/40',
  };

  return (
    <span className={cn('inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-mono font-bold', styles[value])}>
      {value}
    </span>
  );
}

export default function RaciSection() {
  const { ref, isVisible } = useInView();
  const [expandedGroup, setExpandedGroup] = useState<string | null>('Strategic Governance');

  return (
    <section id="raci" className="py-20 bg-white">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-10">
            <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
              Accountability Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
              Executive RACI Matrix
            </h2>
            <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
              A clear accountability structure across the enterprise data program. Each task has
              exactly one Accountable owner and a defined Responsible party, with Consulted and
              Informed stakeholders identified to support effective decision-making. This matrix
              is designed to be updated annually as the program matures.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { letter: 'R', label: 'Responsible', desc: 'Does the work' },
              { letter: 'A', label: 'Accountable', desc: 'Owns the outcome' },
              { letter: 'C', label: 'Consulted', desc: 'Provides input' },
              { letter: 'I', label: 'Informed', desc: 'Kept in the loop' },
            ].map((item) => (
              <div key={item.letter} className="flex items-center gap-2">
                <RaciBadge value={item.letter as RaciValue} />
                <div>
                  <span className="text-xs font-semibold text-[#16365C]">{item.label}</span>
                  <span className="text-xs text-[#16365C]/40 ml-1">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* RACI Table by Group */}
          <div className="space-y-3">
            {groups.map((group) => {
              const groupRows = raciData.filter((r) => r.group === group);
              const isExpanded = expandedGroup === group;

              return (
                <div key={group} className="border border-[#16365C]/8 rounded-xl overflow-hidden">
                  {/* Group header */}
                  <button
                    onClick={() => setExpandedGroup(isExpanded ? null : group)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#FAFAF8] hover:bg-[#F5F5F0] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
                      <span className="font-semibold text-sm text-[#16365C]">{group}</span>
                      <span className="text-xs text-[#16365C]/40 font-mono">{groupRows.length} tasks</span>
                    </div>
                    <svg
                      className={cn('w-4 h-4 text-[#16365C]/40 transition-transform', isExpanded && 'rotate-180')}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded table */}
                  {isExpanded && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-t border-[#16365C]/8">
                            <th className="text-left px-6 py-3 text-[10px] font-mono text-[#16365C]/40 uppercase tracking-wider w-[35%]">
                              Task
                            </th>
                            {roles.map((role) => (
                              <th key={role.id} className="px-2 py-3 text-center">
                                <span className="text-[10px] font-mono text-[#16365C]/40 uppercase tracking-wider">
                                  {role.short}
                                </span>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {groupRows.map((row, i) => (
                            <tr
                              key={i}
                              className={cn(
                                'border-t border-[#16365C]/5',
                                i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]/50'
                              )}
                            >
                              <td className="px-6 py-3.5 text-sm text-[#16365C]/80 leading-snug">
                                {row.task}
                              </td>
                              {roles.map((role) => (
                                <td key={role.id} className="px-2 py-3.5 text-center">
                                  <RaciBadge value={row.values[role.id]} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Role legend */}
          <div className="mt-8 bg-[#FAFAF8] border border-[#16365C]/8 rounded-xl p-6">
            <p className="text-xs font-semibold text-[#16365C]/50 uppercase tracking-wider mb-4">
              Role Definitions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#16365C]/5 text-[10px] font-mono font-bold text-[#16365C]/60">
                    {role.short}
                  </span>
                  <span className="text-xs text-[#16365C]/70">{role.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
