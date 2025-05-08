import { resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Mines = () => {
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(resourcesSlice.actions.mineStone()), [dispatch, resourcesSlice]);

  return <Button onClick={mineStone}>Mines</Button>;
};
