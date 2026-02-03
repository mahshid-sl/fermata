"use client";
import { motion } from "motion/react";

const buttonHover = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1],
  },
};
export default function AnimatedBtn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={buttonHover} whileHover="hover">
      {children}
    </motion.div>
  );
}
