"use client";

/* eslint-disable @next/next/no-img-element -- The supplied magnifier is a local SVG asset. */

import { motion, useReducedMotion } from "motion/react";

import { timelineUi, type TimelineScene } from "@/src/content/timeline";
import { timelineVisitKey, useTimelineStore } from "@/src/store/timeline-store";

import styles from "./timeline.module.css";

type MagnifierButtonProps = {
  scene: TimelineScene;
};

export function MagnifierButton({ scene }: MagnifierButtonProps) {
  const inspectionSceneId = useTimelineStore((state) => state.inspectionSceneId);
  const visitedHotspots = useTimelineStore((state) => state.visitedHotspots);
  const hasSeenHint = useTimelineStore((state) => state.hasSeenMagnifierHint);
  const toggleInspection = useTimelineStore((state) => state.toggleInspection);
  const dismissHint = useTimelineStore((state) => state.dismissMagnifierHint);
  const reduceMotion = useReducedMotion();
  const disabled = scene.hotspots.length === 0;
  const inspecting = inspectionSceneId === scene.id;
  const allVisited =
    !disabled &&
    scene.hotspots.every((hotspot) =>
      visitedHotspots.includes(timelineVisitKey(scene.id, hotspot.id)),
    );
  const hasUnvisited = !disabled && !allVisited;
  const showHint = scene.id === "moises" && !hasSeenHint;

  const label = disabled
    ? timelineUi.noDetails
    : inspecting
      ? timelineUi.stopExploring
      : allVisited
        ? timelineUi.allVisited
        : timelineUi.exploreScene;

  return (
    <div className={styles.magnifierDock} data-hidden={disabled || undefined}>
      {showHint ? (
        <motion.div
          className={styles.magnifierHint}
          role="status"
          initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>{timelineUi.magnifierHint}</p>
          <button type="button" onClick={dismissHint}>
            {timelineUi.magnifierHintDismiss}
          </button>
        </motion.div>
      ) : null}
      <motion.button
        type="button"
        className={styles.magnifierButton}
        data-inspecting={inspecting || undefined}
        data-unvisited={hasUnvisited || undefined}
        data-complete={allVisited || undefined}
        disabled={disabled}
        aria-pressed={disabled ? undefined : inspecting}
        aria-label={label}
        title={label}
        onClick={() => {
          dismissHint();
          toggleInspection(scene.id);
        }}
        animate={
          hasUnvisited && !inspecting && !reduceMotion
            ? { scale: [1, 1.04, 1] }
            : { scale: 1 }
        }
        transition={{ duration: 2.8, repeat: hasUnvisited && !inspecting ? Infinity : 0 }}
      >
        <img
          className={styles.magnifierAsset}
          src="/Lupa.svg"
          alt=""
          aria-hidden="true"
          draggable={false}
        />
        {allVisited ? <span className={styles.magnifierCheck} aria-hidden="true">✓</span> : null}
      </motion.button>
    </div>
  );
}
