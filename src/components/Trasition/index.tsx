import { motion } from "framer-motion";
export const Transition: React.FC<{ className: string }> = ({ className }) => {
  return (
    <>
      <motion.div
        className={`${className} bg-gray-300`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
      />

      <motion.div
        className={`${className} bg-blue-gray-200`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
      />
    </>
  );
};
