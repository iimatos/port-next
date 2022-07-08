import styles from "../../../styles/Buttons/Buttons.module.scss";

export default function ButtonLink({ href, cta }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.button_primary}
    >
      {cta}
    </a>
  );
}
