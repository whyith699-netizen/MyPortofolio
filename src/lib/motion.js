export const premiumEase = [0.22, 1, 0.36, 1];

export const defaultViewport = {
  once: false,
  amount: 0.18,
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: premiumEase },
  },
};

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    transition: { duration: 0.45, ease: premiumEase },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: premiumEase },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: premiumEase },
  },
};

export const panelRevealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    transition: { duration: 0.42, ease: premiumEase },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: premiumEase },
  },
};

export const staggerParent = (stagger = 0.1, delayChildren = 0.04) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const staggerChild = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.4, ease: premiumEase },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: premiumEase },
  },
};

export const loaderVariants = {
  overlay: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: premiumEase },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.45, ease: premiumEase },
    },
  },
  shell: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: premiumEase,
        staggerChildren: 0.11,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.42, ease: premiumEase },
    },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: premiumEase },
    },
  },
};

export const navHideShowVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: premiumEase },
  },
  hidden: {
    y: -22,
    opacity: 0.82,
    transition: { duration: 0.35, ease: premiumEase },
  },
};

export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: premiumEase },
  },
  hover: {
    y: -8,
    scale: 1.012,
    transition: { duration: 0.24, ease: premiumEase },
  },
};

export const marqueeFloat = (distance = 12, duration = 9) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
});
