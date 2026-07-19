import type { TimelineReference } from "@/src/content/timeline/types";
import { timelineUi } from "@/src/content/timeline";

import styles from "./timeline.module.css";

type ReferenceListProps = {
  references?: TimelineReference[];
};

export function ReferenceList({ references }: ReferenceListProps) {
  if (!references?.length) return null;

  return (
    <details className={styles.references}>
      <summary>{timelineUi.referencesTitle}</summary>
      <ul>
        {references.map((reference) => (
          <li key={`${reference.label}-${reference.url}`}>
            <a href={reference.url} target="_blank" rel="noopener noreferrer">
              <span>
                <strong>{reference.label}</strong>
                {reference.source ? <small>{reference.source}</small> : null}
                {reference.note ? <span>{reference.note}</span> : null}
              </span>
              <span className={styles.externalMark} aria-label={timelineUi.externalLink}>
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
