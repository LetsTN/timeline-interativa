import Image from "next/image";

import type { TimelineScene } from "@/src/content/timeline";

import styles from "./timeline.module.css";

type SceneBackgroundProps = {
  scene: TimelineScene;
  preload?: boolean;
};

export function SceneBackground({ scene, preload = false }: SceneBackgroundProps) {
  const source = scene.background.desktop ?? scene.background.mobile;
  const imageStyle = {
    filter: scene.appearance?.imageFilter,
    objectPosition: scene.background.objectPosition,
  };

  return (
    <div className={styles.backgroundRoot}>
      <div className={styles.desktopBackdrop}>
        <Image
          src={source}
          alt=""
          fill
          sizes="(min-width: 431px) calc(100vw + 72px), 1px"
          draggable={false}
          style={imageStyle}
        />
      </div>
      <div className={styles.mobileBackground}>
        <Image
          src={scene.background.mobile}
          alt={scene.background.alt}
          fill
          sizes="(max-width: 430px) 100vw, 430px"
          draggable={false}
          loading={preload ? "eager" : "lazy"}
          fetchPriority={preload ? "high" : "auto"}
          style={imageStyle}
        />
      </div>
      <div
        className={styles.sceneOverlay}
        style={{ background: scene.appearance?.overlay }}
      />
    </div>
  );
}
