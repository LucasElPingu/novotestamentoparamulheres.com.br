import styles from "./About.module.css";

// About section: short intro and feature list
export default function About() {
  return (
    <section id="sobre" className={styles.sectionWrapper}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Sobre o Devocional</h2>
        <p className={styles.sectionIntro}>
          Este eBook foi escrito para guiá-la com clareza pelas páginas do Novo
          Testamento, conectando o coração à verdade bíblica. A cada leitura,
          você será transformada pela palavra e viverá a vida que Jesus
          escolheu para você.
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>
              ✓
            </span>
            <p className={styles.featureText}>
              Explicações acessíveis que respeitam o texto bíblico.
            </p>
          </div>

          <div className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>
              ✓
            </span>
            <p className={styles.featureText}>
              Conexões históricas que revelam o contexto do Evangelho.
            </p>
          </div>

          <div className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>
              ✓
            </span>
            <p className={styles.featureText}>
              Aplicações práticas para sua vida, família e ministério.
            </p>
          </div>

          <div className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>
              ✓
            </span>
            <p className={styles.featureText}>
              Orações e reflexões para cultivar uma devoção diária.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
