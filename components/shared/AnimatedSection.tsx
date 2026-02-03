"use client";
import { motion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
