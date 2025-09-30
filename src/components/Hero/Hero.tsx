import Image from "next/image";
import styles from "./Hero.module.css";

// Hero: title, subtitle, CTA and book visual. Uses next/image for images.
export default function Hero() {
  return (
    <section id="topo" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Devocional do Novo Testamento para Mulheres
          </h1>
          <p className={styles.heroSubtitle}>
            Um mergulho profundo na Palavra que vai transformar sua forma de ver
            Jesus e a Bíblia.
          </p>
          <div className={styles.left}>
            <p className={styles.label}>Por apenas</p>
            <div className={styles.installment}>
              <span className={styles.times}>11x de</span>
              <span className={styles.priceBig}>R$ 5,37</span>
            </div>
            <p className={styles.avista}>
              ou <strong>R$ 49,90</strong> à vista
            </p>
          </div>

          <div className={styles.heroActions}>
            <a
              href="https://chk.eduzz.com/69KA2GO70O"
              className={`${styles.primaryButton} ${styles.pulse}`}
              rel="nofollow noopener"
              target="_blank"
            >
              QUERO MEU DEVOCIONAL AGORA
            </a>
          </div>

          <ul className={styles.heroBullets}>
            <li>Clareza que ilumina o texto</li>
            <li>Coração em chamas pela Palavra</li>
            <li>Fé viva no dia a dia</li>
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.decorativeShape} aria-hidden>
            <div className={styles.decorativeLeft} aria-hidden>
              <Image
                src="/images/fly2.png"
                alt=""
                width={320}
                height={320}
                className={styles.leftImage}
              />
            </div>
            <Image
              src="/images/rose.png"
              alt=""
              width={300}
              height={300}
              className={styles.rose}
            />
          </div>

          <div className={styles.bookImageWrap}>
            <Image
              src="/images/book.png"
              alt="Capa do eBook Devocional"
              width={280}
              height={440}
              className={styles.bookImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
