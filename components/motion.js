"use client";
import { motion } from "framer-motion";

export function FadeInDiv({ children, ...props }) {
  return <motion.div {...props}>{children}</motion.div>;
}
