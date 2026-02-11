import { motion } from "framer-motion";
import styles from "./Hero.module.css";

function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Columna izquierda */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.name}>Eguis Suarez</h1>

          <h2 className={styles.subtitle}>
            Desarrollador Full Stack enfocado en soluciones eficientes y
            funcionales
          </h2>

          <p className={styles.description}>
            Desarrollo soluciones web modernas y eficientes, enfocadas en
            resolver problemas reales mediante tecnología clara, mantenible y
            funcional.
          </p>

          <p className={styles.highlight}>
            Construyo soluciones simples para problemas reales.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.primaryButton}
              onClick={handleScrollToProjects}
            >
              Ver proyectos
            </button>
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className={styles.manifesto}>
            Código limpio.
            <br />
            Soluciones que funcionan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
