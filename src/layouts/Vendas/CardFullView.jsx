import React from "react";
import styles from "../../../styles/Vendas/CardFullView.module.scss";

export default function CardFullView({ cardView, index }) {
  const cardTrack = React.useRef();

  React.useEffect(() => {
    if (cardTrack) {
      cardTrack.current.scrollTo({ top: 0, behavior: "smooth" });
      cardTrack.current.classList.add(`${styles.show}`);
    }
  }, [cardView, index]);

  return (
    <div className={styles.container}>
      <p>
        {cardView.title}
        <span> / {cardView.type}</span>
      </p>
      <div className={styles.container_fullview}>
        <div className={`${styles.container_fullview_page}`} ref={cardTrack}>
          <img src={`/images/${cardView.src}-fullview.png`}></img>
        </div>
        <p>Visualização completa</p>
      </div>
    </div>
  );
}
