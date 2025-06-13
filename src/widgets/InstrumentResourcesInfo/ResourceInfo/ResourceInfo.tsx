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
    <div className={`flex flex-row w-full h-12 items-center ${DECK_CARD_SERVICE_PALETTE.bgColorClassName}`}>
      <div className="w-10 h-10 m-1 p-1 bg-white flex justify-center rounded-2xl">
        <img src={imageSrc} alt="Resource Image" />
      </div>
      <span className={`text-2xl px-2 ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceCount}</span>
    </div>
  );
};
