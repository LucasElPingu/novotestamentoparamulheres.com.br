import styles from './Audience.module.css'

// Audience: who the ebook is for
export default function Audience() {
  return (
    <section id="para-quem" className={styles.altSection}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Para quem é</h2>
        <ul className={styles.audienceList}>
          <li><span className={styles.check} aria-hidden>✓</span> Mulheres que desejam entender a Bíblia com profundidade.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Mães e esposas que buscam fortalecer o lar na fé.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Líderes e discipuladoras que servem outras mulheres.</li>
          <li><span className={styles.check} aria-hidden>✓</span> Novas convertidas que querem começar do jeito certo.</li>
        </ul>
      </div>
    </section>
  )
}
