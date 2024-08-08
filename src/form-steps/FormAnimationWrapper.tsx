import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function FormAnimationWrapper({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}
