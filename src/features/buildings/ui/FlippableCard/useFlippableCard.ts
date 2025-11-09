import { useCallback, useState } from 'react';

interface UseFlippableCardParams {
  animationDurationMs: number;
}

export function useFlippableCard({ animationDurationMs }: UseFlippableCardParams) {
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [animationStatus, setAnimationStatus] = useState<'firstHalf' | 'secondHalf' | false>(false);
  const handleRollCard = useCallback(() => {
    setAnimationStatus('firstHalf');
    setTimeout(() => {
      setAnimationStatus('secondHalf');
      setCardSide((prevSide) => {
        return prevSide === 'front' ? 'back' : 'front';
      });
    }, animationDurationMs / 2);
    setTimeout(() => setAnimationStatus(false), animationDurationMs);
  }, [animationDurationMs]);

  return { cardSide, animationStatus, animationDurationMs, handleRollCard };
}
