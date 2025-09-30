import Image from "next/image";
import styles from "./Testimonials.module.css";

// Testimonials: 4 blocks with avatars and quotes
export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.sectionWrapper}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Depoimentos</h2>
        <div className={styles.testimonialGrid}>
          <article className={styles.testimonialCard}>
            <Image
              src="/avatars/avatar1.png"
              alt="Foto da Ana"
              width={72}
              height={72}
              className={styles.avatar}
            />
            <blockquote className={styles.quote}>
              “Eu já tinha desistido de ler o Novo Testamento sozinha. Mas este
              devocional me deu direção, trouxe mapas, explicações e reflexões
              que transformaram minha fé. Agora ensino até minhas filhas com
              mais segurança!”
            </blockquote>
            <p className={styles.person}>Gabriela</p>
          </article>

          <article className={styles.testimonialCard}>
            <Image
              src="/avatars/avatar2.png"
              alt="Foto da Beatriz"
              width={72}
              height={72}
              className={styles.avatar}
            />
            <blockquote className={styles.quote}>
              “Nunca pensei que conseguiria entender tão claramente as cartas de
              Paulo e o Apocalipse. Este devocional abriu meus olhos e aqueceu
              meu coração. Sinto que cresci anos em apenas algumas semanas de
              estudo.”
            </blockquote>
            <p className={styles.person}>Adriana</p>
          </article>

          <article className={styles.testimonialCard}>
            <Image
              src="/avatars/avatar3.png"
              alt="Foto da Camila"
              width={72}
              height={72}
              className={styles.avatar}
            />
            <blockquote className={styles.quote}>
              “Sempre quis entender a Bíblia, mas o Novo Testamento parecia
              confuso demais. Com este devocional, foi como se Jesus mesmo
              estivesse explicando cada capítulo para mim. Hoje, minhas leituras
              são mais profundas e sinto a presença de Deus em cada página.”
            </blockquote>
            <p className={styles.person}>Solane</p>
          </article>

          <article className={styles.testimonialCard}>
            <Image
              src="/avatars/avatar4.png"
              alt="Foto da Daniela"
              width={72}
              height={72}
              className={styles.avatar}
            />
            <blockquote className={styles.quote}>
              “O que mais me tocou foi como cada lição termina com aplicação
              para a vida da mulher de hoje. Eu aprendi não só sobre Jesus, mas
              também a ser uma esposa, mãe e serva mais cheia de amor e fé. Foi
              o melhor investimento espiritual que já fiz.”
            </blockquote>
            <p className={styles.person}>Cristiane</p>
          </article>
        </div>
      </div>
    </section>
  );
}
