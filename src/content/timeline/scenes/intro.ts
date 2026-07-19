import type { TimelineScene } from "../types";

export const introScene: TimelineScene = {
  id: "intro",
  timelineLabel: "Abertura",
  timelineShortLabel: "Início",
  kind: "opening",
  title: "Antes da Codificação, houve uma longa preparação.",
  introduction:
    "Ideias, ensinos, fenômenos e perguntas atravessaram os séculos até encontrarem, em Kardec, método e organização.",
  background: {
    mobile: "/timeline/intro/intro.png",
    alt: "Textura clara de papel que introduz a linha do tempo",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(0.1) contrast(0.92) brightness(1.08)",
    overlay: "linear-gradient(to bottom, rgba(244,234,211,.58), rgba(232,221,200,.82))",
    accent: "#8c6a32",
    textColor: "#291c3a",
  },
  hotspots: [],
};
