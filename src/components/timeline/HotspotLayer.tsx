"use client";

import type { TimelineScene } from "@/src/content/timeline";
import { timelineVisitKey, useTimelineStore } from "@/src/store/timeline-store";

import { TimelineHotspot } from "./TimelineHotspot";
import styles from "./timeline.module.css";

type HotspotLayerProps = {
  scene: TimelineScene;
  active: boolean;
};

export function HotspotLayer({ scene, active }: HotspotLayerProps) {
  const inspectionSceneId = useTimelineStore((state) => state.inspectionSceneId);
  const visitedHotspots = useTimelineStore((state) => state.visitedHotspots);
  const openHotspot = useTimelineStore((state) => state.openHotspot);
  const inspecting = inspectionSceneId === scene.id;

  return (
    <div
      className={styles.hotspotLayer}
      data-inspecting={inspecting || undefined}
      aria-hidden={!active || undefined}
    >
      <div className={styles.inspectionShade} aria-hidden="true" />
      {scene.hotspots.map((hotspot) => (
        <TimelineHotspot
          key={hotspot.id}
          sceneId={scene.id}
          hotspot={hotspot}
          inspecting={inspecting}
          visited={visitedHotspots.includes(timelineVisitKey(scene.id, hotspot.id))}
          sceneActive={active}
          onOpen={() => openHotspot(scene.id, hotspot.id)}
        />
      ))}
    </div>
  );
}
