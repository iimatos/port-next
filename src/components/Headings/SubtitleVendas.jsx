import styles from '../../../styles/Vendas/Subtitle.module.scss';

export default function SubtitleVendas({ subtitle, pointer }) {
  return (
    <h2 className={styles.sub}>
      {subtitle}
      <span>{pointer}</span>
    </h2>
  );
}
