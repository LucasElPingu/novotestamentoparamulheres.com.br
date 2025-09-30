import Butterfly from '@/components/Butterfly/Butterfly'
import Image from 'next/image'
import styles from './Pricing.module.css'

// Pricing: prominent pricing block with emphasis on installment option and decorative butterfly
export default function Pricing(){
  return (
    <section id="preco" className={styles.section}>
      {/* decorative butterfly near price */}
      <Butterfly className="large rotate" />

      {/* Decorative price overlay image positioned behind the card */}
      <div className={styles.overlayWrap} aria-hidden>
        <Image src="https://cdn.builder.io/api/v1/image/assets%2Ff441341fa0c8439489d236cd7d5226e2%2F1f0a72abb7bd40dba72474ae693eec44?format=webp&w=1200" alt="" fill className={styles.overlayImg} />
      </div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.label}>Por apenas</p>
            <div className={styles.installment}>
              <span className={styles.times}>11x de</span>
              <span className={styles.priceBig}>R$ 5,37</span>
            </div>
            <p className={styles.avista}>ou <strong>R$ 49,90</strong> à vista</p>
          </div>
          <div className={styles.ctaWrap}>
            <a className={styles.cta} href="https://chk.eduzz.com/69KA2GO70O">COMPRAR AGORA</a>
          </div>
        </div>
      </div>
    </section>
  )
}
