import Butterfly from "@/components/Butterfly/Butterfly";
import styles from "./Footer.module.css";

// Footer: copyright and institutional links
export default function Footer() {
  return (
    <>
      <footer className={styles.siteFooter}>
        {/* Decorative butterfly at the footer corner */}
        <Butterfly className="small rotate" />
        <div className={styles.footerInner}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} novotestamentoparamulheres.com.br –
            Todos os direitos reservados.
          </p>
          <nav className={styles.footerNav} aria-label="Links institucionais">
            <a href="#politica" className={styles.footerLink}>
              Política
            </a>
            <a href="#contato" className={styles.footerLink}>
              Contato
            </a>
            <a href="#direitos" className={styles.footerLink}>
              Direitos Autorais
            </a>
          </nav>
        </div>
      </footer>

      <div id="politica" className={styles.footerNote}>
        Política de privacidade: seus dados não serão compartilhados.
      </div>
      <div id="contato" className={styles.footerNote}>
        Contato: liviaandrademkt@gmail.com
      </div>
      <div id="direitos" className={styles.footerNote}>
        Conteúdo protegido por direitos autorais.
      </div>
    </>
  );
}
