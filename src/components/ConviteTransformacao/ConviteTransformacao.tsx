import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./ConviteTransformacao.module.css";

// Convite à transformação
export default function ConviteTransformacao() {
  return (
    <section id="convite" className={styles.section}>
      <Butterfly className={`${styles.butterfly} medium rotate`} />

      <div className={styles.inner}>
        {/* Texto do convite */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            <Butterfly className="small" />
            Você já abriu a Bíblia e sentiu dificuldade?
          </h2>

          <p>
            Ou começou a ler, mas logo se perdeu nos nomes, cidades, símbolos e
            histórias? Eu sei como é... Muitas mulheres compartilham dessa luta.
            Mas também sei o que acontece quando a Palavra se abre diante dos
            nossos olhos:
          </p>

          <ul className={styles.list}>
            <li>Ganhamos clareza.</li>
            <li>
              Nosso coração pega fogo, como os discípulos no caminho de Emaús.
            </li>
            <li>E nossa fé se torna viva, prática e transformadora.</li>
          </ul>

          <p className={styles.conclusion}>
            Foi por isso que eu preparei este Devocional de Estudo do Novo
            Testamento: para guiar mulheres como você em uma jornada completa,
            profunda e simples de compreender.
          </p>
        </div>

        {/* Imagem do livro + Pricing */}
        <div className={styles.bookPricing}>
          <Image
            src="/images/book.png"
            alt="Visual do eBook"
            width={300}
            height={350}
            className={styles.bookImageSmall}
          />
         
        </div>
      </div>
    </section>
  );
}
