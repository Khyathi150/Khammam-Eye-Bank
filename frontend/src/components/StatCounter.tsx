import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = '', label }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 90 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
  }, [springValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-extrabold text-primary">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </motion.div>
  );
}
