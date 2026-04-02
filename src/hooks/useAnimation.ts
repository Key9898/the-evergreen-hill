import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleUp,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  pageTransition,
  modalTransition,
  overlayTransition,
  slideInFromRight,
  slideInFromLeft,
  reducedMotionVariants,
  defaultTransition,
  springTransition,
} from '../lib/animations'

interface UseAnimationReturn {
  fadeIn: Variants
  fadeInUp: Variants
  fadeInDown: Variants
  fadeInLeft: Variants
  fadeInRight: Variants
  scaleIn: Variants
  scaleUp: Variants
  staggerContainer: Variants
  staggerContainerFast: Variants
  staggerContainerSlow: Variants
  pageTransition: Variants
  modalTransition: Variants
  overlayTransition: Variants
  slideInFromRight: Variants
  slideInFromLeft: Variants
  defaultTransition: typeof defaultTransition
  springTransition: typeof springTransition
  shouldReduceMotion: boolean
}

export function useAnimation(): UseAnimationReturn {
  const shouldReduceMotion = useReducedMotion() ?? false

  const getVariant = (variant: Variants): Variants =>
    shouldReduceMotion ? reducedMotionVariants : variant

  return {
    fadeIn: getVariant(fadeIn),
    fadeInUp: getVariant(fadeInUp),
    fadeInDown: getVariant(fadeInDown),
    fadeInLeft: getVariant(fadeInLeft),
    fadeInRight: getVariant(fadeInRight),
    scaleIn: getVariant(scaleIn),
    scaleUp: getVariant(scaleUp),
    staggerContainer: getVariant(staggerContainer),
    staggerContainerFast: getVariant(staggerContainerFast),
    staggerContainerSlow: getVariant(staggerContainerSlow),
    pageTransition: getVariant(pageTransition),
    modalTransition: getVariant(modalTransition),
    overlayTransition: getVariant(overlayTransition),
    slideInFromRight: getVariant(slideInFromRight),
    slideInFromLeft: getVariant(slideInFromLeft),
    defaultTransition,
    springTransition,
    shouldReduceMotion,
  }
}
