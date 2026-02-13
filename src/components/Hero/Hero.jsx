import { motion } from "framer-motion";
import styles from "./Hero.module.css";

function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("proyectos");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.badge} variants={itemVariants}>
          + 5 años de experiencia en el area TI
        </motion.p>

        <motion.h1 className={styles.title} variants={itemVariants}>
          Construyo soluciones simples para problemas reales.
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Full Stack Developer enfocado en tecnologia mantenible, rendimiento y
          resultados reales.
        </motion.p>

        <motion.div className={styles.actions} variants={itemVariants}>
          <button
            className={styles.primaryButton}
            onClick={handleScrollToProjects}
          >
            Ver proyectos
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
