import type { PropsWithChildren } from 'react';

import styles from './FlippableCard.module.css';

interface FlippableCardProps extends PropsWithChildren {
  animationStatus: 'firstHalf' | 'secondHalf' | false;
}

export const FlippableCard = ({ animationStatus, children }: FlippableCardProps) => {
  return (
    <div className={`${styles.cardAnimationContainer} ${animationStatus ? styles[animationStatus] : ''}`}>
      <div className={styles.cardTransformContainer}>{children}</div>
    </div>
  );
};
