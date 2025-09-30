import styles from './Benefits.module.css'

// Benefits: list of differentiators
export default function Benefits() {
  return (
    <section id="beneficios" className={styles.altSection}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Por que este eBook é diferente</h2>
        <ul className={styles.checkList}>
          <li><span className={styles.check} aria-hidden>✓</span> Teologia simples e profunda, para todos os níveis.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Mapas, genealogias e linha do tempo para visualizar a história.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Índice enriquecido para encontrar rapidamente os temas.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Leitura dinâmica com design pensado para mulheres.</li>
        </ul>
      </div>
    </section>
  )
}
