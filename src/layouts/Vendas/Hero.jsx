import Link from "next/link";
import styles from "../../../styles/Vendas/Hero.module.scss";
import ButtonLink from "../../components/Buttons/ButtonLink";

export default function Hero({ title }) {
  return (
    <section className={styles.hero}>
      <div className="grid-120">
        <div className={styles.hero_cta}>
          <h1>
            {title}
            <span>.</span>
          </h1>
          <p>
            Paginas feitas sobre medida para oferecer ao seu lead e cliente uma
            experiência única. Velocidade, responsividade, criatividade e beleza
            na sua tela.
          </p>
        </div>
        <div className={styles.buttons_side}>
          <ButtonLink
            href="https://wa.me/5538991336561"
            cta="Quero uma página"
          />
          <Link href="#portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
