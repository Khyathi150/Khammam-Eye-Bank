import { LinkButton } from '@/components/Button';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for could not be found.', path: '/404' });

  return (
    <section className="section">
      <div className="container-content text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted">The page you're looking for may have moved or no longer exists.</p>
        <LinkButton to="/" variant="primary" className="mt-8 inline-flex">
          Back to home
        </LinkButton>
      </div>
    </section>
  );
}
