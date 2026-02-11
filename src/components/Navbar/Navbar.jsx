import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  initial: { y: 0 },
  hover: { y: 0.1 },
};

function Navbar() {
  const [active, setActive] = useState("Proyectos");

  const links = ["Proyectos", "Habilidades", "Contacto"];

  return (
    <motion.nav
      className={styles.navbar}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className={styles.navbarTitle}
        variants={linkVariants}
        whileHover={{ scale: 1.05 }}
      >
        Eguis
      </motion.h2>

      {/* Links */}
      <ul className={styles.navbarList}>
        {links.map((link) => (
          <li key={link} className={styles.navbarItem}>
            <motion.a
              href={`#${link.toLowerCase()}`}
              className={styles.navbarLink}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              onClick={() => setActive(link)}
            >
              {link}

              {active === link && (
                <motion.span
                  className={styles.activeLine}
                  layoutId="activeLine"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
