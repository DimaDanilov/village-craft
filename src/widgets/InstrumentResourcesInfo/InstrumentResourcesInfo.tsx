import { AxeStats, PickaxeStats } from './InstrumentCards';
import { CoinsStats, StoneStats, WoodStats } from './ResourceCards';

export const InstrumentResourcesInfo = () => {
  return (
    <div className="w-fit flex flex-row border-2 border-amber-500 rounded-2xl">
      <div className="flex flex-col border-r-2 border-r-amber-500 gap-4 px-10 py-6">
        <AxeStats />
        <PickaxeStats />
      </div>

      <div className="grid grid-cols-2 gap-4 px-10 py-6">
        <WoodStats />
        <StoneStats />
        <CoinsStats />
      </div>
    </div>
  );
};
