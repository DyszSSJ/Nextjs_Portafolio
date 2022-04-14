import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <Layout paginas={"Skills"}>
      <main className={styles.divPrincipal}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.principal}>
          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/wp4923992.webp"
              alt="Imagen de React"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/kh3ntlg6dnemjeaz531z.webp"
              alt="Imagen de Next Js"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/png-transparent-logo-css-css3.png"
              alt="Imagen de CSS"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/JavaScript_Featured-1.jpg"
              alt="Imagen de JasvScript"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/logo-html-5.webp"
              alt="Imagen de HTML"
            />
          </div>


          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/cabecera-sass.webp"
              alt="Imagen de Sass"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={30}
              src="/img/hmvlcut7wxqua5ijezpu.webp"
              alt="Imagen de Tailwind"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={25}
              src="/img/json.png"
              alt="Imagen de JSON"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={25}
              src="/img/1_eH_AEESTpAc6ZSWoEer6pA.png"
              alt="Imagen de Strapi"
            />
          </div>

          <div className={styles.skills}>
            <Image
              layout="responsive"
              width={50}
              height={25}
              src="/img/Material_UI.png"
              alt="Imagen de Material UI"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Skills;
