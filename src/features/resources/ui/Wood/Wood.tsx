import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectCount } from "../../model/selectors/resources.selectors";
import { resourcesSlice } from "../../model/slice/resources.slice";

export const Wood = () => {
  const woodCount = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const chopWood = useCallback(
    () => dispatch(resourcesSlice.actions.increment()),
    [dispatch]
  );

  return (
    <div>
      <h1>Wood Component</h1>
      <h2>Test Count: {woodCount}</h2>
      <button onClick={chopWood}>Chop Wood</button>
    </div>
  );
};
