// Design: Institutional Modernism | Section: Hero
// Light background, clean institutional look, no dark bg, no fancy graphics
// No FTE references

import { ArrowDown, Database, Brain, Shield, Landmark } from 'lucide-react';

export default function HeroSection() {
  const scrollToValue = () => {
    const el = document.getElementById('value');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]">
      {/* Subtle geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#16365C 1px, transparent 1px), linear-gradient(90deg, #16365C 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16365C] via-[#4A7C9B] to-[#2D6A6A]" />

      {/* Content */}
      <div className="relative container pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="lg:col-span-7">
            <div className="hero-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="w-5 h-5 text-[#B8860B]" />
                <p className="text-[#B8860B] font-mono text-xs tracking-[0.2em] uppercase">
                  Office of Technology — Enterprise Data Program
                </p>
              </div>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#16365C] leading-[1.08] tracking-tight mb-3 hero-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              PCAOB Enterprise Data Roadmap
            </h1>

            <p
              className="text-2xl md:text-3xl font-bold text-[#4A7C9B] tracking-tight mb-8 hero-fade-in"
              style={{ animationDelay: '0.25s' }}
            >
              A Three Year Vision Arc
            </p>

            <p
              className="text-lg text-[#16365C]/70 font-serif leading-relaxed max-w-2xl mb-10 hero-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              A structured, gate-controlled investment plan that equips PCAOB with
              integrated, AI-enabled data capabilities — delivering measurable mission
              value at every stage and full budget visibility from day one.
            </p>

            {/* No surprise ribbon */}
            <div
              className="bg-[#B8860B]/5 border border-[#B8860B]/20 rounded-xl px-6 py-5 max-w-2xl mb-10 hero-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 self-stretch bg-[#B8860B] rounded-full flex-shrink-0" />
                <div>
                  <p className="text-[#B8860B] font-semibold text-sm mb-1.5">No Surprise Funding Model</p>
                  <p className="text-[#16365C]/60 text-sm leading-relaxed">
                    Budget increases are gated by demonstrated value. Gate A (end of 2026) and
                    Gate B (end of 2027) provide structured decision points where leadership can
                    scale, hold, or narrow the investment based on demonstrated evidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Three-year total */}
            <div
              className="flex items-center gap-8 hero-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div>
                <p className="text-[10px] font-mono text-[#16365C]/35 uppercase tracking-wider mb-1">Three-Year Envelope</p>
                <p className="font-mono text-2xl font-bold text-[#16365C]">$9.2M — $12.7M</p>
              </div>
              <div className="w-px h-10 bg-[#16365C]/10" />
              <div>
                <p className="text-[10px] font-mono text-[#16365C]/35 uppercase tracking-wider mb-1">Decision Gates</p>
                <p className="font-mono text-2xl font-bold text-[#B8860B]">2</p>
              </div>
              <div className="w-px h-10 bg-[#16365C]/10" />
              <div>
                <p className="text-[10px] font-mono text-[#16365C]/35 uppercase tracking-wider mb-1">GenAI Capabilities</p>
                <p className="font-mono text-2xl font-bold text-[#16365C]">11</p>
              </div>
            </div>
          </div>

          {/* Right column - Year cards */}
          <div
            className="lg:col-span-5 space-y-4 hero-slide-in"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              {
                icon: Database,
                year: 'Year 1',
                label: 'Foundation and First Wins',
                window: 'Late April — December 2026',
                budget: '$0.7M',
                detail: 'Governance backbone, catalog activation, first GenAI champion workflows',
                color: '#16365C',
                colorLight: '#E8EEF4',
              },
              {
                icon: Brain,
                year: 'Year 2',
                label: 'Scale and Integrate',
                window: 'January — December 2027',
                budget: '$3.5M — $5M',
                detail: 'Enterprise Data Hub production, operational GenAI across divisions',
                color: '#4A7C9B',
                colorLight: '#EAF1F5',
              },
              {
                icon: Shield,
                year: 'Year 3',
                label: 'Optimize and Institutionalize',
                window: 'January — December 2028',
                budget: '$5M — $7M',
                detail: 'Predictive AI, agentic workflows, self-sustaining platform',
                color: '#2D6A6A',
                colorLight: '#E6F0F0',
              },
            ].map((card, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = document.getElementById(`year-${i + 1}`);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="w-full text-left bg-white border rounded-xl p-5 hover:shadow-lg transition-all group"
                style={{ borderColor: card.color + '15' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: card.color }}
                  >
                    <card.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold" style={{ color: card.color }}>{card.year}</span>
                      <span className="text-[10px] font-mono text-[#16365C]/35">{card.window}</span>
                    </div>
                    <p className="text-[#16365C] font-semibold text-sm mb-1.5">{card.label}</p>
                    <p className="text-[#16365C]/50 text-xs leading-relaxed mb-3">{card.detail}</p>
                    <span className="font-mono text-sm font-bold" style={{ color: '#B8860B' }}>{card.budget}</span>
                  </div>
                </div>
              </button>
            ))}

            {/* Gate indicators */}
            <div className="flex gap-3 pt-2">
              <div className="flex-1 bg-[#B8860B]/5 border border-[#B8860B]/15 rounded-lg px-4 py-3 text-center">
                <p className="text-[10px] font-mono text-[#B8860B]/60 uppercase tracking-wider mb-0.5">Gate A</p>
                <p className="text-xs font-semibold text-[#B8860B]">Dec 2026</p>
              </div>
              <div className="flex-1 bg-[#B8860B]/5 border border-[#B8860B]/15 rounded-lg px-4 py-3 text-center">
                <p className="text-[10px] font-mono text-[#B8860B]/60 uppercase tracking-wider mb-0.5">Gate B</p>
                <p className="text-xs font-semibold text-[#B8860B]">Dec 2027</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToValue}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#16365C]/30 hover:text-[#16365C]/60 transition-colors hero-fade-in"
          style={{ animationDelay: '1.2s' }}
          aria-label="Scroll to value case"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
