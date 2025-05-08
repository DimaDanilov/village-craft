import { resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';

export const Stone = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(resourcesSlice.actions.mineStone()), [dispatch, resourcesSlice]);

  return (
    <div>
      <h1>Stone Component</h1>
      <h2>Test Count: {stoneCount}</h2>
      <button onClick={mineStone}>Mine Stone</button>
    </div>
  );
};
