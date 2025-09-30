import styles from "./Guarantee.module.css";

// Guarantee section with centered CTA
export default function Guarantee() {
  return (
    <section id="garantia" className={styles.altSection}>
      <div className={`${styles.sectionInner} ${styles.garantiaInner}`}>
        <h2 className={styles.sectionTitle}>Garantia</h2>
        <p className={styles.sectionIntro}>
          Se não sentir crescimento em 7 dias, devolvo o valor. Basta enviar uma
          mensagem que cuidamos de tudo.
        </p>
        <a
          href="https://chk.eduzz.com/69KA2GO70O"
          className={styles.primaryButton}
          rel="nofollow noopener"
          target="_blank"
          aria-label="Comprar com garantia"
        >
          Comprar com Garantia
        </a>
      </div>
    </section>
  );
}
