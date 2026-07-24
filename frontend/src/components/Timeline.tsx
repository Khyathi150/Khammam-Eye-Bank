import { motion } from 'framer-motion';

interface TimelineEntry {
  year?: string;
  title: string;
  description: string;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-primary/15 pl-8">
      {entries.map((entry, i) => (
        <motion.li
          key={entry.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="mb-10 last:mb-0"
        >
          <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-secondary" />
          {entry.year && <p className="eyebrow mb-1">{entry.year}</p>}
          <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
