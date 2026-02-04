import { cubicBezier } from "motion/react";

export const segurosVariants = {
  initial: {
    height: "68px",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
  animate: {
    height: "935px",
    transition: {
      duration: 1,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};

export const consorciosVariants = {
  initial: {
    height: "68px",
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
  animate: {
    height: "1850px",
    transition: {
      duration: 1,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};

export const menuVariants = {
  initial: ({ initialDelay }: { initialDelay: number }) => ({
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.4,
      delay: initialDelay,
    },
  }),
  animate: ({ animateDelay }: { animateDelay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: animateDelay,
    },
  }),
};
