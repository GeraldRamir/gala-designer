"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const props = reduce
    ? {}
    : immediate
      ? { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.12 },
        };

  return (
    <motion.div className={className} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} {...props}>
      {children}
    </motion.div>
  );
}
