import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}> &
  MotionProps;

export function Section({ id, className, innerClassName, children, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative py-16 sm:py-20 lg:py-24", className)}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      {...props}
    >
      <div className={cn("container-page", innerClassName)}>{children}</div>
    </motion.section>
  );
}
