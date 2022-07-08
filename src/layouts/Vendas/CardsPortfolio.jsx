import { useRef } from "react";
import styles from "../../../styles/Vendas/CardsPortfolio.module.scss";

export default function CardsPortfolio({ cards, state, setState }) {
  function handleActive({ currentTarget }) {
    setState(Number(currentTarget.dataset.key));
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_cards}>
        {cards.map((card) => {
          return (
            <div
              key={card.key}
              data-key={card.key}
              className={`${styles.card}  ${
                card.key === state ? styles.active : null
              }`}
              onClick={handleActive}
            >
              <img src={`/images/${card.src}.jpg`}></img>
            </div>
          );
        })}
      </div>
      <div className={styles.container_page}></div>
    </div>
  );
}
