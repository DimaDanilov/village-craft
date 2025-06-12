import { AxeStats, PickaxeStats, ShovelStats } from '../InstrumentCards';
import { CoinsStats, SandStats, StoneStats, WoodStats } from '../ResourceCards';

export const InstrumentResourcesInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-2 w-fit h-fit">
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <AxeStats />
        <div className={`w-0.25 bg-white`}></div>
        <WoodStats flexDirection="col" />
      </div>
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <PickaxeStats />
        <div className={`w-0.25 bg-white`}></div>
        <StoneStats flexDirection="col" />
      </div>
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <ShovelStats />
        <div className={`w-0.25 bg-white`}></div>
        <SandStats flexDirection="col" />
      </div>
      <div className={`flex flex-row justify-end rounded-2xl border border-teal-400 overflow-hidden`}>
        <CoinsStats flexDirection="col" />
      </div>
    </div>
  );
};
