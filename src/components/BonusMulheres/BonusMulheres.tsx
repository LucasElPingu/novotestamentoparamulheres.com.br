import Butterfly from "@/components/Butterfly/Butterfly";
import styles from "./BonusMulheres.module.css";

// Seção de bônus exclusivos para o devocional
export default function BonusMulheres() {
  return (
    <section id="bonus-mulheres" className={styles.section}>
      {/* Borboleta decorativa */}
      <Butterfly className={`${styles.butterfly} medium rotate`} />

      <div className={styles.inner}>
        <h2 className={styles.title}>
          <Butterfly className="small" />
          Bônus Exclusivos — Devocional: Mulheres da Bíblia
        </h2>

        <div className={styles.grid}>
          {/* Card Ana */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Dia 4</h3>
            <p className={styles.tag}>
              <strong>Ana:</strong> O Poder da Oração Perseverante
            </p>
            <h4 className={styles.subtitle}>Estudo profundo</h4>
            <p className={styles.text}>
              Ana, mãe do profeta Samuel, é símbolo de oração fervorosa; mesmo
              diante da vergonha e dor por ser estéril, ela levou sua dor ao
              altar com entrega e fé. Deus ouviu e ela concebeu Samuel.
            </p>
          </div>

          {/* Card Lição espiritual */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Lição espiritual</h3>
            <p className={styles.text}>
              Não adianta fazer muito se o coração estiver distante. Sirva, sim.
              Mas antes, sente-se aos pés de Jesus. A presença dEle é a melhor
              parte.
            </p>
            <p className={styles.prayer}>
              <strong>Oração:</strong> Senhor, ajuda-me a encontrar equilíbrio
              entre servir e te adorar.
            </p>
          </div>

          {/* Card Joquebede */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Dia 13</h3>
            <p className={styles.tag}>
              <strong>Joquebede:</strong> Maternidade Profética e Fé Estratégica
            </p>
            <h4 className={styles.subtitle}>Estudo profundo</h4>
            <p className={styles.text}>
              Joquebede protegeu Moisés em tempos de perseguição, escondendo-o e
              confiando no plano do Senhor. Sua ação de fé salvou uma nação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
