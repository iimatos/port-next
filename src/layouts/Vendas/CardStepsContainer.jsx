import React from 'react';
import CardSteps from './CardSteps';
import styles from '../../../styles/Vendas/CardsStepsContainer.module.scss';

export default function CardStepsContainer() {
  const [current, setCurrent] = React.useState(0);

  return (
    <ul className={styles.cards_steps_container}>
      <CardSteps
        title="01. Estudo"
        text="Antes de iniciar o desenvolvimento preciso aprender sobre o seu objetivo. Nessa etapa você vai me ensinar tudo o que eu preciso saber sobre seu produto, empresa, público alvo e meta."
        chave="0"
        setCurrent={setCurrent}
        current={current}
      />

      <CardSteps
        title="02. Design"
        text="Hora de colocar a mão na massa. Essa estapa do projeto envolve a elaboração do design da página de acordo com o estudo realizado. O design final é enviado para a aprovação do cliente que deverá opinar sobre possíveis mudanças antes de aprovar o projeto. Serão realizadas até 3 etapas dessa fase."
        chave="1"
        setCurrent={setCurrent}
        current={current}
      />

      <CardSteps
        title="03. Desenvolvimento"
        text="Aprovado o design final é hora de iniciar o desenvolvimento da página. Essa etapa é feita através das melhores práticas do mercado. Ao final do desenvolvimento você terá uma página responsiva, veloz e bela."
        chave="2"
        setCurrent={setCurrent}
        current={current}
      />
      <CardSteps
        title="04. Suporte"
        text="Você não entende nada sobre sites, domínios e hospedagens? Não tem problema, durante todo o processo estarei disponível para tirar as dúvidas sobre as questões que envolvem a infraestrutura para hospedar o site."
        chave="3"
        setCurrent={setCurrent}
        current={current}
      />
    </ul>
  );
}
