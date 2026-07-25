import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { LinkButton } from './Button';

interface Props {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  external?: boolean;
}

export default function CallToAction({
  title,
  description,
  primaryLabel = 'Register for Eye Donation',
  primaryTo = siteConfig.registrationFormUrl,
  external = true
}: Props) {
  return (
    <section className="section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-8 rounded-card bg-primary px-8 py-12 text-white md:flex-row md:items-center md:px-14"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold md:text-3xl text-white">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
          </div>
          <LinkButton to={primaryTo} external={external} variant="primary" className="shrink-0">
            {primaryLabel}
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
