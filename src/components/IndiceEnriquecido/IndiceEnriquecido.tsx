import React from 'react'
import styles from './IndiceEnriquecido.module.css'
import Butterfly from '@/components/Butterfly/Butterfly'

// IndiceEnriquecido: migrated implementation from original SectionImage4.
export default function IndiceEnriquecido(){
  return (
    <section id="indice" className={styles.section}>
      <Butterfly className="large rotate" />
      <div className={styles.inner}>
        <h2 className={styles.title}><Butterfly className="small" />Bônus Exclusivos — Índice Enriquecido do Novo Testamento</h2>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3>Capítulo 14 — As Sete Igrejas da Ásia (Ap 2–3)</h3>
            <ul>
              <li>Éfeso: amor perdido</li>
              <li>Esmirna: sofrimento e fidelidade</li>
              <li>Pérgamo: compromisso com a verdade</li>
              <li>Tiatira: tolerância ao pecado</li>
            </ul>
            <p className={styles.apply}><strong>Aplicação:</strong> Examine-se: em qual igreja sua devoção se parece?</p>
          </div>

          <div className={styles.block}>
            <h3>Capítulo 6 — O Ministério de Jesus</h3>
            <ul>
              <li>6.1 Batismo e Tentação — vitória pela Palavra</li>
              <li>6.2 Chamado dos Discípulos — homens simples, missão grande</li>
              <li>6.3 Milagres e Ensinos — compaixão, autoridade</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h3>Capítulo 15 — O Trono e o Cordeiro</h3>
            <p>Visão do céu; adoração contínua e a dignidade do Cordeiro que abre os selos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
