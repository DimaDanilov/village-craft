import { useCallback, useState } from 'react';

export function useFlippableCard() {
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [animationStatus, setAnimationStatus] = useState<'firstHalf' | 'secondHalf' | false>(false);
  const handleRollCard = useCallback(() => {
    setAnimationStatus('firstHalf');
    setTimeout(() => {
      setAnimationStatus('secondHalf');
      setCardSide((prevSide) => {
        return prevSide === 'front' ? 'back' : 'front';
      });
    }, 500);
    setTimeout(() => setAnimationStatus(false), 1000);
  }, []);

  return { cardSide, animationStatus, handleRollCard };
}
