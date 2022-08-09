import styles from '../../styles/Footer/Footer.module.scss';

export default function Footer({ logoText, rights, pointer }) {
  return (
    <footer className={styles.footer}>
      <div className={`grid-120 ${styles.footer_wrapper}`}>
        <div className={styles.footer_logo}>
          {logoText}
          <span>{pointer}</span>
        </div>
        <p className={styles.footer_rights}>{rights}</p>
      </div>
    </footer>
  );
}
