import { motion } from "framer-motion";
import styles from "./About.module.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const statsVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Sobre mí</h2>

        <div className={styles.content}>
          {/* Texto izquierda */}
          <motion.div className={styles.text} variants={textVariants}>
            <motion.p variants={itemVariants} className={styles.description}>
              Especialista en tecnologías de la información, forjado a través de
              una trayectoria autodidacta con más de{" "}
              <strong>5 años de experiencia</strong> en distintas áreas de la
              profesión.
            </motion.p>

            <motion.p variants={itemVariants} className={styles.description}>
              Mi objetivo es brindar soluciones sencillas y eficaces a los
              desafíos cotidianos del entorno tecnológico, con un enfoque en
              potenciar la productividad, optimizar procesos y generar
              resultados tangibles que aporten valor real.
            </motion.p>

            <motion.ul className={styles.list}>
              <motion.li variants={itemVariants}>
                Diseño y desarrollo de soluciones simples y eficientes
              </motion.li>
              <motion.li variants={itemVariants}>
                Optimización de procesos y mejora de la productividad
              </motion.li>
              <motion.li variants={itemVariants}>
                Experiencia en desarrollo, soporte y operación de sistemas
              </motion.li>
              <motion.li variants={itemVariants}>
                Enfoque en orden técnico, mantenibilidad y resultados reales
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Stats derecha */}
          <motion.div className={styles.stats} variants={statsVariants}>
            <div>
              <strong>+5</strong>
              <span>Años de experiencia</span>
            </div>
            <div>
              <strong>Full Stack</strong>
              <span>Desarrollo & TI</span>
            </div>
            <div>
              <strong>Enfoque</strong>
              <span>Soluciones eficientes</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
