# Linha do tempo interativa — história do Espiritismo

Experiência editorial mobile first construída com Next.js App Router, TypeScript, Motion, Radix Dialog e Zustand. A navegação entre cenas usa scroll vertical natural com `scroll-snap` em modo `proximity`; os objetos de uma cena podem ser explorados em qualquer ordem.

> Os textos históricos atuais são provisórios. Procure por `TODO: substituir pelo conteúdo final` em `src/content/timeline/scenes` antes da publicação editorial.

## Executar e validar

Use Node.js 20.9 ou superior (requisito do Next.js 16.2.10 instalado no projeto).

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar uma entrega:

```bash
npm run lint
npm run build
npm run start
```

## Onde ficam os assets

Imagens e SVGs locais ficam em `public/timeline`. Caminhos usados no conteúdo começam por `/timeline/`, pois a pasta `public` é a raiz pública do Next.js.

Mapeamentos preservados dos arquivos fornecidos:

| Cena | Background | SVGs interativos |
| --- | --- | --- |
| Abertura | `public/timeline/intro/intro.png` | — |
| Moisés | `public/timeline/moises/moises.png` | `Moises.svg` |
| Jesus ensinando | `public/timeline/jesus-ensinamentos/jesus-ensinamentos.png` | `Cristo.svg` |
| Santa Ceia | `public/timeline/santa-ceia/santa-ceia.png` | `Consolador.svg` |
| Mesas girantes | `public/timeline/mesas-girantes/mesas-girantes.png` | `Mesas.svg`, `Fox.svg` |
| Kardec | `public/timeline/kardec/Kardec.png` | `Kardec.svg`, `Carta.svg`, `Trabalhos.svg` |
| O Livro dos Espíritos | `public/timeline/livro-dos-espiritos/livro-dos-espiritos.png` | `Title.svg`, `Name.svg` |
| Evento | `public/timeline/emees/emees.png` | `Cartaz.svg` |

As diferenças de capitalização e a pasta `emees` foram mantidas para não renomear assets sem necessidade. Não há assets remotos.

## Editar textos

Todo o conteúdo editorial está em `src/content/timeline/scenes`. Edite `title`, `introduction`, `detail.introduction`, `blocks`, `quote` e `references` nesses módulos. Textos de interface compartilhados ficam em `src/content/timeline/index.ts`, no objeto `timelineUi`.

Os componentes em `src/components/timeline` apenas apresentam esses dados; não contêm conteúdo histórico definitivo.

## Criar uma cena

1. Adicione o background e seus SVGs em uma nova pasta de `public/timeline`.
2. Crie um módulo em `src/content/timeline/scenes`, exportando um `TimelineScene`.
3. Importe a cena em `src/content/timeline/index.ts`.
4. Insira-a em `timelineScenes` no ponto cronológico correto.

Cenas podem ter `hotspots: []`. `kind: "opening"` aplica a composição introdutória; `kind: "continuation"` acrescenta o tratamento visual de continuidade no encerramento.

## Criar e posicionar um hotspot

Cada hotspot é um item independente no array `hotspots` da cena. A posição usa porcentagens relativas à composição central de até 430 px, não à largura total do desktop:

```ts
position: {
  mobile: {
    top: "18%",
    left: "12%",
    width: "64%",
  },
  desktop: {
    top: "17%",
    left: "13%",
    width: "62%",
  },
},
```

- `top`: distância do topo da cena.
- `left`: distância da borda esquerda da composição mobile.
- `width`: largura do SVG em relação à composição.
- `transform`: ajuste opcional, como `rotate(-3deg)`.
- `desktop`: opcional; quando ausente, repete a posição mobile.

Para calibrar, abra o modo responsivo do navegador em 390 × 844 px, ative a lupa e ajuste as três porcentagens até o SVG coincidir com o objeto da imagem.

## Configurar brilho e cores

Cada hotspot aceita:

```ts
highlightMode: "glow-and-tint",
highlightColor: "#ead38c",
glowColor: "rgba(234, 211, 140, .52)",
```

Modos disponíveis: `glow`, `tint`, `glow-and-tint` e `outline`. `highlightColor` controla contorno e `drop-shadow`; `glowColor` é o fallback do halo radial. Navegadores com suporte a `color-mix()` derivam o halo de `highlightColor`.

O tratamento geral da imagem fica em `appearance.imageFilter`, `appearance.overlay`, `appearance.accent` e `appearance.textColor` da cena.

## Adicionar referências

Inclua `references` dentro de `detail`. A seção “Quer saber mais?” só aparece quando o array existe e contém itens.

```ts
references: [
  {
    label: "Título legível da referência",
    source: "Nome da instituição ou obra",
    note: "Contexto opcional para o leitor.",
    url: "https://exemplo.org/referencia",
  },
],
```

Os links abrem em nova aba com `noopener noreferrer` e identificação visual de link externo.

## Exemplo completo de cena

```ts
import type { TimelineScene } from "../types";

export const exemploScene: TimelineScene = {
  id: "exemplo",
  timelineLabel: "Cena de exemplo",
  timelineShortLabel: "Exemplo",
  period: "1900",
  title: "Título configurável",
  introduction: "Introdução configurável da cena.",
  kind: "history",
  background: {
    mobile: "/timeline/exemplo/fundo.png",
    alt: "Descrição objetiva da imagem histórica",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(.18) contrast(1.06) saturate(.82)",
    overlay: "linear-gradient(to bottom, rgba(0,0,0,.12), rgba(0,0,0,.68))",
    accent: "#c9a45c",
    textColor: "#f5efe3",
  },
  hotspots: [
    {
      id: "objeto",
      label: "Objeto histórico",
      ariaLabel: "Abrir aprofundamento sobre o objeto histórico",
      asset: "/timeline/exemplo/objeto.svg",
      position: {
        mobile: { top: "24%", left: "18%", width: "58%" },
        desktop: { top: "23%", left: "19%", width: "56%" },
      },
      highlightMode: "glow-and-tint",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .52)",
      detail: {
        eyebrow: "Capítulo",
        title: "Título do aprofundamento",
        introduction: "Introdução do conteúdo imersivo.",
        heroAsset: "/timeline/exemplo/objeto.svg",
        blocks: [
          {
            id: "contexto",
            eyebrow: "Contexto",
            title: "Subtítulo opcional",
            body: "Texto do primeiro bloco.",
            quote: "Citação opcional.",
          },
        ],
        references: [
          {
            label: "Referência complementar",
            source: "Fonte",
            note: "Nota opcional.",
            url: "https://exemplo.org",
          },
        ],
      },
    },
  ],
};
```

## Alterar a ordem da timeline

A ordem visual e a observação por scroll são derivadas exclusivamente de `timelineScenes` em `src/content/timeline/index.ts`. Mova o item no array; não é necessário alterar componentes ou criar rotas.

## Verificar acessibilidade

Antes de publicar:

1. Navegue somente com `Tab`, `Shift+Tab`, `Enter`, `Espaço` e `Esc`.
2. Confirme foco visível na lupa, hotspots, botão de retorno e referências.
3. Abra um hotspot, feche com `Esc` e confirme que o foco volta ao objeto correto sem mudar o scroll.
4. Teste com leitor de tela e confirme que cada hotspot possui um rótulo específico.
5. Ative “reduzir movimento” no sistema e verifique que não há pulsação ou grandes deslocamentos.
6. Verifique contraste e zoom de 200%.
7. Teste 360 px, 390 px e 430 px em modo retrato, além do desktop.
8. Confirme que o diálogo bloqueia o conteúdo atrás e mantém scroll interno.

O histórico visitado e a exibição da dica inicial são os únicos dados salvos no `localStorage`, sob a chave `timeline-preferences`.
