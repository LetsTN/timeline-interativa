"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "motion/react";

import { timelineUi, type TimelineHotspot, type TimelineScene } from "@/src/content/timeline";
import { useTimelineStore } from "@/src/store/timeline-store";

import { DetailContent } from "./DetailContent";
import styles from "./timeline.module.css";

type DetailDialogProps = {
  scene: TimelineScene | null;
  hotspot: TimelineHotspot | null;
};

export function DetailDialog({ scene, hotspot }: DetailDialogProps) {
  const activeHotspot = useTimelineStore((state) => state.activeHotspot);
  const closeHotspot = useTimelineStore((state) => state.closeHotspot);
  const reduceMotion = useReducedMotion();
  const isOpen = Boolean(activeHotspot && scene && hotspot);

  const restoreHotspotFocus = () => {
    if (!activeHotspot) return;
    const trigger = document.querySelector<HTMLElement>(
      `[data-hotspot-key="${activeHotspot.sceneId}:${activeHotspot.hotspotId}"]`,
    );
    trigger?.focus({ preventScroll: true });
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeHotspot();
      }}
    >
      {isOpen && scene && hotspot ? (
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              className={styles.dialogOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.24 }}
            />
          </Dialog.Overlay>
          <Dialog.Content
            asChild
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              restoreHotspotFocus();
            }}
          >
            <motion.div
              className={styles.dialogContent}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0.12 : 0.34, ease: "easeOut" }}
            >
              <div className={styles.dialogTopbar}>
                <Dialog.Close className={styles.backButton}>
                  <span aria-hidden="true">←</span>
                  {timelineUi.backToScene}
                </Dialog.Close>
              </div>
              <DetailContent scene={scene} hotspot={hotspot} />
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      ) : null}
    </Dialog.Root>
  );
}
