import styles from '../../../styles/Vendas/About.module.scss';

export default function About() {
  return (
    <section className={`${styles.about} grid-120`} id="about">
      <div>
        <h2>
          Sobre mim
          <span>. /</span>
          <span>Igor Matos</span>
        </h2>
        <p>
          Estudo e trabalho com desenvolvimento web há 2 anos. Iniciei nessa
          jornada com o intuito de atender as demandas do mercado de
          infoprodutos e negócios locais.
        </p>
        <p>
          Sempre com o objetivo de oferecer o que há de melhor para o cliente,
          venho aprimorando constantemente meus conhecimentos em programação
          (javascript, pré-processadores, bundlers, ferramentas de automação e
          frameworks como React, Next).
        </p>
        <p>
          E isso é claro, sem deixar o visual para trás. Buscando entregar
          interfaces e experiências cada vez mais enriquecedoras ao usuário.
        </p>
      </div>
    </section>
  );
}
