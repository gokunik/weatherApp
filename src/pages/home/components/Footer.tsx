import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t shadow mt-auto p-2">
      <motion.div
        className="relative"
        initial={{ top: "100px", opacity: 0 }}
        animate={{ top: "0px", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
      >
        <ul className="flex justify-center items-center">
          <li className="text-sm"></li>
          <li>
            <ul className="flex gap-4">
              <li className="text-sm">
                <a
                  href="https://gokunik.github.io/gokunik/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Portfolio
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="https://github.com/gokunik"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="https://www.linkedin.com/in/gokunik/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </motion.div>
    </footer>
  );
};
