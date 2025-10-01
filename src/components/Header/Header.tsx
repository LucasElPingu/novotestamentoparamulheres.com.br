import styles from "./Header.module.css";

// Header component: brand, nav and CTA. Kept markup/content identical to original page.
export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <nav className={styles.primaryNav} aria-label="Navegação principal">
          <a href="#sobre" className={styles.navLink}>
            O que é
          </a>
          <a href="#beneficios" className={styles.navLink}>
            Benefícios
          </a>
          <a href="#bonus" className={styles.navLink}>
            Bônus
          </a>
          <a href="#depoimentos" className={styles.navLink}>
            Depoimentos
          </a>
          <a
            href="https://chk.eduzz.com/69KA2GO70O"
            className={`${styles.navLink} ${styles.navBuy}`}
            rel="nofollow noopener"
            target="_blank"
          >
            Comprar
          </a>
        </nav>
      </div>
    </header>
  );
}
