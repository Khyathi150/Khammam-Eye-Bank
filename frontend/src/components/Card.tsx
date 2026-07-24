import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  index?: number;
  icon?: ReactNode;
  className?: string;
}

export default function Card({ title, description, index = 0, icon, className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className={`card border border-ink/5 ${className}`}
    >
      {icon && (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
}
