import Image from "next/image";
/* eslint-disable @next/next/no-img-element -- The supplied local SVG is the dialog's interactive visual source. */
import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "motion/react";

import type { TimelineHotspot, TimelineScene } from "@/src/content/timeline";

import { ReferenceList } from "./ReferenceList";
import styles from "./timeline.module.css";

type DetailContentProps = {
  scene: TimelineScene;
  hotspot: TimelineHotspot;
};

export function DetailContent({ scene, hotspot }: DetailContentProps) {
  const reduceMotion = useReducedMotion();
  const detail = hotspot.detail;
  const heroAsset = detail.heroAsset ?? hotspot.asset;

  return (
    <article className={styles.detailArticle}>
      <motion.div
        className={styles.detailHero}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.12 : 0.38, ease: "easeOut" }}
      >
        {/* The supplied hotspot SVG remains a local, non-draggable visual. */}
        <img src={heroAsset} alt={hotspot.label} draggable={false} />
      </motion.div>

      <motion.div
        className={styles.detailCopy}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.12 : 0.38, delay: reduceMotion ? 0 : 0.06 }}
      >
        <p className={styles.detailSceneLabel}>{scene.timelineLabel}</p>
        {detail.eyebrow ? <p className={styles.eyebrow}>{detail.eyebrow}</p> : null}
        <Dialog.Title className={styles.detailTitle}>{detail.title}</Dialog.Title>
        {detail.introduction ? (
          <Dialog.Description className={styles.detailIntroduction}>
            {detail.introduction}
          </Dialog.Description>
        ) : (
          <Dialog.Description className={styles.visuallyHidden}>
            {detail.title}
          </Dialog.Description>
        )}

        <div className={styles.detailBlocks}>
          {detail.blocks.map((block) => (
            <section key={block.id} className={styles.detailBlock}>
              {block.eyebrow ? <p className={styles.eyebrow}>{block.eyebrow}</p> : null}
              {block.title ? <h3>{block.title}</h3> : null}
              {block.image ? (
                <div className={styles.blockImage}>
                  <Image
                    src={block.image}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, 680px"
                  />
                </div>
              ) : null}
              <p>{block.body}</p>
              {block.quote ? <blockquote>{block.quote}</blockquote> : null}
            </section>
          ))}
        </div>

        <ReferenceList references={detail.references} />
      </motion.div>
    </article>
  );
}
