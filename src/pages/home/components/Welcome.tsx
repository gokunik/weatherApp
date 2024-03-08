import { motion } from "framer-motion";
import styles from "./style.module.css";

export const Welcome: React.FC = () => {
  return (
    <section className={styles["welcome-section-wrapper"]}>
      <motion.div
        className="relative"
        initial={{ top: "100px", opacity: 0 }}
        animate={{ top: "0px", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
      >
        <div className={styles["welcome-section-content"]}>
          <h1 className="welcome-title text-center font-bold text-xl mb-5">
            Welcome
          </h1>
          <p className="mb-4 font-lato">
            Hi, I am <strong>Nitesh Khatri</strong>, an Associate Software
            Engineer. Having experience of working in two startups, majorly
            worked in the frontend using Reactjs. I have strong fundamentals in
            web development and have a good understanding Javascript and
            Reactjs. Also experienced in creating REST APIs and backend using
            Nodejs and express js.
          </p>
          <p className="mb-4 font-lato">About the Assignment</p>
        </div>
      </motion.div>
    </section>
  );
};
