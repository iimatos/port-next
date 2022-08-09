import React from 'react';
import SubtitleVendas from '../../components/Headings/SubtitleVendas';
import CardsPortfolio from './CardsPortfolio';
import CardFullView from './CardFullView';
import styles from '../../../styles/Vendas/Portfolio.module.scss';
import useObserver from '../../hooks/useObserver';

const infoCards = [
  {
    title: 'Inês Sobral',
    type: 'Catálogo',
    src: 'page-01',
    key: 0,
  },
  {
    title: 'Proteka',
    type: 'Página de Captura',
    src: 'page-02',
    key: 1,
  },
  {
    title: 'Manual do Antidivórcio',
    type: 'Página de Vendas',
    src: 'page-03',
    key: 2,
  },
  {
    title: 'Lojas Contact',
    type: 'Página de Vendas',
    src: 'page-04',
    key: 3,
  },
];

function Portfolio() {
  const [indexCard, setIndexCard] = React.useState(0);
  const ref = React.useRef();

  const { setComponent } = useObserver('onview');

  React.useEffect(() => {
    setComponent(ref.current);
  }, [ref, setComponent]);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="grid-120" ref={ref}>
        <SubtitleVendas subtitle="Portfolio" pointer="." />
        <p>Aqui você pode visualizar algumas páginas desenvolvidas por mim.</p>
        <div className={styles.cards_container}>
          <CardsPortfolio
            indexCard={indexCard}
            setIndexCard={setIndexCard}
            cards={infoCards}
          />
          <CardFullView cardView={infoCards[indexCard]} index={indexCard} />
        </div>
      </div>
    </section>
  );
}

export default React.forwardRef(Portfolio);
