/* eslint-disable @next/next/no-img-element -- The supplied magnifier is a local SVG asset. */

import { timelineUi, type TimelineScene } from "@/src/content/timeline";

import styles from "./timeline.module.css";

type SceneIntroductionProps = {
  scene: TimelineScene;
  headingId: string;
  onStart?: () => void;
};

export function SceneIntroduction({ scene, headingId, onStart }: SceneIntroductionProps) {
  if (scene.kind === "opening") {
    return (
      <div className={styles.openingContent}>
        {scene.title ? <h1 id={headingId} className={styles.heroTitle}>{scene.title}</h1> : null}
        {scene.introduction ? <p className={styles.openingLead}>{scene.introduction}</p> : null}
        <button type="button" className={styles.openingAction} onClick={onStart}>
          <span>{timelineUi.openingInstruction}</span>
          <span className={styles.openingMagnifier} aria-hidden="true">
            <img src="/Lupa.svg" alt="" draggable={false} />
          </span>
          <small>{timelineUi.openingMagnifierInstruction}</small>
          <span className={styles.scrollArrow} aria-hidden="true">↓</span>
          <span className={styles.visuallyHidden}>{timelineUi.scrollLabel}</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.sceneIntroduction}>
      <div className={styles.sceneThread} aria-hidden="true" />
      <p className={styles.sceneMeta}>
        {scene.period ? <span>{scene.period}</span> : null}
        <span>{scene.timelineLabel}</span>
      </p>
      {scene.title ? <h2 id={headingId}>{scene.title}</h2> : null}
      {scene.introduction ? <p>{scene.introduction}</p> : null}
      {scene.kind === "continuation" ? (
        <span className={styles.continuingThread} aria-hidden="true" />
      ) : null}
    </div>
  );
}
