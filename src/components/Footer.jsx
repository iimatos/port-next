import styles from '../../styles/Footer/Footer.module.scss';

const year = new Date().getFullYear();

export default function Footer({ logoText, pointer }) {
  return (
    <footer className={styles.footer}>
      <div className={`grid-120 ${styles.footer_wrapper}`}>
        <div className={styles.footer_logo}>
          {logoText}
          <span>{pointer}</span>
        </div>
        <p
          className={styles.footer_rights}
        >{`${year} - Todos os Direitos Reservados`}</p>
      </div>
    </footer>
  );
}
