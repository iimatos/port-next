import styles from '../../../styles/Vendas/CardsPortfolio.module.scss';

export default function CardsPortfolio({ cards, indexCard, setIndexCard }) {
  function handleActive({ currentTarget }) {
    setIndexCard(Number(currentTarget.dataset.key));
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_cards}>
        {cards.map((card) => (
          <div
            key={card.key}
            data-key={card.key}
            className={`${styles.card}  ${
              card.key === indexCard ? styles.active : null
            }`}
            onClick={handleActive}
            onTouchStart={handleActive}
            aria-hidden="true"
          >
            <img src={`/images/${card.src}.jpg`} alt="Projeto" />
          </div>
        ))}
      </div>
      <div className={styles.container_page} />
    </div>
  );
}
