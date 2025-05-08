import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { resourcesSlice } from '@features/resources/model';

export const Wood = () => {
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const dispatch = useAppDispatch();

  const chopWood = useCallback(() => dispatch(resourcesSlice.actions.chopWood()), [dispatch, resourcesSlice]);

  return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-row gap-1 items-center">
        <span className="text-2xl">Wood:</span>
        <span className="text-2xl">{woodCount}</span>
      </div>
      <button onClick={chopWood}>Chop Wood</button>
    </div>
  );
};
