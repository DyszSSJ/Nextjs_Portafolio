import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'

const contacto = () => {
  return (
    <Layout>
      <main className="contenedor">
        <div className={styles.info}>
          <p>
            <span>Nombre: </span> Axel David Téllez Álvarez
          </p>
          <p>
            <span>Edad: </span> 21 Años
          </p>
          <p>
            <span>Direccion: </span>Calle portal del agua Manzana 6 Lote 3
          </p>
          <p>
            <span>Correo: </span>adtellezalvarez@gmail.com
          </p>
          <p>
            <span>Telefono: </span> +52 5565305809
          </p>
          <div className="contenedor">
            <div className={styles.iconos}>
              <div className={styles.contacto}>
                <Link href="https://www.instagram.com/axel__tellez__/">
                  <a target="_blank">
                    <Image
                      layout="responsive"
                      width={10}
                      height={10}
                      src="/img/Instagram.png"
                      alt="Imagen Instagram"
                    />
                  </a>
                </Link>
              </div>

              <div className={styles.contacto}>
                <Link href="https://www.linkedin.com/in/axel-david-tellez-alvarez-63b0871b7/">
                  <a target="_blank">
                    <Image
                      layout="responsive"
                      width={20}
                      height={20}
                      src="/img/Linkedin.png"
                      alt="Imagen Linkedin"
                    />
                  </a>
                </Link>
              </div>

              <div className={styles.contacto}>
                <Link href="https://github.com/DyszSSJ">
                  <a target="_blank">
                    <Image
                      layout="responsive"
                      width={20}
                      height={20}
                      src="/img/GitHub.png"
                      alt="Imagen GitHub"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default contacto;
