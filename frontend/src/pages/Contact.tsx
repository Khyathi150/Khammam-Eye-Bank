import SectionHeader from '@/components/SectionHeader';
import { siteConfig } from '@/config/site';
import { useSeo } from '@/hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Reach the Khammam Eye Bank for emergencies, donations, partnerships and general enquiries.',
    path: '/contact'
  });

  const mapSrc =
  "https://www.google.com/maps?q=17.246361,80.140472&z=18&output=embed";

  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-content text-center">
          <p className="eyebrow !text-accent">We're Here to Help</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl text-white">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Whether you need emergency eye donation assistance, wish to
            register as a donor, or have general enquiries, our team is
            available to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container-content">
          <SectionHeader
            eyebrow="Get in Touch"
            title="We're available 24×7 for eye donation emergencies"
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-card border border-ink/10 bg-white p-6 shadow-soft text-center">
              <div className="mb-4 text-3xl">📞</div>
              <h3 className="text-lg font-bold text-primary">Emergency</h3>
              <p className="mt-3 text-muted">
                {siteConfig.phones.emergency.join(' / ')}
              </p>
              <a
                href={`tel:${siteConfig.phones.emergency[0]}`}
                className="mt-5 inline-block font-semibold text-secondary hover:underline"
              >
                Call Now
              </a>
            </div>

            <div className="rounded-card border border-ink/10 bg-white p-6 shadow-soft text-center">
              <div className="mb-4 text-3xl">✉️</div>
              <h3 className="text-lg font-bold text-primary">Email</h3>
              <p className="mt-3 break-all text-muted">
                {siteConfig.email}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-5 inline-block font-semibold text-secondary hover:underline"
              >
                Send Email
              </a>
            </div>

            <div className="rounded-card border border-ink/10 bg-white p-6 shadow-soft text-center">
              <div className="mb-4 text-3xl">📍</div>
              <h3 className="text-lg font-bold text-primary">Location</h3>
              <p className="mt-3 text-muted">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>

            <div className="rounded-card border border-ink/10 bg-white p-6 shadow-soft text-center">
              <div className="mb-4 text-3xl">🕒</div>
              <h3 className="text-lg font-bold text-primary">Availability</h3>
              <p className="mt-3 text-muted">
                {siteConfig.officeHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-content">
          <SectionHeader
            eyebrow="Visit Us"
            title="Find the Khammam Eye Bank"
            align="center"
          />

          <div className="mt-10 overflow-hidden rounded-card border border-ink/10 shadow-soft">
            <iframe
              title="Khammam Eye Bank location map"
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}