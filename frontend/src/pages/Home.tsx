import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';
import { services } from '@/content/services';
import { heroIntro, stats, donationProcessSteps } from '@/content/home';
import { partnerGroups } from '@/content/partners';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import StatCounter from '@/components/StatCounter';
import Timeline from '@/components/Timeline';
import CallToAction from '@/components/CallToAction';
import NewsCard from '@/components/NewsCard';
import PartnerLogo from '@/components/PartnerLogo';
import ImageBlock from '@/components/ImageBlock';
import { LinkButton } from '@/components/Button';
import { useSeo } from '@/hooks/useSeo';
import missionImage from '@/assets/images/homepagei/awareness_pic_home.jpeg';
import rallyImage from '@/assets/images/homepagei/rally_pic_home.jpeg';
import HeroImage from '@/assets/images/homepagei/hero_logo_pic_org.png';
export default function Home() {
  const { t } = useTranslation();
  useSeo({
    title: 'Khammam Eye Bank',
    description: heroIntro,
    path: '/'
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.35),transparent_55%)]" aria-hidden="true" />
        <div className="container-content relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow !text-accent">
              {t('hero.eyebrow')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-4xl font-extrabold leading-[1.1] md:text-6xl text-white"
            >
              Khammam Eye Bank
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80"
            >
              {heroIntro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <LinkButton to={siteConfig.registrationFormUrl} external variant="primary">
                {t('hero.cta')}
              </LinkButton>
              <LinkButton to="/services" variant="outline" className="!border-white/40 !text-white hover:!bg-white hover:!text-primary">
                {t('hero.ctaSecondary')}
              </LinkButton>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-8 text-sm text-white/70"
            >
              24×7 Emergency: {siteConfig.phones.emergency.join(' / ')}
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <ImageBlock
            src={HeroImage}
            label="Hero Image"
            ratio="landscape"
          />
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section border-b border-ink/5 bg-white">
        <div className="container-content grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Our Mission"
            title="Restoring sight through ethical, timely, compassionate service"
            description="Khammam Eye Bank promotes eye donation and supports corneal retrieval, preservation, hospital coordination, family counselling, and public awareness across Khammam and surrounding communities."
          >
            <LinkButton to="/about" variant="ghost" className="mt-6 !px-0">
              {t('common.learnMore')} →
            </LinkButton>
          </SectionHeader>
          <ImageBlock
            src={missionImage}
            label="Mission Image"
            ratio="landscape"
          />
        </div>
      </section>

      {/* Eye Donation Process */}
      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <SectionHeader eyebrow="How It Works" title="The eye donation process" />
          <Timeline entries={donationProcessSteps} />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="What We Do" title="Our services" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <Card key={service.id} title={service.title} description={service.summary} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <LinkButton to="/services" variant="outline">
              {t('common.viewAll')}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Awareness */}
      <section className="section bg-white">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-center">
          <ImageBlock
            src={rallyImage}
            label="Community awareness program"
            ratio="landscape"
          />
          <SectionHeader
            eyebrow="Public Awareness"
            title="Building a culture of eye donation"
            description="Through community outreach, school programs, awareness campaigns and donor-family recognition, we work to make eye donation a well-understood, trusted choice across Khammam and beyond."
          >
            <LinkButton to="/public-health" variant="ghost" className="mt-6 !px-0">
              {t('common.learnMore')} →
            </LinkButton>
          </SectionHeader>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container-content">
          <SectionHeader eyebrow="Working Together" title="Our partners" align="center" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partnerGroups.flatMap((g) => g.partners).slice(0, 4).map((p) => (
              <PartnerLogo key={p} name={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Stay Informed" title="Latest updates" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <NewsCard
              title="Eye Donation Fortnight awareness drive"
              summary="Community meetings, rallies and school sessions held across Khammam to mark the annual awareness fortnight."
              index={0}
            />
            <NewsCard
              title="New donor transport van commissioned"
              summary="A fourth van, contributed by a philanthropic donor, extends our respectful transport network to more districts."
              index={1}
            />
            <NewsCard
              title="Hospital coordination training"
              summary="Ongoing training for hospital coordination staff to strengthen timely retrieval and family counselling."
              index={2}
            />
          </div>
        </div>
      </section>

      <CallToAction
        title="Pledge to give the gift of sight"
        description="Registering takes a few minutes and helps ensure your wish is known and honoured by your family when the time comes."
      />
    </>
  );
}
