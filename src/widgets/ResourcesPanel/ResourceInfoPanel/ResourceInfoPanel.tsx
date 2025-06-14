import { DECK_CARD_SERVICE_PALETTE } from '@features/buildings/ui';
import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import type { ResourceName } from '@features/resources/model';
import { useAppSelector } from '@store';

interface ResourceInfoPanelProps {
  resourceName: ResourceName;
}

export const ResourceInfoPanel = ({ resourceName }: ResourceInfoPanelProps) => {
  const resourceCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, resourceName));
  const imageSrc = RESOURCE_INFOS[resourceName].imageSrc;
  return (
    <div className="flex flex-row gap-2 w-fit items-center">
      <div className="bg-white w-full flex justify-center">
        <img src={imageSrc} width="40px" alt="Resource Image" />
      </div>
      <span className={`text-lg rounded-2xl ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceCount}</span>
    </div>
  );
};
