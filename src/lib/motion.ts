export const easeOut = [0.22, 1, 0.36, 1] as const;

export const reveal = {
  once: true as const,
  amount: 0.12 as const,
  margin: '0px 0px -10% 0px' as const,
};

const itemDuration = 0.62;

export const staggerContainer = (stagger = 0.11, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren, ease: easeOut },
  },
});

export const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: itemDuration, ease: easeOut },
  },
};
