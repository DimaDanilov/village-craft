import { resourcesSlice } from '@features/resources/model';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Mines = () => {
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(resourcesSlice.actions.mineStone()), [dispatch, resourcesSlice]);

  return <button onClick={mineStone}>Mines</button>;
};
