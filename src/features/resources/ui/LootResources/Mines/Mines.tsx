import { mineStoneWithPickaxe, resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Mines = () => {
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(mineStoneWithPickaxe()), [dispatch, resourcesSlice]);

  return <Button onClick={mineStone}>Mines</Button>;
};
