
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollAnimation = ({ 
  children, 
  duration = 0.5, 
  delay = 0, 
  className = "",
  direction = 'up' 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
