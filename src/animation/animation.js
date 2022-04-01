export const popUp = {
  initial: {
    y: '2vh',
    opacity: 0,
  },
  fadeIn: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const imagePopUp = {
  initial: {
    scale: 0,
  },
  popUp: {
    scale: 1,
    transition: {
      delay: 1,
      ease: 'easeIn',
      type: 'spring',
      bouce: 1,
      stiffness: 100,
    }
  }
}

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

export const spin = {
  spin: {
    rotate: 360,
    transition: {
      ease: 'linear',
      duration: 6,
      repeat: Infinity,
    }
  },
  spinSmall: {
    rotate: -360,
    transition: {
      ease: 'linear',
      duration: 6,
      repeat: Infinity,
    }
  }
}
