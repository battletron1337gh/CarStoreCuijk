'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  once?: boolean;
  amount?: number;
}

const directionVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function CinematicReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
  amount = 0.25,
}: CinematicRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const base = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: base.hidden,
        visible: {
          ...base.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1], // cinematic ease-out
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function SplitTextReveal({ text, className = '', delay = 0, tag = 'span' }: SplitTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');
  const Tag = tag;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 4 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.75,
              delay: delay + wordIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface CinematicLineProps {
  className?: string;
  delay?: number;
}

export function CinematicLine({ className = '', delay = 0 }: CinematicLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`h-px bg-white/10 ${className}`} />;
  }

  return (
    <motion.div
      className={`h-px bg-gradient-to-r from-transparent via-[#c8102e]/50 to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
