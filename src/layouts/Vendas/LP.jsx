import Header from "../../components/Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Briefing from "./Briefing";
import Contact from "./Contact";
import About from "./About";
import Footer from "../../components/Footer";

export default function LP() {
  return (
    <>
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
