import Image from "next/image";
import styles from "./Bonus.module.css";

// Bonus: cards grid and book showcase. Kept content identical to original page.
export default function Bonus() {
  return (
    <section id="bonus" className={styles.sectionWrapper}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Bônus Exclusivos</h2>
        <p className={styles.sectionIntro}>
          Bônus pensados para complementar sua jornada: Devocional 365, Mulheres
          da Bíblia, índice enriquecido, pack de figurinhas, frases
          motivacionais e comunidade no Telegram.
        </p>

        <div className={styles.bonusGrid}>
          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Bônus</div>
            <h3 className={styles.bonusTitle}>Devocional 365</h3>
            <p>Um plano completo para manter a constância diária.</p>
          </div>

          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Bônus</div>
            <h3 className={styles.bonusTitle}>Mulheres da Bíblia</h3>
            <p>Perfis inspiradores com aplicações práticas.</p>
          </div>

          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Bônus</div>
            <h3 className={styles.bonusTitle}>Índice Enriquecido</h3>
            <p>Encontre temas e referências com facilidade.</p>
          </div>

          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Bônus</div>
            <h3 className={styles.bonusTitle}>Pack de Figurinhas</h3>
            <p>Imagens e frases para compartilhar e motivar.</p>
          </div>

          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Bônus</div>
            <h3 className={styles.bonusTitle}>Frases Motivacionais</h3>
            <p>Palavras que encorajam sua caminhada.</p>
          </div>

          <div className={styles.bonusCard}>
            <div className={styles.bonusBadge}>Comunitário</div>
            <h3 className={styles.bonusTitle}>Grupo no Telegram</h3>
            <p>Comunidade para troca, suporte e oração.</p>
          </div>
        </div>

        <div className={styles.bonusBookShowcase}>
          <Image
            src="/images/book.png"
            alt="Visual do eBook"
            width={360}
            height={480}
            className={styles.bookImageSmall}
          />
          <a
            href="https://chk.eduzz.com/69KA2GO70O"
            className={styles.primaryButton}
            rel="nofollow noopener"
            target="_blank"
          >
            Quero meu Devocional
          </a>
        </div>
      </div>
    </section>
  );
}
