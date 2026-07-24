// Shared Framer Motion variants for consistent, restrained motion across the site.
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08 } }
};
