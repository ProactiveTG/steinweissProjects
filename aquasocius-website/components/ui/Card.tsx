"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 0 20px rgba(0,212,255,0.15)" } : {}}
      transition={{ duration: 0.2 }}
      className={`glass rounded-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
