import { CoinsStats, StoneStats, WoodStats } from '@widgets/InstrumentResourcesInfo';

export function ResourcesPanel() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <h2 className="text text-lg">You have: </h2>
      <div className="flex flex-row gap-6 w-fit px-6 py-1 rounded-2xl border-amber-500 border-2">
        <WoodStats flexDirection="row" imageWidth="40px" />
        <StoneStats flexDirection="row" imageWidth="40px" />
        <CoinsStats flexDirection="row" imageWidth="40px" />
      </div>
    </div>
  );
}
