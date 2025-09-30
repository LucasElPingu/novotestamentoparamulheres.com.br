import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./Bonus365.module.css";

// Bonus365: migrated implementation from original SectionImage2.
export default function Bonus365() {
  return (
    <section id="bonus-365" className={styles.section}>
      {/* decorative butterfly near the section title */}
      <Butterfly className="medium" />

      <div className={styles.bonusDecorative}>
        <div className={styles.overlayWrap} aria-hidden>
          <Image
            src="/images/fly6.png"
            alt=""
            fill
            className={styles.overlayImg}
          />
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          <Butterfly className="small" />
          Bônus Exclusivos — Devocional 365
        </h1>
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <strong>3 Fevereiro</strong>
              <span className={styles.verse}>Provérbios 31:30</span>
            </div>
            <h3 className={styles.cardTitle}>Reflexão</h3>
            <p className={styles.cardText}>
              A verdadeira beleza de uma mulher está no temor e na reverência a
              Deus. Hoje, reconheça que o valor que vem do coração, moldado pela
              fé e pelo amor divino, supera qualquer aparência externa.
            </p>
            <p className={styles.prayer}>
              <strong>Oração:</strong> “Senhor, ajuda‑me a cultivar um coração
              que Te...“
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <strong>21 Maio</strong>
              <span className={styles.verse}>Salmos 90:12</span>
            </div>
            <h3 className={styles.cardTitle}>Reflexão</h3>
            <p className={styles.cardText}>
              Irmã, valorize cada dia e viva com propósito, permitindo que a
              sabedoria divina guie sua jornada.
            </p>
            <p className={styles.prayer}>
              <strong>Oração:</strong> “Senhor, ajuda‑me a viver...“
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <strong>1 Junho</strong>
              <span className={styles.verse}>Isaías 26:3</span>
            </div>
            <h3 className={styles.cardTitle}>Reflexão</h3>
            <p className={styles.cardText}>
              Junho começa com um convite poderoso: firmar nossos olhos e
              coração em Deus. A paz não vem de circunstâncias, mas da confiança
              em Deus. Sua paz não depende da situação, mas da Presença.
            </p>
            <p className={styles.prayer}>
              <strong>Oração:</strong> “Senhor, ajuda‑me a manter meu...“
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
