import Layout from "../components/Layout";
import styles from "../styles/Proyectos.module.css";
import Image from "next/image";
import Link from "next/link";

const proyectos = () => {
  return (
    <Layout paginas={"Proyectos"}>
      <main>
        <h1 className={styles.title}>Proyectos</h1>
        <div className={styles.principal}>
          <div className={styles.cotizador}>
            <Image
              layout="responsive"
              width={200}
              height={120}
              src="/img/screenshot_2022-02-15-22-24-58-0000.png"
              alt="Planificador de Gastos"
            />
            <h2>Planificador de Gastos</h2>
            <p className={styles.parrafo}>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>CSS</li>
            </ul>
            <Link href='https://control-gastos-proyect.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/screenshot_2022-02-17-21-28-53-0000.png"
              alt="Cotizador de criptomonedas"
            />
            <h2>Cotizador de Criptomonedas</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>Styled components</li>
              <li>API</li>
            </ul>
            <Link href='https://nostalgic-curran-400b31.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/screenshot_2022-02-10-02-50-59-0000.png"
              alt="Citas Veterinaria"
            />
            <h2>Citas con Veterinario</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>Taildwind</li>
            </ul>
            <Link href='https://citas-react-proyecto.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/screenshot_2022-01-07-01-04-11-0000.png"
              alt="Festival Music"
            />
            <h2>Festival Music</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <Link href='https://festival-music-ejercicio.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/Letras.jpg"
              alt="Cotizador de Autos"
            />
            <h2>Cotizador de Autos</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>Taildwind</li>
            </ul>
            <Link href='https://euphonious-gumdrop-0c1626.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/Cotizador.jpg"
              alt="Busqueda de Canciones"
            />
            <h2>Búsqueda de Letras de Canciones</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>API</li>
              <li>CSS</li>  
            </ul>
            <Link href='https://buscado-letras.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>

          <div className={styles.cotizador}>
            <Image
              className={styles.imagen}
              layout="responsive"
              width={200}
              height={120}
              src="/img/e767628f-e9d3-4c9e-80f4-3d259becc169.jpg"
              alt="Busqueda de Bebidas"
            />
            <h2>Búsqueda de recetas para bebidas</h2>
            <p>Tecnologías Usadas:</p>
            <ul>
              <li>React</li>
              <li>API</li>
              <li>React-Bootstrap</li>  
            </ul>
            <Link href='https://buscadordebebidas-proyect.netlify.app'>
             <a target='_blank' className={styles.btnCotizador}>Ver Proyecto</a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default proyectos;
