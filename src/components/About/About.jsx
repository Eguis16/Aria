import { motion } from "framer-motion";
import { FaReact, FaJs, FaPython } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BsTerminal } from "react-icons/bs";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        {/* header */}
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.label}> Perfil Profesional </span>
          <h2 className={styles.title}>
            Desarrollo, Operaciones y Optimizacion Tecnologica
          </h2>
        </motion.div>

        {/* Resumen Ejecutivo */}
        <motion.div className={styles.summary} variants={fadeUp}>
          <p>
            Profesional TI con mas de <strong>5 años de experiencia </strong>
            combinando desarrollo de software, soporte tecnico avanzado y
            optimizacion de procesos tecnologicos.
          </p>
          <p>
            Mi enfoque se basa en la eficiencia operativa, la mantenibilidad de
            soluciones y la generacion de impacto real en el entorno
            empresarial.
          </p>
        </motion.div>

        {/* Experiencia */}
        <motion.div className={styles.experience} variants={fadeUp}>
          <h3 className={styles.sectionTitle}>Experiencia Profresional</h3>
          <div className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <div>
                <h4>Especialista TI</h4>
                <span className={styles.company}>Huerfanos 670, Piso 23.</span>
              </div>
              <span className={styles.period}>Mayo 2024 - Actualidad</span>
            </div>

            <ul>
              <li>
                Apoyo al area de desarrollo en creacion y documentacion de
                imagenes tecnicas.
              </li>
              <li>
                Soporte Terreno Nivel 2 y resolucion de incidencias criticas.
              </li>
              <li>
                Capacitacion tecnica a personal previo a asistencia en cliente.
              </li>
              <li>
                Reforzamiento y actualizacion de conocimientos a tecnicos en
                operaciones.
              </li>
              <li>
                Registro, seguimiento y control de soportes y capacitaciones
                realizadas.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* STACK TECNOLOGICO */}
        <motion.div className={styles.skills} variants={fadeUp}>
          <h3 className={styles.sectionTitle}>Stack Tecnologico</h3>
          <div className={styles.iconsGrid}>
            <div className={styles.iconCard}>
              <FaReact />
              <span>React</span>
            </div>
            <div className={styles.iconCard}>
              <FaJs />
              <span>Javascript</span>
            </div>
            <div className={styles.iconCard}>
              <FaPython />
              <span>Python</span>
            </div>
            <div className={styles.iconCard}>
              <SiVite />
              <span>React-Vite</span>
            </div>

            <div className={styles.iconCard}>
              <BsTerminal />
              <span>CLI / CMD</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
