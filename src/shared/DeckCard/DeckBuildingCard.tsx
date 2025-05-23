import { buildingsSlice } from '@features/buildings/model';
import { Button } from '@shared/Button/Button';
import { useAppSelector } from '@store';

export const DeckBuildingCard = () => {
  const isEverythingBuild = useAppSelector(buildingsSlice.selectors.selectIsEveryBuildingBuilt);
  return !isEverythingBuild && <Button>Build Manager</Button>;
};
