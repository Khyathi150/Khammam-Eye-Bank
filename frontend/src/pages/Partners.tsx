import SectionHeader from '@/components/SectionHeader';
import { partnerGroups } from '@/content/partners';
import { useSeo } from '@/hooks/useSeo';

const descriptions = [
  'Our hospital partners support donor identification, corneal retrieval and transplantation.',
  'Medical colleges help strengthen education, training and awareness.',
  'Community organisations play an important role in promoting eye donation.',
  'Government institutions support public eye care initiatives and collaboration.'
];

export default function Partners() {
  useSeo({
    title: 'Partners',
    description:
      'Hospitals, medical colleges, NGOs and government organisations partnering with Khammam Eye Bank.',
    path: '/partners'
  });

  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">Working Together</p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">
            Our Partners
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            Every successful eye donation depends on collaboration. We work with
            hospitals, educational institutions, NGOs and government
            organisations to promote eye donation and restore sight across our
            community.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section pb-8">
        <div className="container-content">
          <SectionHeader
            eyebrow="Our Network"
            title="Organizations We Work With"
            description="Each partnership strengthens our ability to create awareness, retrieve donated corneas responsibly and support patients in need."
            align="center"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24">
        <div className="container-content space-y-16">
          {partnerGroups.map((group, index) => (
            <section
              key={group.category}
              className="overflow-hidden rounded-3xl border border-ink/10 bg-white"
            >
              {/* Header */}
              <div className="border-b border-ink/10 px-6 py-6 md:px-10">
                <p className="eyebrow text-primary">
                  Category {index + 1}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-primary">
                  {group.category}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                  {descriptions[index] ??
                    'Together we continue strengthening eye donation services through meaningful collaboration.'}
                </p>
              </div>

              {/* If only 1 or 2 partners, show as a simple list */}
              {group.partners.length <= 2 ? (
                <div className="px-8 py-8">
                  <ul className="space-y-4">
                    {group.partners.map((partner) => (
                      <li
                        key={partner}
                        className="flex items-center gap-3 text-base font-medium text-ink"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                /* Otherwise show as a responsive grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.partners.map((partner, i) => (
                    <div
                      key={partner}
                      className={`
                        flex min-h-[88px] items-center px-6 py-5
                        transition-colors hover:bg-surface
                        border-ink/10
                        ${
                          i % 4 !== 3
                            ? 'xl:border-r'
                            : ''
                        }
                        ${
                          i % 3 !== 2
                            ? 'lg:border-r xl:border-r-0'
                            : ''
                        }
                        ${
                          i % 2 !== 1
                            ? 'sm:border-r lg:border-r-0'
                            : ''
                        }
                        border-b
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        <span className="text-base font-medium leading-6 text-ink">
                          {partner}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}