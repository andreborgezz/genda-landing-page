export const EASE_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const
export const EASE_STANDARD = [0.25, 0.1, 0.25, 1] as const

export const DUR = {
  press: 0.12,
  fast: 0.16,
  base: 0.22,
  slow: 0.35,
  enter: 0.85,
  hero: 1.1,
} as const

export const heroBlurInUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DUR.hero, ease: EASE_OUT },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.enter, ease: EASE_OUT },
  },
}

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.enter, ease: EASE_OUT },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DUR.enter, ease: EASE_OUT },
  },
}

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const pressable = {
  whileTap: { scale: 0.97, transition: { duration: DUR.press, ease: EASE_OUT } },
}
