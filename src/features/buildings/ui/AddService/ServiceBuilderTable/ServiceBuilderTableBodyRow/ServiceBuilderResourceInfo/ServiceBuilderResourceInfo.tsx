import { DECK_CARD_SERVICE_PALETTE } from '@features/buildings/ui';
import { RESOURCE_INFOS } from '@features/resources/model';
import type { ResourceName } from '@features/resources/model';

interface ServiceBuilderResourceInfoProps {
  resourceName: ResourceName;
  resourceNeeded: number;
}

export const ServiceBuilderResourceInfo = ({ resourceName, resourceNeeded }: ServiceBuilderResourceInfoProps) => {
  const imageSrc = RESOURCE_INFOS[resourceName].imageSrc;
  return (
    <div className={`flex flex-col w-fit h-fit items-center`}>
      <div className="bg-white w-full px-1 flex justify-center">
        <img src={imageSrc} width="50px" alt="Resource Image" />
      </div>
      <span className={`text-lg my-1 ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceNeeded}</span>
    </div>
  );
};
