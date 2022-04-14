import Link from "next/link";
import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <p className={styles.parrafo}>Todos lo derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
