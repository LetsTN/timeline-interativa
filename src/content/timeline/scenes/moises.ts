import type { TimelineScene } from "../types";

export const moisesScene: TimelineScene = {
  id: "moises",
  timelineLabel: "Moisés",
  timelineShortLabel: "Moisés",
  period: "Antiguidade",
  title: "A primeira revelação: justiça e fé",
  introduction:
    "Moisés anuncia a existência de um Deus único, promulga a lei do Sinai e estabelece um marco de responsabilidade moral.",
  kind: "history",
  background: {
    mobile: "/timeline/moises/moises.png",
    alt: "Gravura de Moisés erguendo as tábuas diante de uma multidão",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "grayscale(.12) sepia(.18) contrast(1.08) saturate(.78)",
    overlay: "linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.14) 48%, rgba(12,10,9,.78))",
    accent: "#d3ae62",
    textColor: "#f5efe3",
  },
  hotspots: [
    {
      id: "tabuas",
      label: "Tábuas dos mandamentos",
      ariaLabel: "Abrir aprofundamento sobre as tábuas dos mandamentos",
      asset: "/timeline/moises/Moises.svg",
      position: {
        mobile: { top: "4%", left: "-4%", width: "109%" },
        desktop: { top: "3%", left: "-3%", width: "106%" },
      },
      highlightMode: "glow-and-tint",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .58)",
      detail: {
        eyebrow: "Primeira revelação",
        title: "A lei como ponto de partida",
        introduction:
          "Na leitura apresentada pelo seminário, a primeira revelação prepara a humanidade pela ideia de justiça, pela unidade de Deus e por uma lei capaz de orientar a vida coletiva.",
        heroAsset: "/timeline/moises/Moises.svg",
        blocks: [
          {
            id: "contexto",
            eyebrow: "Contexto",
            title: "Um marco moral",
            body: "Como profeta, Moisés apresenta a fé em um Deus único, soberano e criador. Como legislador, organiza o povo hebreu e oferece uma disciplina compatível com as necessidades daquele tempo.",
            quote:
              "“Moisés, como profeta, revelou aos homens a existência de um Deus único [...] promulgou a lei do Sinai e lançou as bases da verdadeira fé.” — A Gênese, cap. I, item 21",
          },
          {
            id: "continuidade",
            title: "Uma preparação que continua",
            body: "A ênfase na justiça não encerra o processo. Ela cria uma base para a segunda revelação, na qual Jesus desloca o centro da lei para o amor, e para a terceira, associada ao esclarecimento e à verdade.",
          },
        ],
        references: [
          {
            label: "Moisés e a primeira revelação",
            source: "Allan Kardec — A Gênese, cap. I, item 21",
            note: "Trecho-base utilizado na apresentação do seminário.",
            url: "https://kardecpedia.com/roteiro-de-estudos/888/agenese-os-milagres-e-as-predicoes-segundo-oespiritismo/3545/a-genese/capitulo-i-carater-da-revelacao-espirita/21",
          },
        ],
      },
    },
  ],
};

