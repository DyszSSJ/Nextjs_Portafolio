import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={50}
                height={50}
                src="/img/pngegg.png"
                alt="Imagen Logo"
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href='/'>
              <a className={styles.a}><span>Inicio</span></a>
            </Link>
            <Link href="/proyectos">proyectos</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
