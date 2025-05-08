import { resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';

export const Stone = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(resourcesSlice.actions.mineStone()), [dispatch, resourcesSlice]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-1 items-center">
        <span className="text-2xl">Stone:</span>
        <span className="text-2xl">{stoneCount}</span>
      </div>
      <button onClick={mineStone}>Mine Stone</button>
    </div>
  );
};
