import React from 'react'
import styles from './ConviteTransformacao.module.css'
import Butterfly from '@/components/Butterfly/Butterfly'

// ConviteTransformacao: migrated implementation from original SectionImage6.
export default function ConviteTransformacao(){
  return (
    <section id="convite" className={styles.section}>
      <Butterfly className="medium rotate" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}><Butterfly className="small" />Você já abriu a Bíblia e sentiu dificuldade?</h2>
          <p>Ou começou a ler, mas logo se perdeu nos nomes, cidades, símbolos e histórias? Eu sei como é... Muitas mulheres compartilham dessa luta. Mas também sei o que acontece quando a Palavra se abre diante dos nossos olhos:</p>
          <ul className={styles.list}>
            <li>Ganhamos clareza.</li>
            <li>Nosso coração pega fogo, como os discípulos no caminho de Emaús.</li>
            <li>E nossa fé se torna viva, prática e transformadora.</li>
          </ul>
          <p className={styles.conclusion}>Foi por isso que eu preparei este Devocional de Estudo do Novo Testamento: para guiar mulheres como você em uma jornada completa, profunda e simples de compreender.</p>
        </div>
        <div className={styles.mockup}>
          <svg width="220" height="300" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="220" height="300" rx="12" fill="#fff" stroke="#f6dce6" />
            <g transform="translate(18,18)">
              <path d="M30 20c18 0 36 0 54 0 6 0 12 8 12 14v160c0 6-6 14-12 14H30c-6 0-12-8-12-14V34c0-6 6-14 12-14z" fill="#fff0f6" stroke="#ffd6e8" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
