import type { TimelineScene } from "../types";

export const mesasGirantesScene: TimelineScene = {
  id: "mesas-girantes",
  timelineLabel: "Mesas girantes",
  timelineShortLabel: "Mesas",
  period: "Século XIX",
  title: "Fenômenos anunciam um novo tempo",
  introduction:
    "Pancadas, movimentos de objetos e respostas inteligentes saem do âmbito doméstico, alcançam os salões e despertam novas perguntas.",
  kind: "history",
  background: {
    mobile: "/timeline/mesas-girantes/mesas-girantes.png",
    alt: "Gravura de um salão do século dezenove durante uma reunião em torno de mesas",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "grayscale(.45) sepia(.1) contrast(1.04)",
    overlay: "linear-gradient(to bottom, rgba(255,250,240,.03), rgba(20,17,15,.12) 55%, rgba(16,13,11,.8))",
    accent: "#c9a45c",
    textColor: "#f6efe3",
  },
  hotspots: [
    {
      id: "mesa",
      label: "A mesa",
      ariaLabel: "Abrir aprofundamento sobre as mesas girantes",
      asset: "/timeline/mesas-girantes/Mesas.svg",
      position: {
        mobile: { top: "34%", left: "-1%", width: "100%" },
        desktop: { top: "34%", left: "0%", width: "98%" },
      },
      highlightMode: "outline",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .42)",
      detail: {
        eyebrow: "Fenômenos",
        title: "Das mesas à investigação",
        introduction:
          "A chamada dança das mesas tornou visível um conjunto de fenômenos que, pouco a pouco, deixou de ser visto apenas como divertimento de salão.",
        heroAsset: "/timeline/mesas-girantes/Mesas.svg",
        blocks: [
          {
            id: "saloes",
            title: "O primeiro fato observado",
            body: "O movimento de objetos foi o ponto de partida mais conhecido. Embora pudesse ocorrer com outros móveis, a mesa se tornou o símbolo do fenômeno por reunir facilmente várias pessoas ao seu redor.",
            quote:
              "“O primeiro fato observado foi o da movimentação de objetos diversos. Designaram-no vulgarmente pelo nome de mesas girantes ou dança das mesas.” — O Livro dos Espíritos, Introdução, item III",
          },
          {
            id: "inteligencia",
            title: "Do efeito à pergunta",
            body: "A repercussão cresceu quando os movimentos e ruídos passaram a ser associados a respostas. O interesse então se deslocou do espetáculo para a origem, o sentido e as leis possíveis daqueles acontecimentos.",
          },
        ],
        references: [
          {
            label: "Introdução ao estudo da Doutrina Espírita",
            source: "Allan Kardec — O Livro dos Espíritos, Introdução, item III",
            note: "Apresenta a progressão dos fenômenos que antecederam a doutrina.",
            url: "https://kardecpedia.com/roteiro-de-estudos/2/o",
          },
        ],
      },
    },
    {
      id: "irmas-fox",
      label: "Irmãs Fox",
      ariaLabel: "Abrir aprofundamento sobre o retrato das irmãs Fox",
      asset: "/timeline/mesas-girantes/Fox.svg",
      position: {
        mobile: { top: "8%", left: "25%", width: "50%" },
        desktop: { top: "8%", left: "26%", width: "49%" },
      },
      highlightMode: "glow",
      highlightColor: "#d5c3a2",
      glowColor: "rgba(213, 195, 162, .48)",
      detail: {
        eyebrow: "31 de março de 1848",
        title: "Hydesville e as irmãs Fox",
        introduction:
          "As ocorrências atribuídas à família Fox, em Hydesville, tornaram-se um marco de grande repercussão na história moderna dos fenômenos espíritas.",
        heroAsset: "/timeline/mesas-girantes/Fox.svg",
        blocks: [
          {
            id: "relatos",
            title: "Pancadas que pareciam responder",
            body: "Segundo o roteiro do seminário, ruídos ouvidos na casa da família passaram a ser interrogados e associados a respostas convencionadas. O episódio chamou a atenção pública e ajudou a deslocar o tema para além do ambiente doméstico.",
          },
          {
            id: "preparacao",
            title: "Um acontecimento preparatório",
            body: "Hydesville não é apresentado como o nascimento de uma doutrina pronta, mas como uma fagulha inicial. A difusão posterior dos fenômenos criou o ambiente de observação e debate no qual a Codificação seria desenvolvida.",
          },
        ],
        references: [
          {
            label: "A progressão dos fenômenos",
            source: "Allan Kardec — O Livro dos Espíritos, Introdução, item III",
            note: "O texto situa a América como ponto de repercussão moderna antes da difusão europeia.",
            url: "https://kardecpedia.com/roteiro-de-estudos/2/o",
          },
        ],
      },
    },
  ],
};

