import { DECK_CARD_SERVICE_PALETTE } from '@features/buildings/ui';
import { RESOURCE_INFOS, resourcesSlice, type ResourceName } from '@features/resources/model';
import { useAppSelector } from '@store';

interface ResourceInfoProps {
  resourceName: ResourceName;
}

export const ResourceInfo = ({ resourceName }: ResourceInfoProps) => {
  const resourceCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, resourceName));
  const imageSrc = RESOURCE_INFOS[resourceName].imageSrc;
  return (
    <div className={`flex flex-col w-fit h-fit items-center ${DECK_CARD_SERVICE_PALETTE.bgColorClassName}`}>
      <div className="bg-white w-full px-1 flex justify-center">
        <img src={imageSrc} width="60px" alt="Resource Image" />
      </div>
      <span className={`text-2xl my-1 ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceCount}</span>
    </div>
  );
};
