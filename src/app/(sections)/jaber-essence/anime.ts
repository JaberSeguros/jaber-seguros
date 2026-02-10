export const imagesVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};
