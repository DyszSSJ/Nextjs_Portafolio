/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, paginas }) => {
  return (
    <>
      <Head>
        <title>Axel David Telléz Álvarez - {paginas}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/pngegg.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;