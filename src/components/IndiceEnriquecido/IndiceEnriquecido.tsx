import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./IndiceEnriquecido.module.css";

// Índice enriquecido do Novo Testamento: imagens
export default function IndiceEnriquecido() {
  return (
    <section id="indice" className={styles.section}>
      

      <div className={styles.inner}>
        <Butterfly className={`${styles.butterfly} large rotate`} />
             {/* Fly1 decorativo flutuante */}
      <div className={styles.aboutDecorative} aria-hidden>
        <div className={styles.overlayWrap}>
          <Image
            src="/images/fly4.png"
            alt=""
            width={300}
            height={300}
            className={styles.overlayImg}
          />
        </div>
      </div>
        <h2 className={styles.title}>
          <Butterfly className="small" />
          Bônus Exclusivos — Índice Enriquecido do Novo Testamento
        </h2>

        <div className={styles.grid}>
          <Image
            src="/images/bonus3-1.jpg"
            alt="Índice Enriquecido 1"
            width={350}
            height={500}
            className={styles.cardImg}
          />
          <Image
            src="/images/bonus3-2.jpg"
            alt="Índice Enriquecido 2"
            width={350}
            height={500}
            className={styles.cardImg}
          />
        </div>
      </div>
    </section>
  );
}
