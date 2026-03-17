// PCAOB Enterprise Data Roadmap — Main Page
// Sections: Hero, Value, Timeline, Year 1, Gate A, Year 2, Gate B, Year 3, Risks, Scenarios
// Removed: ContextSection, Footer, CIO Script

import HeroSection from '@/components/HeroSection';
import ValueSection from '@/components/ValueSection';
import TimelineSection from '@/components/TimelineSection';
import YearPanel from '@/components/YearPanel';
import GateSection from '@/components/GateSection';
import RiskSection from '@/components/RiskSection';
import ScenarioSection from '@/components/ScenarioSection';
import StickyNav from '@/components/StickyNav';
import { years, gates } from '@/lib/roadmapData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNav />
      <HeroSection />
      <ValueSection />
      <TimelineSection />
      <YearPanel year={years[0]} index={0} />
      <GateSection gate={gates[0]} />
      <YearPanel year={years[1]} index={1} />
      <GateSection gate={gates[1]} />
      <YearPanel year={years[2]} index={2} />
      <RiskSection />
      <ScenarioSection />
    </div>
  );
}
