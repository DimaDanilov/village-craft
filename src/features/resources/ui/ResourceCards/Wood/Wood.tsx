import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { resourcesSlice } from '@features/resources/model';
import WoodImageSrc from '@assets/Wood.png';

export const Wood = () => {
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const dispatch = useAppDispatch();

  const chopWood = useCallback(() => dispatch(resourcesSlice.actions.chopWood()), [dispatch, resourcesSlice]);
  /* <button onClick={chopWood}>Chop Wood</button> */

  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={WoodImageSrc} width="120px" />
      <span className="text-[60px]">: {woodCount}</span>
    </div>
  );
};
