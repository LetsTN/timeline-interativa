"use client";

/* eslint-disable @next/next/no-img-element -- Interactive local SVGs must remain img elements by project requirement. */

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

import type { TimelineHotspot as TimelineHotspotData } from "@/src/content/timeline";
import { timelineUi } from "@/src/content/timeline";

import styles from "./timeline.module.css";

type TimelineHotspotProps = {
  sceneId: string;
  hotspot: TimelineHotspotData;
  inspecting: boolean;
  visited: boolean;
  sceneActive: boolean;
  onOpen: () => void;
};

type HotspotStyle = CSSProperties & {
  "--hotspot-top": string;
  "--hotspot-left": string;
  "--hotspot-width": string;
  "--hotspot-transform"?: string;
  "--hotspot-desktop-top": string;
  "--hotspot-desktop-left": string;
  "--hotspot-desktop-width": string;
  "--hotspot-desktop-transform"?: string;
  "--hotspot-color": string;
  "--hotspot-glow": string;
};

export function TimelineHotspot({
  sceneId,
  hotspot,
  inspecting,
  visited,
  sceneActive,
  onOpen,
}: TimelineHotspotProps) {
  const reduceMotion = useReducedMotion();
  const desktop = hotspot.position.desktop ?? hotspot.position.mobile;
  const hotspotStyle: HotspotStyle = {
    "--hotspot-top": hotspot.position.mobile.top,
    "--hotspot-left": hotspot.position.mobile.left,
    "--hotspot-width": hotspot.position.mobile.width,
    "--hotspot-transform": hotspot.position.mobile.transform,
    "--hotspot-desktop-top": desktop.top,
    "--hotspot-desktop-left": desktop.left,
    "--hotspot-desktop-width": desktop.width,
    "--hotspot-desktop-transform": desktop.transform,
    "--hotspot-color": hotspot.highlightColor ?? "#ead38c",
    "--hotspot-glow": hotspot.glowColor ?? "rgba(234, 211, 140, .48)",
  };

  return (
    <motion.button
      type="button"
      className={styles.hotspot}
      data-mode={hotspot.highlightMode ?? "glow"}
      data-inspecting={inspecting || undefined}
      data-visited={visited || undefined}
      data-hotspot-key={`${sceneId}:${hotspot.id}`}
      style={hotspotStyle}
      aria-label={hotspot.ariaLabel}
      tabIndex={sceneActive ? 0 : -1}
      onClick={onOpen}
      animate={
        inspecting && sceneActive
          ? {
              scale: visited ? 1.02 : 1.045,
              filter: "brightness(1.1) saturate(1.08)",
            }
          : { scale: 1, filter: "brightness(1) saturate(1)" }
      }
      transition={{ duration: reduceMotion ? 0.1 : 0.35, ease: "easeOut" }}
    >
      <motion.span
        className={styles.hotspotGlow}
        aria-hidden="true"
        animate={
          inspecting && sceneActive && !reduceMotion
            ? { opacity: visited ? [0.42, 0.56, 0.42] : [0.58, 0.86, 0.58], scale: [0.98, 1.04, 0.98] }
            : { opacity: 0, scale: 1 }
        }
        transition={{ duration: 3.2, repeat: inspecting ? Infinity : 0, ease: "easeInOut" }}
      />
      <img className={styles.hotspotAsset} src={hotspot.asset} alt="" aria-hidden="true" draggable={false} />
      {inspecting ? (
        <motion.span
          className={styles.hotspotLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.24 }}
        >
          {hotspot.label}
        </motion.span>
      ) : null}
      {visited ? (
        <span className={styles.visitedBadge} title={timelineUi.visited}>
          <span aria-hidden="true">✓</span>
          <span className={styles.visuallyHidden}>{timelineUi.visited}</span>
        </span>
      ) : null}
    </motion.button>
  );
}
