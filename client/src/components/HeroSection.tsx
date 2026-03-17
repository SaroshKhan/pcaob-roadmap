// Design: Institutional Modernism | Section: Hero
// Dark navy bg with topographic texture, gold accents, no-surprise ribbon
// Uses CSS animations instead of framer-motion for reliable initial render

import { ArrowDown, Database, Brain, Shield, Landmark } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/90961013/Tq827qtSGp9PRyxMktWeD6/hero-bg-fdjuCBU2Z5GkunwvKWRn7u.webp';

export default function HeroSection() {
  const scrollToContext = () => {
    const el = document.getElementById('context');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0D2240]" />
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2240]/90 via-[#16365C]/70 to-[#1a4a6a]/80" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6 hero-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Three-Year Enterprise Data
              <br />
              <span className="text-[#B8860B]">and AI Roadmap</span>
            </h1>

            <p
              className="text-lg text-white/75 font-serif leading-relaxed max-w-2xl mb-10 hero-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              A structured, gate-controlled investment plan that transforms PCAOB data
              capabilities from siloed and manual to integrated and AI-enabled — delivering
              measurable mission value at every stage with no surprise funding requirements.
            </p>

            {/* No surprise ribbon */}
            <div
              className="bg-[#B8860B]/10 border border-[#B8860B]/25 rounded-xl px-6 py-5 max-w-2xl mb-10 hero-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 self-stretch bg-[#B8860B] rounded-full flex-shrink-0" />
                <div>
                  <p className="text-[#B8860B] font-semibold text-sm mb-1.5">No Surprise Funding Model</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Every budget increase is gated by demonstrated value. Gate A (end of 2026) and
                    Gate B (end of 2027) provide structured decision points where leadership can
                    scale, hold, or narrow the investment based on evidence, not projections.
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
                <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider mb-1">Three-Year Envelope</p>
                <p className="font-mono text-2xl font-bold text-white">$7.3M — $9.5M</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider mb-1">Decision Gates</p>
                <p className="font-mono text-2xl font-bold text-[#B8860B]">2</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider mb-1">GenAI Capabilities</p>
                <p className="font-mono text-2xl font-bold text-white">11</p>
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
                window: 'April — December 2026',
                budget: '$0.7M',
                team: '2.5 FTE',
                detail: 'Governance backbone, catalog activation, first GenAI champion workflows',
                color: '#16365C',
              },
              {
                icon: Brain,
                year: 'Year 2',
                label: 'Scale and Integrate',
                window: 'January — December 2027',
                budget: '$2.8 — $3.8M',
                team: '7-9 FTE',
                detail: 'Enterprise Data Hub production, operational GenAI across divisions',
                color: '#4A7C9B',
              },
              {
                icon: Shield,
                year: 'Year 3',
                label: 'Optimize and Institutionalize',
                window: 'January — December 2028',
                budget: '$3.8 — $5.0M',
                team: '10-14 FTE',
                detail: 'Predictive AI, agentic workflows, self-sustaining platform',
                color: '#2D6A6A',
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
                className="w-full text-left bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] rounded-xl p-5 hover:bg-white/[0.10] hover:border-white/[0.20] transition-all group"
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
                      <span className="font-mono text-xs font-bold text-white/90">{card.year}</span>
                      <span className="text-[10px] font-mono text-white/35">{card.window}</span>
                    </div>
                    <p className="text-white font-semibold text-sm mb-1.5">{card.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed mb-3">{card.detail}</p>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold" style={{ color: '#B8860B' }}>{card.budget}</span>
                      <span className="text-[10px] font-mono text-white/35">{card.team}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {/* Gate indicators */}
            <div className="flex gap-3 pt-2">
              <div className="flex-1 bg-[#B8860B]/10 border border-[#B8860B]/20 rounded-lg px-4 py-3 text-center">
                <p className="text-[10px] font-mono text-[#B8860B]/60 uppercase tracking-wider mb-0.5">Gate A</p>
                <p className="text-xs font-semibold text-[#B8860B]">Dec 2026</p>
              </div>
              <div className="flex-1 bg-[#B8860B]/10 border border-[#B8860B]/20 rounded-lg px-4 py-3 text-center">
                <p className="text-[10px] font-mono text-[#B8860B]/60 uppercase tracking-wider mb-0.5">Gate B</p>
                <p className="text-xs font-semibold text-[#B8860B]">Dec 2027</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors hero-fade-in"
          style={{ animationDelay: '1.2s' }}
          aria-label="Scroll to context"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
