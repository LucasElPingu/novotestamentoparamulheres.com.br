import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./Bonus365.module.css";

// Bonus365: imagens dos cards
export default function Bonus365() {
  return (
    <section id="bonus-365" className={styles.section}>
      <div className={styles.inner}>
        <Butterfly className="medium" />

        <div className={styles.container}>
          <h1 className={styles.title}>
            <Butterfly className="small" />
            Bônus Exclusivos — Devocional 365
          </h1>

          <div className={styles.grid}>
            <Image
              src="/images/bonus1-1.png"
              alt="Bônus 1"
              width={350}
              height={500}
              className={styles.cardImg}
            />
            <Image
              src="/images/bonus1-2.png"
              alt="Bônus 2"
              width={350}
              height={500}
              className={styles.cardImg}
            />
            <Image
              src="/images/bonus1-3.png"
              alt="Bônus 3"
              width={350}
              height={500}
              className={styles.cardImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
