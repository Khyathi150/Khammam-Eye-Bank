import { siteConfig } from '@/config/site';

export default function EmergencyBar() {
  return (
    <div className="bg-primary-dark text-white">
      <div className="container-content flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
        <p className="font-medium tracking-wide">
          24×7 Eye Donation Emergency:{' '}
          {siteConfig.phones.emergency.map((num, i) => (
            <a key={num} href={`tel:${num}`} className="underline decoration-accent underline-offset-2 hover:text-accent">
              {num}
              {i < siteConfig.phones.emergency.length - 1 ? ' / ' : ''}
            </a>
          ))}
        </p>
        <a href={`mailto:${siteConfig.email}`} className="hidden hover:text-accent sm:inline">
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
