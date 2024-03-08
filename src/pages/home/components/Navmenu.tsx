import { Navbar, Button, IconButton, Collapse } from "@material-tailwind/react";
import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavMenu: React.FC = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <motion.div
      className="relative"
      initial={{ top: "100px", opacity: 0 }}
      animate={{ top: "0px", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
    >
      <Navbar className={styles["navbar-wrapper"]} placeholder="">
        <div className={styles["navbar-innerContainer"]}>
          <div className="mr-4 cursor-pointer py-1.5 font-medium">
            Weather app Assignment
          </div>

          <div className="flex items-center">
            <NavLink to="/weatherApp">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                placeholder=""
              >
                <span>Link to assignment</span>
              </Button>
            </NavLink>
          </div>
          <IconButton
            variant="text"
            className={styles["icon-button"]}
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder=""
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="mt-4 underline">
            <NavLink to="/weatherApp">
              <span className="text-black">Link to assignment</span>
            </NavLink>
          </div>
        </Collapse>
      </Navbar>
    </motion.div>
  );
};
