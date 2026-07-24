import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { trainingPrograms, articles } from '@/content/education';
import { useSeo } from '@/hooks/useSeo';

export default function Education() {
const [openSlug, setOpenSlug] = useState<string | null>(null);
  useSeo({
    title: 'Education',
    description: 'Training programs, workshops, and educational articles on eye donation and corneal blindness.',
    path: '/education'
  });

  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-content">
          <p className="eyebrow !text-accent">Learn & Train</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl text-white">Education</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Capacity Building"
              title="Training & Workshops"
              description="Our educational programs help healthcare professionals, volunteers and community members understand ethical eye donation practices, corneal retrieval and public awareness initiatives."
            />

            <div className="mt-8 rounded-card border border-primary/10 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-primary">
                Who Can Participate?
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <li>• Hospital staff</li>
                <li>• Medical students</li>
                <li>• Volunteers</li>
                <li>• NGOs & community organisations</li>
                <li>• General public</li>
              </ul>
            </div>
          </div>
          <ul className="space-y-4">
            {trainingPrograms.map((item) => (
              <li key={item} className="flex gap-3 rounded-card border border-ink/10 bg-white p-5 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="text-secondary">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Articles" title="Awareness & educational articles" />
          <div className="mt-10 space-y-4">
            {articles.map((article) => {
              const isOpen = openSlug === article.slug;
              return (
                <article key={article.slug} className="rounded-card border border-ink/10 bg-surface">
                  <button
                    onClick={() => setOpenSlug(isOpen ? null : article.slug)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{article.title}</h3>
                      <p className="mt-1 text-sm text-muted">{article.excerpt}</p>
                    </div>
                    <span className={`shrink-0 text-xl text-secondary transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="space-y-3 px-6 pb-6 text-sm leading-relaxed text-ink/80">
                      {article.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
