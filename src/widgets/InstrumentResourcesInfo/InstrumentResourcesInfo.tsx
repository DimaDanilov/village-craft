import { InstrumentCard } from './InstrumentStatsCard';
import { ResourceInfo } from './ResourceInfo';

export const InstrumentResourcesInfo = () => {
  return (
    <div className="w-fit h-fit grid grid-cols-[1fr_1px_1fr] gap-y-2">
      {/* Row 1 */}
      <div className="col-span-3 grid grid-cols-subgrid rounded-2xl border border-teal-400 overflow-hidden">
        <InstrumentCard instrumentName="axe" />
        <div className={`w-0.25 bg-teal-400`}></div>
        <ResourceInfo resourceName="wood" />
      </div>

      {/* Row 2 */}
      <div className="col-span-3 grid grid-cols-subgrid rounded-2xl border border-teal-400 overflow-hidden">
        <InstrumentCard instrumentName="pickaxe" />
        <div className={`w-0.25 bg-teal-400`}></div>
        <ResourceInfo resourceName="stone" />
      </div>

      {/* Row 3 */}
      <div className="col-span-3 grid grid-cols-subgrid rounded-2xl border border-teal-400 overflow-hidden">
        <InstrumentCard instrumentName="shovel" />
        <div className={`w-0.25 bg-teal-400`}></div>
        <ResourceInfo resourceName="sand" />
      </div>

      {/* Row 4 - only coins */}
      <div className="col-span-1 col-start-3 grid rounded-2xl border border-teal-400 overflow-hidden">
        <ResourceInfo resourceName="coins" />
      </div>
    </div>
  );
};
