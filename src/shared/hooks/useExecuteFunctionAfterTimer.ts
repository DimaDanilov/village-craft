import { useState } from 'react';

interface UseExecuteFunctionAfterTimerParams {
  fn: () => void;
  timeoutMs: number;
}

export function useExecuteFunctionAfterTimer({ fn, timeoutMs }: UseExecuteFunctionAfterTimerParams) {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const launchFunctionAfterTimer = () => {
    if (!isTimerActive) {
      setIsTimerActive(true);

      setTimeout(() => {
        setIsTimerActive(false);
        fn();
      }, timeoutMs);
    }
  };

  return { isTimerActive, launchFunctionAfterTimer };
}
