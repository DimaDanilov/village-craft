import { InstrumentCard } from './InstrumentStatsCard';
import { ResourceInfo } from './ResourceInfo';

export const InstrumentResourcesInfo = () => {
  return (
    <div className="flex flex-col gap-3 w-fit h-fit">
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <InstrumentCard instrumentName="axe" />
        <div className={`w-0.25 bg-white`}></div>
        <ResourceInfo resourceName="wood" />
      </div>
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <InstrumentCard instrumentName="pickaxe" />
        <div className={`w-0.25 bg-white`}></div>
        <ResourceInfo resourceName="stone" />
      </div>
      <div className={`flex flex-row rounded-2xl border border-teal-400 overflow-hidden`}>
        <InstrumentCard instrumentName="shovel" />
        <div className={`w-0.25 bg-white`}></div>
        <ResourceInfo resourceName="sand" />
      </div>
      <div className={`w-fit self-end rounded-2xl border border-teal-400 overflow-hidden`}>
        <ResourceInfo resourceName="coins" />
      </div>
    </div>
  );
};
