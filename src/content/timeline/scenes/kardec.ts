import type { TimelineScene } from "../types";

export const kardecScene: TimelineScene = {
  id: "kardec",
  timelineLabel: "Allan Kardec",
  timelineShortLabel: "Kardec",
  period: "Século XIX",
  title: "Observar, comparar, deduzir",
  introduction:
    "A formação do educador Hippolyte Léon Denizard Rivail encontra os fenômenos do século XIX e dá origem ao trabalho de Allan Kardec.",
  kind: "history",
  background: {
    mobile: "/timeline/kardec/Kardec.png",
    alt: "Retrato histórico de Allan Kardec sentado",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(.22) contrast(1.04) saturate(.68)",
    overlay: "linear-gradient(to bottom, rgba(36,27,20,.04), rgba(25,20,16,.07) 58%, rgba(20,16,13,.76))",
    accent: "#c9a45c",
    textColor: "#f5efe3",
  },
  hotspots: [
    {
      id: "allan-kardec",
      label: "Allan Kardec",
      ariaLabel: "Abrir aprofundamento sobre Allan Kardec",
      asset: "/timeline/kardec/Kardec.svg",
      position: {
        mobile: { top: "20%", left: "-10%", width: "116%" },
        desktop: { top: "19%", left: "-8%", width: "112%" },
      },
      highlightMode: "tint",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .38)",
      detail: {
        eyebrow: "O pesquisador",
        title: "Do educador Rivail ao codificador Kardec",
        introduction:
          "Nascido em Lyon, em 3 de outubro de 1804, Rivail construiu sua trajetória no ensino antes de adotar o nome Allan Kardec em suas obras espíritas.",
        heroAsset: "/timeline/kardec/Kardec.svg",
        blocks: [
          {
            id: "trajetoria",
            title: "Da educação à pesquisa",
            body: "Sua formação na tradição pedagógica de Pestalozzi valorizava observação, clareza, comparação e desenvolvimento do raciocínio. Esses princípios reaparecem na maneira como Kardec examina os fenômenos e organiza o ensino recebido.",
          },
          {
            id: "papel",
            title: "Codificar não é criar",
            body: "Nos materiais do seminário, Kardec aparece como organizador e pesquisador, não como fonte isolada da revelação. Seu papel é reunir, confrontar, classificar e expor metodicamente um ensino apresentado como coletivo.",
          },
        ],
      },
    },
    {
      id: "pena",
      label: "A pena",
      ariaLabel: "Abrir aprofundamento sobre a pena e o trabalho de escrita",
      asset: "/timeline/kardec/Trabalhos.svg",
      position: {
        mobile: { top: "50%", left: "1%", width: "34%", transform: "rotate(-4deg)" },
        desktop: { top: "50%", left: "2%", width: "33%", transform: "rotate(-4deg)" },
      },
      highlightMode: "glow",
      highlightColor: "#d5c3a2",
      glowColor: "rgba(213, 195, 162, .45)",
      detail: {
        eyebrow: "Método experimental",
        title: "Os fatos antes da teoria",
        introduction:
          "O método parte dos acontecimentos observados. Só depois de comparar casos, analisar recorrências e buscar suas causas é que uma explicação pode ser formulada.",
        heroAsset: "/timeline/kardec/Trabalhos.svg",
        blocks: [
          {
            id: "metodo",
            title: "Observar, comparar, analisar",
            body: "Kardec descreve um percurso semelhante ao das ciências de observação: reunir fatos novos, compará-los, remontar dos efeitos às causas, deduzir consequências e buscar aplicações úteis, sem estabelecer antecipadamente uma teoria fechada.",
            quote:
              "“Não foram os fatos que vieram a posteriori confirmar a teoria: a teoria é que veio subsequentemente explicar e resumir os fatos.” — A Gênese, cap. I, item 14",
          },
        ],
        references: [
          {
            label: "O método experimental na elaboração do Espiritismo",
            source: "Allan Kardec — A Gênese, cap. I, item 14",
            url: "https://kardecpedia.com/roteiro-de-estudos/888/a-genese-os-milagres-e-as-predicoessegundo-o-espiritismo/3538/a-genese/capitulo-i-carater-da-revelacao-espirita/14",
          },
        ],
      },
    },
    {
      id: "cartas",
      label: "Cartas e anotações",
      ariaLabel: "Abrir aprofundamento sobre cartas e anotações",
      asset: "/timeline/kardec/Carta.svg",
      position: {
        mobile: { top: "75%", left: "7%", width: "34%" },
        desktop: { top: "74%", left: "8%", width: "33%" },
      },
      highlightMode: "outline",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .42)",
      detail: {
        eyebrow: "Correspondência",
        title: "Uma rede de observações",
        introduction:
          "Cartas, relatos e comunicações vindos de diferentes lugares permitiam confrontar informações que não dependiam de um único médium ou grupo.",
        heroAsset: "/timeline/kardec/Carta.svg",
        blocks: [
          {
            id: "correspondencia",
            title: "Concordância entre fontes independentes",
            body: "Uma mensagem isolada não bastava. O critério proposto buscava concordância espontânea entre comunicações obtidas por numerosos médiuns, estranhos uns aos outros e distribuídos por diferentes lugares.",
            quote:
              "“Nessa universalidade do ensino dos Espíritos reside a força do Espiritismo.” — O Evangelho segundo o Espiritismo, Introdução, item II",
          },
          {
            id: "razao",
            title: "Razão, ensaio e revisão",
            body: "A razão funcionava como primeiro controle. A Revista Espírita também servia como terreno de ensaio: ideias eram apresentadas, comparadas e submetidas à discussão antes de integrarem uma formulação mais estável.",
          },
        ],
        references: [
          {
            label: "Controle universal do ensino dos Espíritos",
            source: "Allan Kardec — O Evangelho segundo o Espiritismo, Introdução, item II",
            url: "https://www.kardecpedia.com/roteiro-de-estudos/887/o-evangelho-segundooespiritismo/2052/introducao/ii-autoridade-da-doutrina-espirita",
          },
          {
            label: "Autoridade da Doutrina Espírita",
            source: "Revista Espírita, abril de 1864",
            url: "https://kardecpedia.com/roteiro-de-estudos/898/revista-espirita-jornal-de-estudospsicologicos-1864/5594/abril/autoridade-da-doutrina-espiritos",
          },
        ],
      },
    },
  ],
};

