import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { siteConfig, footerLinks } from '@/config/site';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-content grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-white">{siteConfig.orgName}</p>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.tagline}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/50">{t('footer.emergency')}</p>
          <p className="mt-1 text-sm font-semibold text-accent">
            {siteConfig.phones.emergency.join(' / ')}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t('footer.quickLinks')}</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm hover:text-accent">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.address.line2}</li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.officeHours}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{t('footer.connect')}</p>
          <div className="mt-4 flex gap-3">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                aria-label={platform}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs uppercase hover:border-accent hover:text-accent"
              >
                {platform.slice(0, 1)}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/50">{t('footer.policies')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.policies.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-accent">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-content text-center text-xs text-white/50">
          © {year} {siteConfig.orgName}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
