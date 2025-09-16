import { Variants } from "framer-motion";

export const fadeInParent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};

export const fadeInChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

