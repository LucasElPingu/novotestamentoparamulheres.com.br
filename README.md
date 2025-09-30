# NOVOTESTAMENTOPARAMULHERES.COM.BR

Site oficial do eBook Devocional do Novo Testamento para Mulheres.

## Tecnologias
- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- next/font (Inter + Playfair Display)
- (Opcional) Tailwind CSS 4 já configurado via PostCSS, mas não é obrigatório

## Estrutura de Pastas
```
src/
  app/
    layout.tsx        // SEO global (title, description, keywords, OpenGraph/Twitter) e fontes
    globals.css       // Estilos globais (cores base, tipografia, animações)
    page.tsx          // Composição das seções da Home
  components/
    Header/           // Cabeçalho com CTA de compra
    Hero/             // Título, subtítulo, preço em destaque e visual do eBook
    About/            // Introdução e destaques do devocional
    Benefits/         // Diferenciais do material
    Bonus/            // Grade de bônus em cartões
    Bonus365/         // Seção visual do bônus 365 dias
    BonusMulheres/    // Seção visual do bônus Mulheres da Bíblia
    IndiceEnriquecido// Seção visual do índice enriquecido
    ConviteTransformacao/ // Seção de texto motivacional e imagem do eBook
    Testimonials/     // Depoimentos (avatar + quote)
    Guarantee/        // Garantia + CTA
    CtaFinal/         // Repetição de CTA final com imagem do livro
    Footer/           // Rodapé com links institucionais
  public/
    /images, /avatars // Imagens usadas nas seções
    robots.txt, sitemap.xml, favicon.svg, (share.png)
```

## Funcionalidades
- Página de vendas responsiva com várias seções temáticas
- Imagens otimizadas com `next/image`
- Navegação por âncoras
- Metadados completos para SEO e redes sociais

## Instalação e Execução
```bash
pnpm i # ou npm i, ou yarn
pnpm dev # ou npm run dev, ou yarn dev
pnpm build && pnpm start # produção
```

## SEO, Favicon e Social
- Metadados configurados em `src/app/layout.tsx`

## Responsividade
- Todas as seções utilizam grid/flex com breakpoints em 768px e 1024px
- Elementos decorativos que poderiam causar rolagem lateral foram ocultados em telas menores
- Testado para evitar sobreposição e deslocamentos inesperados

## Autor
- Lucas Silva
