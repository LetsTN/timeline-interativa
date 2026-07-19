import type { TimelineScene } from "../types";

export const jesusEnsinamentosScene: TimelineScene = {
  id: "jesus-ensinamentos",
  timelineLabel: "Jesus ensinando",
  timelineShortLabel: "Jesus",
  period: "Século I",
  title: "A segunda revelação: o amor",
  introduction:
    "Jesus retoma o que há de eterno na lei e coloca o amor, o perdão e a transformação interior no centro da experiência religiosa.",
  kind: "history",
  background: {
    mobile: "/timeline/jesus-ensinamentos/jesus-ensinamentos.png",
    alt: "Pintura de Jesus ensinando a um grupo reunido ao ar livre",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(.08) contrast(1.04) saturate(.86)",
    overlay: "linear-gradient(to bottom, rgba(20,17,15,.04), rgba(20,17,15,.12) 55%, rgba(12,10,9,.76))",
    accent: "#d9b86c",
    textColor: "#f8f1e5",
  },
  hotspots: [
    {
      id: "cristo",
      label: "Os ensinamentos",
      ariaLabel: "Abrir aprofundamento sobre os ensinamentos de Jesus",
      asset: "/timeline/jesus-ensinamentos/Cristo.svg",
      position: {
        mobile: { top: "12%", left: "19%", width: "59%" },
        desktop: { top: "12%", left: "20%", width: "58%" },
      },
      highlightMode: "glow",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .5)",
      detail: {
        eyebrow: "Segunda revelação",
        title: "O eterno e divino na lei",
        introduction:
          "A segunda revelação não apaga a primeira: preserva seu fundamento moral, supera disposições transitórias e amplia a compreensão da vida e de suas consequências.",
        heroAsset: "/timeline/jesus-ensinamentos/Cristo.svg",
        blocks: [
          {
            id: "ensinamentos",
            title: "Uma ética do amor",
            body: "Na síntese trabalhada pelo seminário, a justiça prepara o caminho e o Evangelho revela o amor. A relação com Deus deixa de se apoiar apenas no temor e passa a ser compreendida pela confiança filial, pela caridade e pelo cuidado com o próximo.",
          },
          {
            id: "vida-futura",
            title: "A vida futura",
            body: "Kardec destaca que o Cristo acrescenta à antiga lei a perspectiva da vida futura e das consequências morais depois da morte. Essa ampliação oferece novo sentido à responsabilidade, ao sofrimento e à esperança.",
            quote:
              "“O Cristo, tomando da antiga lei o que é eterno e divino e rejeitando o que era transitório [...] acrescentou a revelação da vida futura.” — A Gênese, cap. I, item 22",
          },
        ],
        references: [
          {
            label: "Caráter da revelação espírita",
            source: "Allan Kardec — A Gênese, cap. I",
            note: "O item 22 relaciona a revelação do Cristo à antiga lei.",
            url: "https://kardecpedia.com/roteiro-de-estudos/888/a-genese-os-milagres-e-as-predicoessegundo-o-espiritismo/3524/a-genese/capitulo-i-carater-da-revelacao-espirita",
          },
        ],
      },
    },
  ],
};

