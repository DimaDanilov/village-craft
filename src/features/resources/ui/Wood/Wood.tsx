import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { resourcesSlice } from "../../model/slice/resources.slice";

export const Wood = () => {
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const dispatch = useAppDispatch();

  const chopWood = useCallback(
    () => dispatch(resourcesSlice.actions.chopWood()),
    [dispatch, resourcesSlice]
  );

  return (
    <div>
      <h1>Wood Component</h1>
      <h2>Test Count: {woodCount}</h2>
      <button onClick={chopWood}>Chop Wood</button>
    </div>
  );
};
