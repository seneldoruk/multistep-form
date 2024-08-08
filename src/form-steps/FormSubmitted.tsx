import { AnimatePresence, motion } from "framer-motion";

export default function FormSubmitted() {
  return (
    <div style={{ height: 100, width: 100 }}>
      <AnimatePresence initial={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="CheckIcon"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: "easeOut",
            }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        )
      </AnimatePresence>
    </div>
  );
}
