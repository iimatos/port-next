import React from 'react';
import SubtitleVendas from '../../components/Headings/SubtitleVendas';
import CardStepsContainer from './CardStepsContainer';
import styles from '../../../styles/Vendas/Briefing.module.scss';
import useObserver from '../../hooks/useObserver.js';

export default function Briefing() {
  const { setComponent } = useObserver('onview');
  const ref = React.useRef();

  React.useEffect(() => {
    setComponent(ref.current);
  }, [ref]);
  return (
    <section className={`${styles.container_briefing}`} ref={ref}>
      <div className="grid-120">
        <SubtitleVendas subtitle={'O caminho até lá'} pointer="." />
        <p>
          Entenda um pouco do processo de criação desde o estudo inicial até a
          implementação.
        </p>
        <CardStepsContainer />
      </div>
    </section>
  );
}
