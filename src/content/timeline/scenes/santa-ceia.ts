import type { TimelineScene } from "../types";

export const santaCeiaScene: TimelineScene = {
  id: "santa-ceia",
  timelineLabel: "Santa Ceia",
  timelineShortLabel: "Ceia",
  period: "Século I",
  title: "A promessa do Consolador",
  introduction:
    "Na despedida aos discípulos, Jesus anuncia uma presença futura que ensinaria, recordaria e conduziria à verdade.",
  kind: "history",
  background: {
    mobile: "/timeline/santa-ceia/santa-ceia.png",
    alt: "Recorte histórico da Santa Ceia com Jesus ao centro",
    objectPosition: "center",
  },
  appearance: {
    imageFilter: "sepia(.16) contrast(1.05) saturate(.72)",
    overlay: "linear-gradient(to bottom, rgba(18,15,13,.1), rgba(18,15,13,.05) 55%, rgba(18,15,13,.72))",
    accent: "#c9a45c",
    textColor: "#f5efe3",
  },
  hotspots: [
    {
      id: "consolador",
      label: "O Consolador",
      ariaLabel: "Abrir aprofundamento sobre a promessa do Consolador",
      asset: "/timeline/santa-ceia/Consolador.svg",
      position: {
        mobile: { top: "39%", left: "15%", width: "68%" },
        desktop: { top: "38%", left: "16%", width: "67%" },
      },
      highlightMode: "glow-and-tint",
      highlightColor: "#ead38c",
      glowColor: "rgba(234, 211, 140, .48)",
      detail: {
        eyebrow: "A promessa",
        title: "Uma presença que continuaria",
        introduction:
          "O anúncio do Consolador ocorre no contexto da última ceia, entre o lava-pés, o mandamento do amor, as despedidas e a oração de Jesus.",
        heroAsset: "/timeline/santa-ceia/Consolador.svg",
        blocks: [
          {
            id: "promessa",
            title: "Ensinar e recordar",
            body: "Em João 14, o Consolador é identificado com o Espírito de Verdade: permaneceria com os discípulos, ensinaria todas as coisas e faria recordar o que Jesus havia dito. Em João 16, sua missão inclui conduzir à verdade que ainda não podia ser plenamente compreendida.",
            quote:
              "“Ainda tenho muito que vos dizer, mas vós não o podeis suportar agora.” — João 16:12",
          },
          {
            id: "mensagem-coletiva",
            title: "Uma revelação coletiva",
            body: "Nos textos de referência, a terceira revelação não se personifica em um único mensageiro. O Consolador é compreendido como uma mensagem coletiva, ligada ao Espírito de Verdade, que retoma o ensino do Cristo e o apresenta de forma progressivamente mais clara.",
          },
          {
            id: "consolar",
            title: "Consolar é esclarecer",
            body: "O consolo proposto não é simples alívio momentâneo. Ele nasce da compreensão: de onde viemos, para onde vamos, por que estamos na Terra e como as experiências humanas podem adquirir sentido diante da vida futura.",
          },
        ],
        references: [
          {
            label: "Jesus promete outro Consolador",
            source: "João 14:15–17 e 26",
            url: "https://www.bibliaonline.com.br/ara/jo/14/16-26",
          },
          {
            label: "O Espírito de Verdade conduzirá à verdade",
            source: "João 16:7–14",
            url: "https://www.bibliaonline.com.br/acf/jo/16/1-16",
          },
          {
            label: "O Consolador prometido",
            source: "Allan Kardec — O Evangelho segundo o Espiritismo, cap. VI, itens 3 e 4",
            url: "https://kardecpedia.com/roteiro-de-estudos/887/o-evangelho-segundooespiritismo/2267/capitulo-vi-o-cristo-consolador/consolador-prometido/3",
          },
        ],
      },
    },
  ],
};

