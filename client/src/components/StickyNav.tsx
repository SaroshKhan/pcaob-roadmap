// Design: Institutional Modernism | Component: Sticky Navigation
// Transparent on hero, frosted glass on scroll, gold active indicator

import { useState, useEffect } from 'react';
import { sections } from '@/lib/roadmapData';
import { cn } from '@/lib/utils';
import { Menu, X, Landmark } from 'lucide-react';

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#16365C]/8'
            : 'bg-transparent'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Title */}
            <button
              onClick={() => scrollTo('hero')}
              className={cn(
                'flex items-center gap-2.5 transition-colors',
                isScrolled ? 'text-[#16365C]' : 'text-white'
              )}
            >
              <Landmark className="w-4 h-4 text-[#B8860B]" />
              <span className="text-sm font-semibold tracking-tight">
                PCAOB Enterprise Data Roadmap
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {sections.map((section) => {
                const isGate = section.id.startsWith('gate');
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      'px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200',
                      activeSection === section.id
                        ? isScrolled
                          ? 'bg-[#16365C] text-white'
                          : 'bg-white/15 text-white'
                        : isScrolled
                          ? isGate
                            ? 'text-[#B8860B]/70 hover:text-[#B8860B] hover:bg-[#B8860B]/5'
                            : 'text-[#16365C]/60 hover:text-[#16365C] hover:bg-[#16365C]/5'
                          : isGate
                            ? 'text-[#B8860B]/60 hover:text-[#B8860B] hover:bg-[#B8860B]/10'
                            : 'text-white/55 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {section.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled ? 'text-[#16365C]' : 'text-white'
              )}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D2240]/95 backdrop-blur-md lg:hidden">
          <div className="pt-20 px-6 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-white/10 text-white'
                    : section.id.startsWith('gate')
                      ? 'text-[#B8860B]/70 hover:text-[#B8860B] hover:bg-[#B8860B]/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
