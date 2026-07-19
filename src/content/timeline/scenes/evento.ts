import type { TimelineScene } from "../types";

export const eventoScene: TimelineScene = {
  id: "evento",
  timelineLabel: "Evento atual",
  timelineShortLabel: "Hoje",
  period: "Presente",
  title: "170 anos depois, a história continua",
  introduction:
    "A Codificação não encerra esta narrativa. O presente também participa dela — e o próximo capítulo continua aberto.",
  kind: "continuation",
  background: {
    mobile: "/timeline/emees/emees.png",
    alt: "Composição colorida do encontro atual de mocidades espíritas",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "contrast(1.03) saturate(1.02)",
    overlay: "linear-gradient(to bottom, rgba(42,25,51,.04), rgba(42,25,51,.08) 58%, rgba(29,18,34,.76))",
    accent: "#ead38c",
    textColor: "#fff8ec",
  },
  hotspots: [
    {
      id: "cartaz",
      label: "Cartaz do evento",
      ariaLabel: "Abrir aprofundamento sobre o evento atual",
      asset: "/timeline/emees/Cartaz.svg",
      position: {
        mobile: { top: "21%", left: "0%", width: "100%" },
        desktop: { top: "21%", left: "0%", width: "100%" },
      },
      highlightMode: "glow-and-tint",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .52)",
      detail: {
        eyebrow: "Presente",
        title: "A história ainda está sendo escrita",
        introduction:
          "O encontro atual aproxima memória e continuidade: revisita os fundamentos da Codificação e pergunta como eles se tornam experiência, estudo e compromisso no presente.",
        heroAsset: "/timeline/emees/Cartaz.svg",
        blocks: [
          {
            id: "agora",
            title: "Um capítulo em movimento",
            body: "Depois de acompanhar séculos de preparação, a linha do tempo chega a quem a percorre. Cada geração recebe ideias anteriores, volta a examiná-las e participa da maneira como elas serão compreendidas e vividas adiante.",
          },
          {
            id: "continua",
            title: "Esta linha não termina aqui",
            body: "O fio visual segue para fora da última cena porque a história permanece aberta. O evento é um ponto do percurso, não um ponto final.",
          },
        ],
      },
    },
  ],
};

