"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ActiveHotspot = {
  sceneId: string;
  hotspotId: string;
};

type TimelineState = {
  activeSceneId: string;
  inspectionSceneId: string | null;
  activeHotspot: ActiveHotspot | null;
  visitedHotspots: string[];
  hasSeenMagnifierHint: boolean;
  setActiveScene: (sceneId: string) => void;
  toggleInspection: (sceneId: string) => void;
  openHotspot: (sceneId: string, hotspotId: string) => void;
  closeHotspot: () => void;
  markVisited: (sceneId: string, hotspotId: string) => void;
  dismissMagnifierHint: () => void;
};

const visitKey = (sceneId: string, hotspotId: string) => `${sceneId}:${hotspotId}`;

export const useTimelineStore = create<TimelineState>()(
  persist(
    (set) => ({
      activeSceneId: "intro",
      inspectionSceneId: null,
      activeHotspot: null,
      visitedHotspots: [],
      hasSeenMagnifierHint: false,
      setActiveScene: (sceneId) => set({ activeSceneId: sceneId }),
      toggleInspection: (sceneId) =>
        set((state) => ({
          inspectionSceneId: state.inspectionSceneId === sceneId ? null : sceneId,
        })),
      openHotspot: (sceneId, hotspotId) =>
        set((state) => {
          const key = visitKey(sceneId, hotspotId);
          return {
            activeHotspot: { sceneId, hotspotId },
            inspectionSceneId: null,
            visitedHotspots: state.visitedHotspots.includes(key)
              ? state.visitedHotspots
              : [...state.visitedHotspots, key],
          };
        }),
      closeHotspot: () => set({ activeHotspot: null }),
      markVisited: (sceneId, hotspotId) =>
        set((state) => {
          const key = visitKey(sceneId, hotspotId);
          return state.visitedHotspots.includes(key)
            ? state
            : { visitedHotspots: [...state.visitedHotspots, key] };
        }),
      dismissMagnifierHint: () => set({ hasSeenMagnifierHint: true }),
    }),
    {
      name: "timeline-preferences",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        visitedHotspots: state.visitedHotspots,
        hasSeenMagnifierHint: state.hasSeenMagnifierHint,
      }),
    },
  ),
);

export const timelineVisitKey = visitKey;
