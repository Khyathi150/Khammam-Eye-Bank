import SectionHeader from '@/components/SectionHeader';
import { useSeo } from '@/hooks/useSeo';

// This page is implemented but intentionally not linked from primaryNav
// (see src/config/site.ts -> featureFlags.showResearch). Enable it once
// verified research activity, publications or collaborations are confirmed.
export default function Research() {
  useSeo({
    title: 'Research',
    description: 'Research activities and collaborations at Khammam Eye Bank.',
    path: '/research'
  });

  return (
    <section className="section">
      <div className="container-content">
        <SectionHeader
          eyebrow="Research"
          title="Research information coming soon"
          description="Khammam Eye Bank is committed to sharing only verified research activities, publications and collaborations. This section will be published once formally documented content is available. No claims about ongoing research are made until then."
        />
      </div>
    </section>
  );
}
