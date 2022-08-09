import React from 'react';
import styles from '../../../styles/Vendas/CardsStepsContainer.module.scss';

export default function CardSteps({ title, text, current, setCurrent, chave }) {
  const cardRef = React.useRef();

  React.useEffect(() => {
    if (window.innerWidth >= 1024) {
      if (Number(cardRef.current.dataset.key) === current) {
        cardRef.current.classList.add(`${styles.current}`);
      } else {
        cardRef.current.classList.remove(`${styles.current}`);
      }
    } else {
      cardRef.current.classList.add(`${styles.mobile}`);
    }
  });

  function handleOver() {
    setCurrent(Number(cardRef.current.dataset.key));
  }

  return (
    <li
      ref={cardRef}
      data-key={chave}
      onMouseOver={handleOver}
      onClick={handleOver}
      onTouchStart={handleOver}
      aria-hidden="true"
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
}
