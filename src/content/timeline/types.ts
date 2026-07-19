export type Coordinates = {
  top: string;
  left: string;
  width: string;
  transform?: string;
};

export type TimelineReference = {
  label: string;
  url: string;
  source?: string;
  note?: string;
};

export type DetailBlock = {
  id: string;
  eyebrow?: string;
  title?: string;
  body: string;
  quote?: string;
  image?: string;
};

export type HighlightMode = "glow" | "tint" | "glow-and-tint" | "outline";

export type TimelineHotspot = {
  id: string;
  label: string;
  ariaLabel: string;
  asset: string;
  position: {
    mobile: Coordinates;
    desktop?: Coordinates;
  };
  highlightMode?: HighlightMode;
  highlightColor?: string;
  glowColor?: string;
  detail: {
    eyebrow?: string;
    title: string;
    introduction?: string;
    heroAsset?: string;
    blocks: DetailBlock[];
    references?: TimelineReference[];
  };
};

export type TimelineScene = {
  id: string;
  timelineLabel: string;
  timelineShortLabel?: string;
  period?: string;
  title?: string;
  introduction?: string;
  kind?: "opening" | "history" | "continuation";
  background: {
    mobile: string;
    desktop?: string;
    alt: string;
    objectPosition?: string;
  };
  appearance?: {
    imageFilter?: string;
    overlay?: string;
    accent?: string;
    textColor?: string;
  };
  hotspots: TimelineHotspot[];
};

export type TimelineUiCopy = {
  openingInstruction: string;
  openingMagnifierInstruction: string;
  scrollLabel: string;
  magnifierHint: string;
  magnifierHintDismiss: string;
  exploreScene: string;
  stopExploring: string;
  noDetails: string;
  allVisited: string;
  visited: string;
  backToScene: string;
  referencesTitle: string;
  externalLink: string;
};
