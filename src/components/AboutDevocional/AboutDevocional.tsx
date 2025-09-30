import Butterfly from "@/components/Butterfly/Butterfly";
import Image from "next/image";
import styles from "./AboutDevocional.module.css";

// AboutDevocional: seção sobre o devocional
export default function AboutDevocional() {
  return (
    <section id="sobre" className={styles.section}>
      {/* Borboleta decorativa */}
      
      <div className={styles.inner}>
        
        {/* Fly1 decorativo flutuante */}
      <div className={styles.aboutDecorative} aria-hidden>
        <div className={styles.overlayWrap}>
          <Image
            src="/images/fly6.png"
            alt=""
            width={300}
            height={300}
            className={styles.overlayImg}
          />
        </div>
      </div>

        <div className={styles.left}>
          <h2 className={styles.title}>
            <span className={styles.titleIcon}>
              <Butterfly className="small" />
            </span>
            O que você vai encontrar neste devocional
          </h2>
          <ul className={styles.bullets}>
            <li>
              Uma explicação clara e acessível de cada parte do Novo Testamento.
            </li>
            <li>
              Conexões históricas, culturais e espirituais que tornam a leitura viva.
            </li>
            <li>Aplicações práticas para a vida da mulher cristã hoje.</li>
            <li>
              Orações e reflexões que tocam o coração e aproximam você de Deus.
            </li>
          </ul>
          <p className={styles.lead}>
            Este não é apenas um estudo bíblico. É o encontro diário com Jesus
            através da Palavra, explicado de forma humana, profunda e envolvente.
          </p>
        </div>

        <div className={styles.right}>
          <h3 className={styles.centerTitle}>
            Por que este ebook é diferente de tudo o que você já leu?
          </h3>
          <ul className={styles.features}>
            <li>
              Feito pensando em mulheres reais: donas de casa, trabalhadoras,
              esposas e mães.
            </li>
            <li>Une teologia e espiritualidade sem complicações.</li>
            <li>
              Enriquecido com mapas, genealogias e aplicações devocionais.
            </li>
            <li>
              Linha do tempo clara do Novo Testamento e índice enriquecido.
            </li>
          </ul>

          <div className={styles.ctaWrap}>
            <a className={styles.cta} href="https://chk.eduzz.com/69KA2GO70O">
              QUERO MEU DEVOCIONAL AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
