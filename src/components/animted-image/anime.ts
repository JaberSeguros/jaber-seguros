export const imageContainerVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
    opacity: 0,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as const,
    },
  },
};

export const imageVariants = {
  initial: {
    scale: 1.1,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as const,
      delay: 0.2,
    },
  },
};

export const absoluteContentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
      delay: 0.7,
    },
  },
};
