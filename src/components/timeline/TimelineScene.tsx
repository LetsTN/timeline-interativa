"use client";

import type { CSSProperties } from "react";

import type { TimelineScene as TimelineSceneData } from "@/src/content/timeline";

import { HotspotLayer } from "./HotspotLayer";
import { SceneBackground } from "./SceneBackground";
import { SceneIntroduction } from "./SceneIntroduction";
import styles from "./timeline.module.css";

type TimelineSceneProps = {
  scene: TimelineSceneData;
  active: boolean;
  preload?: boolean;
  onStart?: () => void;
};

type SceneStyle = CSSProperties & {
  "--scene-accent": string;
  "--scene-text": string;
};

export function TimelineScene({ scene, active, preload, onStart }: TimelineSceneProps) {
  const sceneStyle: SceneStyle = {
    "--scene-accent": scene.appearance?.accent ?? "#c9a45c",
    "--scene-text": scene.appearance?.textColor ?? "#f5efe3",
  };

  return (
    <section
      id={scene.id}
      className={styles.scene}
      data-scene-id={scene.id}
      data-scene-kind={scene.kind}
      data-active={active || undefined}
      style={sceneStyle}
      aria-labelledby={`${scene.id}-title`}
    >
      <SceneBackground scene={scene} preload={preload} />
      {scene.hotspots.length ? <HotspotLayer scene={scene} active={active} /> : null}
      <div className={styles.sceneContent}>
        <SceneIntroduction scene={scene} headingId={`${scene.id}-title`} onStart={onStart} />
      </div>
    </section>
  );
}
