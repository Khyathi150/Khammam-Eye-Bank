import SectionHeader from '@/components/SectionHeader';
import { staffDirectory, volunteerOpportunities } from '@/content/careers';
import { useSeo } from '@/hooks/useSeo';

// Built but not linked from primaryNav (see featureFlags.showCareers).
export default function Careers() {
  useSeo({
    title: 'Careers & Volunteering',
    description: 'Volunteer opportunities and staff roles at Khammam Eye Bank.',
    path: '/careers'
  });

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">Join Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">Careers & volunteering</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Get Involved" title="Volunteer opportunities" description={volunteerOpportunities} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Our Team" title="Current staff directory" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staffDirectory.map((s) => (
              <div key={s.name} className="rounded-card border border-ink/10 bg-surface p-5">
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="text-sm text-muted">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
