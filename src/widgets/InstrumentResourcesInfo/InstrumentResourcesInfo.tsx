import { AxeStats, PickaxeStats, ShovelStats } from './InstrumentCards';
import { CoinsStats, SandStats, StoneStats, WoodStats } from './ResourceCards';

export const InstrumentResourcesInfo = () => {
  return (
    <div className="w-fit h-fit flex flex-row border-2 border-amber-500 rounded-xl">
      <div className="flex flex-col border-r-2 border-r-amber-500 gap-4 px-10 py-6">
        <AxeStats />
        <PickaxeStats />
        <ShovelStats />
      </div>

      <div className="grid grid-cols-2 gap-4 px-10 py-6">
        <WoodStats flexDirection="col" imageWidth="100px" />
        <StoneStats flexDirection="col" imageWidth="100px" />
        <SandStats flexDirection="col" imageWidth="100px" />
        <CoinsStats flexDirection="col" imageWidth="100px" />
      </div>
    </div>
  );
};
