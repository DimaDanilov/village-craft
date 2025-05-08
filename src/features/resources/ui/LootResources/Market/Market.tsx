import { resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Market = () => {
  const dispatch = useAppDispatch();

  const sellItems = useCallback(() => dispatch(resourcesSlice.actions.sellItems()), [dispatch, resourcesSlice]);

  return <Button onClick={sellItems}>Market</Button>;
};
