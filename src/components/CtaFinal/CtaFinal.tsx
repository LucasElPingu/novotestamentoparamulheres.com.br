import Image from "next/image";
import stylesb from "../Bonus/Bonus.module.css";
import styles from "./CtaFinal.module.css";

// Final CTA repeated to improve conversions
export default function CtaFinal() {
  return (
    <section id="cta-final" className={styles.ctaFinal}>
      <h2 className={styles.ctaFinalTitle}>
        🌸 Mulher, este é o momento de dar um passo mais profundo com Deus.🌸
        <br />
        Não adie o que o Espírito Santo já está soprando em seu coração.
      </h2>
      <div className={stylesb.bonusBookShowcase}>
        <Image
          src="/images/book.png"
          alt="Visual do eBook"
          width={360}
          height={480}
          className={stylesb.bookImageSmall}
        />
        <a
          href="https://chk.eduzz.com/69KA2GO70O"
          className={stylesb.primaryButton}
          rel="nofollow noopener"
          target="_blank"
        >
          Quero meu Devocional
        </a>
      </div>
      <a
        href="https://chk.eduzz.com/69KA2GO70O"
        className={styles.primaryButton}
        rel="nofollow noopener"
        target="_blank"
      >
        QUERO MEU DEVOCIONAL AGORA
      </a>
    </section>
  );
}
