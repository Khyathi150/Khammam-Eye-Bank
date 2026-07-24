import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = 'https://www.khammameyebank.org';
const SITE_TITLE = 'The Khammam Eye Bank';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
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
    setMeta('og:title', `${title} | ${SITE_TITLE}`, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${SITE_URL}${path}`, 'property');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [title, description, path]);
}
