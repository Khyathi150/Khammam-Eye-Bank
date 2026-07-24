import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CallToAction from '@/components/CallToAction';
import { services, registrationOnline, registrationOffline } from '@/content/services';
import { useSeo } from '@/hooks/useSeo';
import corneaRetrieval from "@/assets/images/services/cornea-retrieval.jpg";
import eyeBankVehicle from "@/assets/images/services/ambulance.jpg";

export default function Services() {
  useSeo({
    title: 'Services',
    description: 'Eye donation registration, cornea retrieval, hospital coordination, preservation, counselling and 24×7 support.',
    path: '/services'
  });

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">What We Offer</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">Our services</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.summary}
                index={i}
              />
            ))}
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <img
                src={corneaRetrieval}
                alt="Cornea retrieval procedure"
                className="w-full h-56 object-cover sm:h-64 lg:h-72"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">
                  Cornea Retrieval Service
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Our trained medical team performs timely cornea retrieval while
                  maintaining the highest standards of dignity, safety and clinical
                  care.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-card border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <img
                src={eyeBankVehicle}
                alt="Khammam Eye Bank vehicle"
                className="w-full h-56 object-cover sm:h-64 lg:h-72"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">
                  24×7 Eye Collection Support
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Our dedicated eye bank vehicle enables prompt response to eye
                  donation calls and ensures timely transportation for retrieval
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="register">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Pledge Your Eyes" title={registrationOnline.title} />
            <ol className="mt-6 space-y-3">
              {registrationOnline.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-muted">{registrationOnline.note}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink">Information required: </span>
              {registrationOnline.requiredInfo}
            </p>
          </div>
          <div className="card border border-secondary/20 bg-secondary/5">
            <h3 className="font-semibold text-secondary">Pledge Declaration</h3>
            <p className="mt-3 text-sm italic leading-relaxed text-ink/80">“{registrationOnline.declaration}”</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="In Person" title={registrationOffline.title} description={registrationOffline.description} />
        </div>
      </section>

      <CallToAction
        title="Ready to pledge?"
        description="Registering your pledge is a simple act with a lasting impact — help restore sight to someone in need."
      />
    </>
  );
}
