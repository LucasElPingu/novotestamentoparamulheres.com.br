import React from 'react'
import styles from './IntroducaoNT.module.css'
import Butterfly from '@/components/Butterfly/Butterfly'

// IntroducaoNT: migrated implementation from original SectionImage5.
export default function IntroducaoNT(){
  return (
    <section id="introducao" className={styles.section}>
      <Butterfly className="medium" />
      <div className={styles.inner}>
        <h2 className={styles.title}><Butterfly className="small" />Índice Enriquecido — Introdução ao Novo Testamento</h2>
        <div className={styles.twoCol}>
          <div>
            <h3>O que é o Novo Testamento</h3>
            <p>Conjunto de 27 livros, escritos em grego koiné, entre aproximadamente 50 d.C. e 95 d.C.</p>
            <ul>
              <li>Evangélios (4): Mateus, Marcos, Lucas, João</li>
              <li>História (1): Atos dos Apóstolos</li>
              <li>Cartas (21): 13 de Paulo, 8 gerais</li>
              <li>Profecia (1): Apocalipse</li>
            </ul>
          </div>

          <div>
            <h3>Contexto Histórico</h3>
            <p><strong>Império Romano:</strong> paz romana, estradas, moeda única; cultura helenística; práticas sociais e cidadania.</p>
            <p><strong>Judaísmo no 1º século:</strong> Templo como centro religioso; sinagoga como espaço de ensino; expectativa messiânica.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
