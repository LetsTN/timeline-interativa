"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

import { timelineScenes } from "@/src/content/timeline";
import { useTimelineStore } from "@/src/store/timeline-store";

import { DetailDialog } from "./DetailDialog";
import { MagnifierButton } from "./MagnifierButton";
import { TimelineScene } from "./TimelineScene";
import styles from "./timeline.module.css";

export function TimelineExperience() {
  const experienceRef = useRef<HTMLElement>(null);
  const ratiosRef = useRef(new Map<string, number>());
  const initialHashHandled = useRef(false);
  const activeSceneId = useTimelineStore((state) => state.activeSceneId);
  const activeHotspot = useTimelineStore((state) => state.activeHotspot);
  const inspectionSceneId = useTimelineStore((state) => state.inspectionSceneId);
  const setActiveScene = useTimelineStore((state) => state.setActiveScene);
  const toggleInspection = useTimelineStore((state) => state.toggleInspection);

  const activeScene = useMemo(
    () => timelineScenes.find((scene) => scene.id === activeSceneId) ?? timelineScenes[0],
    [activeSceneId],
  );
  const dialogScene = activeHotspot
    ? (timelineScenes.find((scene) => scene.id === activeHotspot.sceneId) ?? null)
    : null;
  const dialogHotspot = activeHotspot
    ? (dialogScene?.hotspots.find((hotspot) => hotspot.id === activeHotspot.hotspotId) ?? null)
    : null;

  const navigateToScene = useCallback((sceneId: string, behavior: ScrollBehavior = "smooth") => {
    document.getElementById(sceneId)?.scrollIntoView({ behavior, block: "start" });
  }, []);

  useEffect(() => {
    if (initialHashHandled.current) return;
    initialHashHandled.current = true;
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!timelineScenes.some((scene) => scene.id === hash)) return;
    window.requestAnimationFrame(() => navigateToScene(hash, "smooth"));
  }, [navigateToScene]);

  useEffect(() => {
    const sceneElements = experienceRef.current?.querySelectorAll<HTMLElement>("[data-scene-id]");
    if (!sceneElements?.length) return;
    const thresholds = Array.from({ length: 11 }, (_, index) => index / 10);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.sceneId;
          if (id) ratiosRef.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        const next = [...ratiosRef.current.entries()].sort((a, b) => b[1] - a[1])[0];
        if (!next || next[1] <= 0) return;
        setActiveScene(next[0]);
      },
      { threshold: thresholds },
    );
    sceneElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [setActiveScene]);

  useEffect(() => {
    if (!activeSceneId) return;
    const nextUrl = `${window.location.pathname}${window.location.search}#${activeSceneId}`;
    window.history.replaceState(window.history.state, "", nextUrl);
  }, [activeSceneId]);

  useEffect(() => {
    if (inspectionSceneId && inspectionSceneId !== activeSceneId) {
      toggleInspection(inspectionSceneId);
    }
  }, [activeSceneId, inspectionSceneId, toggleInspection]);

  return (
    <main className={styles.experience} ref={experienceRef}>
      {activeScene.kind !== "opening" ? <MagnifierButton scene={activeScene} /> : null}
      <div className={styles.sceneStack}>
        {timelineScenes.map((scene, index) => (
          <TimelineScene
            key={scene.id}
            scene={scene}
            active={scene.id === activeSceneId}
            preload={index < 2}
            onStart={scene.kind === "opening" ? () => navigateToScene("moises") : undefined}
          />
        ))}
      </div>
      <DetailDialog scene={dialogScene} hotspot={dialogHotspot} />
    </main>
  );
}
