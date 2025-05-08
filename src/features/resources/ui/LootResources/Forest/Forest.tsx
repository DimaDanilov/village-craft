import { resourcesSlice } from '@features/resources/model';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Forest = () => {
  const dispatch = useAppDispatch();

  const chopWood = useCallback(() => dispatch(resourcesSlice.actions.chopWood()), [dispatch, resourcesSlice]);

  return <button onClick={chopWood}>Forest</button>;
};
