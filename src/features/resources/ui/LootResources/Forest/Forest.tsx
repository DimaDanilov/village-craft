import { resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Forest = () => {
  const dispatch = useAppDispatch();

  const chopWood = useCallback(() => dispatch(resourcesSlice.actions.chopWood()), [dispatch, resourcesSlice]);

  return <Button onClick={chopWood}>Forest</Button>;
};
