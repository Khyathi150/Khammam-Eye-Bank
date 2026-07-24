import SectionHeader from '@/components/SectionHeader';
import ImageBlock from '@/components/ImageBlock';
import { useSeo } from '@/hooks/useSeo';

// Built but not linked from primaryNav (see featureFlags.showGallery).
export default function Gallery() {
  useSeo({
    title: 'Gallery',
    description: 'Photographs from Khammam Eye Bank events, camps and awareness programs.',
    path: '/gallery'
  });

  const placeholders = Array.from({ length: 6 }, (_, i) => `Event photograph ${i + 1}`);

  return (
    <section className="section">
      <div className="container-content">
        <SectionHeader eyebrow="Moments" title="Gallery" description="Photographs will be published here once available." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((label) => (
            <ImageBlock key={label} label={label} ratio="square" />
          ))}
        </div>
      </div>
    </section>
  );
}
