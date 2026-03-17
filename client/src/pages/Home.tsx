import StickyNav from '@/components/StickyNav';
import HeroSection from '@/components/HeroSection';
import ContextSection from '@/components/ContextSection';
import ValueSection from '@/components/ValueSection';
import TimelineSection from '@/components/TimelineSection';
import YearPanel from '@/components/YearPanel';
import GateSection from '@/components/GateSection';
import RiskSection from '@/components/RiskSection';
import ScenarioSection from '@/components/ScenarioSection';
import Footer from '@/components/Footer';
import { years, gates } from '@/lib/roadmapData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <ContextSection />
      <ValueSection />
      <TimelineSection />

      {/* Year 1 */}
      <YearPanel year={years[0]} index={0} />

      {/* Gate A */}
      <GateSection gate={gates[0]} />

      {/* Year 2 */}
      <YearPanel year={years[1]} index={1} />

      {/* Gate B */}
      <GateSection gate={gates[1]} />

      {/* Year 3 */}
      <YearPanel year={years[2]} index={2} />

      {/* Risks */}
      <RiskSection />

      {/* Scenarios */}
      <ScenarioSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
