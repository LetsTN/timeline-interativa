import type { TimelineScene } from "../types";

export const livroDosEspiritosScene: TimelineScene = {
  id: "livro-dos-espiritos",
  timelineLabel: "O Livro dos Espíritos",
  timelineShortLabel: "O Livro",
  period: "1857",
  title: "A chegada do Espiritismo e a Codificação",
  introduction:
    "Publicado em 18 de abril de 1857, O Livro dos Espíritos organiza em perguntas e respostas os fundamentos de uma filosofia espiritualista.",
  kind: "history",
  background: {
    mobile: "/timeline/livro-dos-espiritos/livro-dos-espiritos.png",
    alt: "Folha de rosto histórica de O Livro dos Espíritos",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(.08) contrast(1.02) saturate(.82)",
    overlay: "linear-gradient(to bottom, rgba(62,42,28,.03), rgba(62,42,28,.02) 60%, rgba(35,23,16,.68))",
    accent: "#8c6a32",
    textColor: "#fff7e9",
  },
  hotspots: [
    {
      id: "titulo",
      label: "Título da obra",
      ariaLabel: "Abrir aprofundamento sobre a chegada do Espiritismo e a Codificação",
      asset: "/timeline/livro-dos-espiritos/Title.svg",
      position: {
        mobile: { top: "9%", left: "10%", width: "78%" },
        desktop: { top: "9%", left: "11%", width: "77%" },
      },
      highlightMode: "glow-and-tint",
      highlightColor: "#c9a45c",
      glowColor: "rgba(201, 164, 92, .46)",
      detail: {
        eyebrow: "1857",
        title: "A chegada do Espiritismo e a Codificação",
        introduction:
          "A primeira edição de O Livro dos Espíritos marca a passagem dos fenômenos dispersos para uma doutrina organizada, com vocabulário próprio, princípios e questões encadeadas.",
        heroAsset: "/timeline/livro-dos-espiritos/Title.svg",
        blocks: [
          {
            id: "obra",
            title: "Um novo nome para um novo campo",
            body: "Kardec abre a obra explicando a necessidade de termos novos para ideias novas. As palavras Espiritismo e espírita delimitam o estudo dos Espíritos e evitam confundi-lo com o espiritualismo em sentido amplo.",
          },
          {
            id: "repositorio",
            title: "Perguntas, respostas e organização",
            body: "O conteúdo é apresentado como resultado do ensino dos Espíritos superiores. A ordem das matérias, sua distribuição metódica, as notas e partes da redação compõem o trabalho de organização realizado por Kardec.",
            quote:
              "“Este livro é o repositório de seus ensinos. Foi escrito [...] para estabelecer os fundamentos de uma filosofia racional.” — O Livro dos Espíritos, Prolegômenos",
          },
        ],
        references: [
          {
            label: "Prolegômenos de O Livro dos Espíritos",
            source: "Allan Kardec",
            url: "https://kardecpedia.com/roteiro-de-estudos/2/o-livro-dos-espiritos/8/prolegomenos",
          },
        ],
      },
    },
    {
      id: "nome-kardec",
      label: "Nome Allan Kardec",
      ariaLabel: "Abrir aprofundamento sobre o método kardequiano",
      asset: "/timeline/livro-dos-espiritos/Name.svg",
      position: {
        mobile: { top: "43%", left: "19%", width: "62%" },
        desktop: { top: "43%", left: "20%", width: "61%" },
      },
      highlightMode: "outline",
      highlightColor: "#8c6a32",
      glowColor: "rgba(140, 106, 50, .42)",
      detail: {
        eyebrow: "Método",
        title: "O método kardequiano",
        introduction:
          "O nome na folha de rosto também remete ao processo pelo qual o conteúdo foi examinado: observação, comparação, controle da razão e concordância entre fontes independentes.",
        heroAsset: "/timeline/livro-dos-espiritos/Name.svg",
        blocks: [
          {
            id: "criterios",
            title: "Examinar antes de concluir",
            body: "As comunicações não eram aceitas apenas pela assinatura atribuída a um Espírito. O conteúdo precisava enfrentar o exame racional e encontrar confirmação em mensagens espontâneas recebidas por médiuns sem relação entre si.",
          },
          {
            id: "ciencia-filosofia",
            title: "Observação e filosofia",
            body: "Kardec define o Espiritismo em duas dimensões inseparáveis: como ciência prática, estuda as relações com os Espíritos; como filosofia, considera as consequências morais que decorrem dessas relações.",
            quote:
              "“O Espiritismo é, ao mesmo tempo, uma ciência de observação e uma doutrina filosófica.” — O que é o Espiritismo?, Preâmbulo",
          },
        ],
        references: [
          {
            label: "Autoridade da Doutrina Espírita",
            source: "O Evangelho segundo o Espiritismo, Introdução, item II",
            url: "https://www.kardecpedia.com/roteiro-de-estudos/887/o-evangelho-segundooespiritismo/2052/introducao/ii-autoridade-da-doutrina-espirita",
          },
          {
            label: "Definição do Espiritismo",
            source: "Allan Kardec — O que é o Espiritismo?, Preâmbulo",
            url: "https://kardecpedia.com/roteiro-de-estudos/885/o-que-eo-espiritismo/1169/preambulo",
          },
        ],
      },
    },
  ],
};

