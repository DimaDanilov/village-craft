import { resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import StoneImageSrc from '@assets/Stone.png';

export const Stone = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(resourcesSlice.actions.mineStone()), [dispatch, resourcesSlice]);
  /* <button onClick={mineStone}>Mine Stone</button> */

  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={StoneImageSrc} width="120px" />
      <span className="text-[60px]">: {stoneCount}</span>
    </div>
  );
};
