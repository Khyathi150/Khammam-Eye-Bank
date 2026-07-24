import { motion } from 'framer-motion';

interface Props {
  title: string;
  summary: string;
  date?: string;
  index?: number;
}

export default function NewsCard({ title, summary, date, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="card border border-ink/5"
    >
      {date && <p className="text-xs font-semibold uppercase tracking-wide text-accent">{date}</p>}
      <h3 className="mt-2 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
    </motion.article>
  );
}
