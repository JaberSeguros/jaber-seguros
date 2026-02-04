export const imageContainerVariants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as const,
    },
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
    scale: 1.2,
    transition: {
      duration: 0.7,
      ease: "easeInOut" as const,
      delay: 0.2,
    },
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
