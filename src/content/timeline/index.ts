import { eventoScene } from "./scenes/evento";
import { introScene } from "./scenes/intro";
import { jesusEnsinamentosScene } from "./scenes/jesus-ensinamentos";
import { kardecScene } from "./scenes/kardec";
import { livroDosEspiritosScene } from "./scenes/livro-dos-espiritos";
import { mesasGirantesScene } from "./scenes/mesas-girantes";
import { moisesScene } from "./scenes/moises";
import { santaCeiaScene } from "./scenes/santa-ceia";
import type { TimelineScene, TimelineUiCopy } from "./types";

export const timelineScenes: TimelineScene[] = [
  introScene,
  moisesScene,
  jesusEnsinamentosScene,
  santaCeiaScene,
  mesasGirantesScene,
  kardecScene,
  livroDosEspiritosScene,
  eventoScene,
];

export const timelineUi: TimelineUiCopy = {
  openingInstruction: "Role para seguir essa linha do tempo",
  openingMagnifierInstruction: "A lupa revela detalhes em cada cena",
  scrollLabel: "Ir para a primeira cena histórica",
  magnifierHint: "Toque na lupa para revelar os detalhes desta cena.",
  magnifierHintDismiss: "Entendi",
  exploreScene: "Revelar detalhes desta cena",
  stopExploring: "Ocultar destaques da cena",
  noDetails: "Esta cena não possui objetos para explorar",
  allVisited: "Todos os detalhes desta cena foram visitados",
  visited: "Visitado",
  backToScene: "Voltar à cena",
  referencesTitle: "Quer saber mais?",
  externalLink: "Link externo",
};

export type { TimelineHotspot, TimelineScene } from "./types";
