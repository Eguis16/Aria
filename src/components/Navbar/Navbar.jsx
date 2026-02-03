import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';


const navbarVariants = {
    hidden: {
        opacity: 0,
        y: -60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    }
}

function Navbar() {
    return (
        <motion.nav className={styles.navbar} variants={navbarVariants} initial="hidden" animate="visible">
            <h2 className={styles.navbarTitle}>Eguis</h2>
            <ul className={styles.navbarList}>
                <li><a className={styles.navbarLink} href="#">Proyectos</a></li>
                <li><a className={styles.navbarLink} href="#">Habilidades</a></li>
                <li><a className={styles.navbarLink} href="#">Contacto</a></li>
            </ul>
        </motion.nav>
        
    );

}

export default Navbar;  