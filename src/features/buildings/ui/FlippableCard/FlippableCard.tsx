import type { PropsWithChildren, CSSProperties } from 'react';

import styles from './FlippableCard.module.css';

interface CustomCSSProperties extends CSSProperties {
  '--animation-duration': string | number;
}

interface FlippableCardProps extends PropsWithChildren {
  animationStatus: 'firstHalf' | 'secondHalf' | false;
  animationDurationMs: number;
}

export const FlippableCard = ({ animationStatus, animationDurationMs, children }: FlippableCardProps) => {
  const style: CustomCSSProperties = {
    '--animation-duration': animationDurationMs,
  };

  return (
    <div className={`${styles.cardAnimationContainer} ${animationStatus ? styles[animationStatus] : ''}`} style={style}>
      <div className={styles.cardTransformContainer}>{children}</div>
    </div>
  );
};
