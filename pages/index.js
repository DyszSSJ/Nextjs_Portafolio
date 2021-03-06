import Layout from "../components/Layout";
import styles from "../styles/Inicio.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.divPrincipal}>
        <div className='contenedor'>
          <div className={styles.principal}>
            <h1>
              Soy <span>Axel </span>Tellez
            </h1>
            <p>
              Soy desarrollador Front-End con 1 año de experiencia en proyectos
              propios, soy de México. Busco mi primera oportunidad laboral,
              siempre me gusta aprender algo nuevo, soy 100% autodidacta, aprendi
              con cursos online, manejo multiples tecnologias pero si se requiere
              algo nuevo estoy dispuesto a aprenderla.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
