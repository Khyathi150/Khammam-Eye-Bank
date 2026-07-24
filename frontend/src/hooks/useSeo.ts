import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = 'https://www.khammameyebank.org';
const SITE_TITLE = 'The Khammam Eye Bank';

function setMeta(
  name: string,
  content: string,
  attr: 'name' | 'property' = 'name'
) {
  let el = document.querySelector(`meta[${attr}="${name}"]`);

  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }

  el.setAttribute('content', content);
}

export function useSeo({ title, description, path }: SeoOptions) {
  useEffect(() => {
    document.title = `${title} | ${SITE_TITLE}`;

    setMeta('description', description);

    // Open Graph
    setMeta('og:title', `${title} | ${SITE_TITLE}`, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', `${SITE_URL}${path}`, 'property');
    setMeta('og:image', `${SITE_URL}/og-image.jpg`, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | ${SITE_TITLE}`);
    setMeta('twitter:description', description);
    setMeta('twitter:image', `${SITE_URL}/og-image.jpg`);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = `${SITE_URL}${path}`;
  }, [title, description, path]);
}