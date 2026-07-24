import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Timeline from '@/components/Timeline';
import CallToAction from '@/components/CallToAction';
import { mission, vision, coreValues, history, leadership, foundingAdvisors, timeline } from '@/content/about';
import { useSeo } from '@/hooks/useSeo';
import awBanner from "@/assets/images/about/aw-banner.jpg";


export default function About() {
  useSeo({
    title: 'About Us',
    description: mission,
    path: '/about'
  });

  const groups = Array.from(new Set(leadership.map((m) => m.group)));

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">About Khammam Eye Bank</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">
            Serving Khammam and surrounding communities since 2001
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content grid gap-10 md:grid-cols-2">
          <Card title="Our Mission" description={mission} />
          <Card title="Our Vision" description={vision} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="What Guides Us" title="Core values" />
          <div className="mt-8 flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <span key={value} className="rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2 text-sm font-medium text-secondary">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Our Story"
                title="History"
                description={history}
              />

              <div className="overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm">
                <img
                  src={awBanner}
                  alt="Khammam Eye Bank awareness program"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <Timeline entries={timeline} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Our People" title="Leadership & team" />
          <div className="mt-10 space-y-10">
            {groups.map((group) => (
              <div key={group}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-secondary">{group}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {leadership
                    .filter((m) => m.group === group)
                    .map((member) => (
                      <div
                        key={member.name}
                        className="rounded-card border border-ink/10 bg-surface p-5 text-center"
                      >
                        {member.image && (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="mx-auto mb-4 h-32 w-28 rounded-lg object-cover object-top shadow"
                          />
                        )}
                        <p className="font-semibold text-ink">{member.name}</p>
                        <p className="text-sm text-muted">{member.role}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-secondary">
                Founding Advisors / Founding Advisory Board
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {foundingAdvisors.map((name) => (
                  <div key={name} className="rounded-card border border-ink/10 bg-surface p-5">
                    <p className="font-semibold text-ink">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Help us reach more families"
        description="Volunteer, partner, or spread awareness about eye donation in your community."
        primaryLabel="Contact us"
        primaryTo="/contact"
        external={false}
      />
    </>
  );
}
