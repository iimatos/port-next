import Header from "../../components/Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Briefing from "./Briefing";
import Contact from "./Contact";
import About from "./About";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function LP() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Desenvolvedor e designer para o seu lançamento digital. Tenha páginas com design único e velozes"
        />
        <meta name="theme-color" content="C070FE"></meta>
        <meta property="og:url" content="http://www.example.com" />
        <meta property="og:title" content="Igor - Desenvolvedor" />
        <meta
          property="og:description"
          content="Desenvolvedor e designer para o seu lançamento digital. Tenha páginas com design único e velozes"
        />
        <meta property="og:site_name" content="Igor Matos" />
        <meta property="og:image" content="http://www.example.com/image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="36x36"
        ></link>
        <title>Igor - Desenvolvedor</title>
      </Head>
      <Header description={"Desenvolvedor Front-end"} />
      <Hero title="Experiência de primeira" />
      <Portfolio />
      <Briefing />
      <Contact />
      <About />
      <Footer
        logoText={"IM"}
        pointer={"."}
        rights={"2022 - Todos os Direitos Reservados"}
      />
    </>
  );
}
