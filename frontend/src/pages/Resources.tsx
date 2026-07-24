import SectionHeader from '@/components/SectionHeader';
import Accordion from '@/components/Accordion';
import {
  faqGroups,
  criticalStepsAfterDeath,
  donationGuidelines,
  eligibilityCan,
  eligibilityExclusions,
  eligibilityNote,
  // forms,
  // brochures,
  annualReportsNote,
  newsUpdatesNote
} from '@/content/resources';
import { useSeo } from '@/hooks/useSeo';
import newspaperCoverage from "@/assets/images/resources/news.jpg";
import awardCeremony from "@/assets/images/resources/award.jpg";

export default function Resources() {
  useSeo({
    title: 'Resources',
    description: 'FAQs, donation guidelines, eligibility criteria, downloadable forms, brochures and annual reports.',
    path: '/resources'
  });

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">Know Before You Pledge</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">Resources</h1>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Frequently Asked Questions" title="Everything you need to know" />
          <div className="mt-10 space-y-12">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <h3 className="mb-4 text-lg font-semibold text-primary">{group.group}</h3>
                <Accordion items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical steps */}
      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader
            eyebrow="Act Quickly"
            title="Critical steps for the family immediately after a death"
            description="Even if a person has signed a donor card or registered a pledge online, the written consent of the legal next-of-kin is mandatory at the time of passing."
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {criticalStepsAfterDeath.map((step, i) => (
              <li key={step.title} className="rounded-card border border-ink/10 bg-surface p-5">
                <span className="eyebrow">{i + 1}. {step.timing}</span>
                <h4 className="mt-2 font-semibold text-ink">{step.title}</h4>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Donation guidelines */}
      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Guidelines" title="Eye donation guidelines" />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {donationGuidelines.map((g) => (
              <li key={g} className="flex gap-3 rounded-card border border-ink/10 bg-white p-5 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="text-secondary">✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Eligibility" title="Who can and cannot donate" />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-secondary">Universal eligibility</h3>
              <div className="space-y-4">
                {eligibilityCan.map((item) => (
                  <div key={item.title} className="rounded-card border border-secondary/20 bg-secondary/5 p-5">
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-accent">Absolute medical exclusions</h3>
              <div className="space-y-4">
                {eligibilityExclusions.map((group) => (
                  <div key={group.category} className="rounded-card border border-accent/20 bg-accent/5 p-5">
                    <p className="font-semibold text-ink">{group.category}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 rounded-card border border-primary/15 bg-primary/5 p-5 text-sm leading-relaxed text-ink/80">
            {eligibilityNote}
          </p>
        </div>
      </section>

{/* 
      <section className="section">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Download" title="Forms" />
            <ul className="mt-6 space-y-3">
              {forms.map((form) => (
                <li key={form.title} className="flex items-center justify-between rounded-card border border-ink/10 bg-white p-4">
                  <div>
                    <p className="font-medium text-ink">{form.title}</p>
                    <p className="text-xs text-muted">{form.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-secondary">PDF</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Download" title="Brochures" />
            <ul className="mt-6 space-y-3">
              {brochures.map((b) => (
                <li key={b} className="flex items-center justify-between rounded-card border border-ink/10 bg-white p-4">
                  <p className="font-medium text-ink">{b}</p>
                  <span className="text-xs font-semibold text-secondary">PDF</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* Annual reports & news */}
        <section className="section bg-white">
          <div className="container-content">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Annual Reports */}
              <div className="rounded-card border border-ink/10 bg-white overflow-hidden shadow-sm">
                <img
                  src={awardCeremony}
                  alt="Recognition ceremony"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6">
                  <SectionHeader
                    eyebrow="Transparency"
                    title="Annual Reports"
                    description={annualReportsNote}
                  />
                </div>
              </div>

              {/* News */}
              <div className="rounded-card border border-ink/10 bg-white overflow-hidden shadow-sm">
                <img
                  src={newspaperCoverage}
                  alt="Khammam Eye Bank news coverage"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6">
                  <SectionHeader
                    eyebrow="Stay Updated"
                    title="News & Updates"
                    description={newsUpdatesNote}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
