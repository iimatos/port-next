import Link from "next/link";
import styles from "../../styles/Header/header.module.scss";

export default function Header({ description }) {
  return (
    <div className={styles.container_header}>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            IM - <span>{description}</span>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="#portfolio">Projetos</Link>
            </li>
            <li>
              <Link href="#contact">Contato</Link>
            </li>
            <li>
              <Link href="#about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
