import { useState } from 'react';

interface UseProgressParams {
  totalTimeMs: number;
  frequencyMs: number;
}

export function useProgress({ totalTimeMs, frequencyMs }: UseProgressParams) {
  const intervalsAmount = totalTimeMs / frequencyMs;
  const [progress, setProgress] = useState<number>(0);

  const launchProgress = () => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((currentProgress) => {
        const newProgress = currentProgress + 100 / intervalsAmount;

        if (newProgress >= 100) {
          clearInterval(interval);
          return 0;
        }

        return newProgress;
      });
    }, frequencyMs);
  };

  return { progress, launchProgress };
}
