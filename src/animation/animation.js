export const nameEnter = {
  initial: {
    y: '2vh',
    opacity: 0,
  },
  fadeIn: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const navHover = {
  initial: {
    opacity: 0.6,
  },
  hover: {
    opacity: 1,
    transistion: {
      ease: 'linear',
      duration: .1,
    }
  },
};
