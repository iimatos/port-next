import React from 'react';
import styles from '../../../styles/Vendas/Contact.module.scss';
import ButtonLink from '../../components/Buttons/ButtonLink';
import useObserver from '../../hooks/useObserver';

export default function Contact() {
  const ref = React.useRef();

  const { setComponent } = useObserver('onview');

  React.useEffect(() => {
    setComponent(ref.current);
  }, [ref, setComponent]);

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.contact_wrapper} grid-120`}>
        <div className={styles.contact_cta} ref={ref}>
          <h2>
            Vamos iniciar esse projeto
            <span>?</span>
          </h2>
          <p>
            Chegou o momento de expandir os horizontes do seu produto, empresa
            ou curso. Está esperando o que?
          </p>
          <ButtonLink href="https://wa.me/5538991336561" cta="Vamos lá" />
        </div>
      </div>
    </section>
  );
}
