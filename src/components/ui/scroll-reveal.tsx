"use client";

import {
  motion,
  type Transition,
  type UseInViewOptions,
  useInView,
  type Variant,
} from "motion/react";
import { type ElementType, type ReactNode, useRef, useState } from "react";

export type ScrollRevealProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: ElementType;
  once?: boolean;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function ScrollReveal({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = "div",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    ...viewOptions,
  });
  const [hasViewed, setHasViewed] = useState(false);

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const shouldAnimate = once ? isInView || hasViewed : isInView;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      onAnimationComplete={() => {
        if (once && isInView) {
          setHasViewed(true);
        }
      }}
    >
      {children}
    </MotionComponent>
  );
}

export default ScrollReveal;
