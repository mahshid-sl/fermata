"use client";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  distance = 40,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: distance }
      }
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
