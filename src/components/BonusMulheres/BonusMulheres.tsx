import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./BonusMulheres.module.css";

// BonusMulheres: imagens dos cards
export default function BonusMulheres() {
  return (
    <section id="bonus-mulheres" className={styles.section}>
      <div className={styles.inner}>
        <Butterfly className={`${styles.butterfly} medium rotate`} />
        <div className={styles.aboutDecorative} aria-hidden>
          <div className={styles.overlayWrap}>
            <Image
              src="/images/fly1.png"
              alt=""
              width={300}
              height={300}
              className={styles.overlayImg}
            />
          </div>
        </div>

        <h2 className={styles.title}>
          <Butterfly className="small" />
          Bônus Exclusivos — Devocional: Mulheres da Bíblia
        </h2>

        <div className={styles.grid}>
          <Image
            src="/images/bonus2-1.jpg"
            alt="Bônus Mulheres 1"
            width={400}
            height={500}
            className={styles.cardImg}
          />
          <Image
            src="/images/bonus2-2.jpg"
            alt="Bônus Mulheres 2"
            width={400}
            height={500}
            className={styles.cardImg}
          />
        </div>
      </div>
    </section>
  );
}
