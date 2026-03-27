// Design: Institutional Modernism | Section: Timeline
// Horizontal gated timeline, warm bg, year cards with gate diamonds
// No FTE references

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function TimelineSection() {
  const { ref, isVisible } = useInView();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      <div className="container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#B8860B] font-mono text-xs tracking-widest uppercase mb-3">
            Three-Year Roadmap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16365C] tracking-tight mb-4">
            A Gated Path from Foundation to Institutional Capability
          </h2>
          <p className="text-[#16365C]/70 text-lg font-serif leading-relaxed">
            Each phase delivers standalone value while building toward the next. Decision gates
            ensure that every scale-up is earned through demonstrated results.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline connector line */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#16365C]/20 via-[#B8860B]/30 to-[#2D6A6A]/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {/* Year 1 */}
            <div className="md:col-span-1 relative">
              <button onClick={() => scrollTo('year-1')} className="w-full text-left group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#16365C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10 relative shadow-lg shadow-[#16365C]/20">
                    <span className="text-white font-mono text-xs font-bold">Y1</span>
                  </div>
                  <div className="bg-white border border-[#16365C]/10 rounded-xl p-5 w-full group-hover:border-[#16365C]/25 group-hover:shadow-lg transition-all">
                    <p className="font-mono text-[10px] text-[#16365C]/40 mb-1.5 tracking-wider">LATE APR — DEC 2026</p>
                    <p className="font-semibold text-sm text-[#16365C] mb-2">Foundation</p>
                    <p className="font-mono text-xl font-bold text-[#16365C]">$0.7M</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Gate A */}
            <div className="md:col-span-1 relative flex items-start justify-center pt-1">
              <button onClick={() => scrollTo('gate-a')} className="group flex flex-col items-center">
                <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10 relative shadow-lg shadow-[#B8860B]/20 rotate-45 rounded-md">
                  <span className="text-white font-mono text-[10px] font-bold -rotate-45">A</span>
                </div>
                <div className="bg-[#B8860B]/5 border border-[#B8860B]/15 rounded-xl px-4 py-3 group-hover:border-[#B8860B]/30 transition-all">
                  <p className="font-mono text-xs text-[#B8860B] text-center font-semibold">Gate A</p>
                  <p className="text-[10px] text-[#B8860B]/50 text-center font-mono">Dec 2026</p>
                  <p className="text-[10px] text-[#B8860B]/40 text-center mt-1">Scale decision</p>
                </div>
              </button>
            </div>

            {/* Year 2 */}
            <div className="md:col-span-1 relative">
              <button onClick={() => scrollTo('year-2')} className="w-full text-left group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#4A7C9B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10 relative shadow-lg shadow-[#4A7C9B]/20">
                    <span className="text-white font-mono text-xs font-bold">Y2</span>
                  </div>
                  <div className="bg-white border border-[#4A7C9B]/10 rounded-xl p-5 w-full group-hover:border-[#4A7C9B]/25 group-hover:shadow-lg transition-all">
                    <p className="font-mono text-[10px] text-[#4A7C9B]/40 mb-1.5 tracking-wider">JAN — DEC 2027</p>
                    <p className="font-semibold text-sm text-[#4A7C9B] mb-2">Scale</p>
                    <p className="font-mono text-xl font-bold text-[#4A7C9B]">$3.5M — $5M</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Gate B */}
            <div className="md:col-span-1 relative flex items-start justify-center pt-1">
              <button onClick={() => scrollTo('gate-b')} className="group flex flex-col items-center">
                <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10 relative shadow-lg shadow-[#B8860B]/20 rotate-45 rounded-md">
                  <span className="text-white font-mono text-[10px] font-bold -rotate-45">B</span>
                </div>
                <div className="bg-[#B8860B]/5 border border-[#B8860B]/15 rounded-xl px-4 py-3 group-hover:border-[#B8860B]/30 transition-all">
                  <p className="font-mono text-xs text-[#B8860B] text-center font-semibold">Gate B</p>
                  <p className="text-[10px] text-[#B8860B]/50 text-center font-mono">Dec 2027</p>
                  <p className="text-[10px] text-[#B8860B]/40 text-center mt-1">Invest decision</p>
                </div>
              </button>
            </div>

            {/* Year 3 */}
            <div className="md:col-span-1 relative">
              <button onClick={() => scrollTo('year-3')} className="w-full text-left group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2D6A6A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10 relative shadow-lg shadow-[#2D6A6A]/20">
                    <span className="text-white font-mono text-xs font-bold">Y3</span>
                  </div>
                  <div className="bg-white border border-[#2D6A6A]/10 rounded-xl p-5 w-full group-hover:border-[#2D6A6A]/25 group-hover:shadow-lg transition-all">
                    <p className="font-mono text-[10px] text-[#2D6A6A]/40 mb-1.5 tracking-wider">JAN — DEC 2028</p>
                    <p className="font-semibold text-sm text-[#2D6A6A] mb-2">Institutionalize</p>
                    <p className="font-mono text-xl font-bold text-[#2D6A6A]">$5M — $7M</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Total investment summary */}
          <div className="mt-14 flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <p className="font-mono text-[10px] text-[#16365C]/40 uppercase tracking-wider mb-1.5">Three-Year Total (Base)</p>
              <p className="font-mono text-3xl font-bold text-[#16365C]">$9.2M</p>
            </div>
            <div className="w-px h-12 bg-[#16365C]/10 hidden md:block" />
            <div className="text-center">
              <p className="font-mono text-[10px] text-[#16365C]/40 uppercase tracking-wider mb-1.5">Three-Year Total (Accelerated)</p>
              <p className="font-mono text-3xl font-bold text-[#16365C]">$12.7M</p>
            </div>
            <div className="w-px h-12 bg-[#16365C]/10 hidden md:block" />
            <div className="text-center">
              <p className="font-mono text-[10px] text-[#B8860B]/60 uppercase tracking-wider mb-1.5">Decision Gates</p>
              <p className="font-mono text-3xl font-bold text-[#B8860B]">2</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
