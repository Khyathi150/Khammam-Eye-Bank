import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CallToAction from '@/components/CallToAction';
import { outreachAreas, eyeHealthTips, blindnessPreventionInitiatives, commitmentStatement } from '@/content/publicHealth';
import { useSeo } from '@/hooks/useSeo';

export default function PublicHealth() {
  useSeo({
    title: 'Public Health',
    description: 'Community outreach, awareness campaigns, school programs, eye health tips and blindness prevention initiatives.',
    path: '/public-health'
  });

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">Community & Prevention</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">Public health</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Our Programs" title="Community outreach & awareness" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outreachAreas.map((area, i) => (
              <Card key={area.title} title={area.title} description={area.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Take Care" title="Eye health tips" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eyeHealthTips.map((tip) => (
              <div key={tip.title} className="rounded-card border border-ink/10 bg-surface p-5">
                <p className="font-semibold text-ink">{tip.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Prevention" title="Blindness prevention initiatives" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blindnessPreventionInitiatives.map((item) => (
              <div key={item.title} className="rounded-card border border-secondary/15 bg-secondary/5 p-5">
                <p className="font-semibold text-secondary">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-card border border-primary/15 bg-primary/5 p-6 text-sm leading-relaxed text-ink/80">
            {commitmentStatement}
          </p>
        </div>
      </section>

      <CallToAction
        title="Bring an awareness session to your community"
        description="We welcome invitations from schools, colleges, workplaces and residential communities."
        primaryLabel="Contact us"
        primaryTo="/contact"
        external={false}
      />
    </>
  );
}
