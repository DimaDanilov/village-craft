import { Mines } from './Mines';
import { Forest } from './Forest';
import { Market } from './Market';

export const LootResources = () => {
  return (
    <div className="flex flex-col gap-2">
      <Forest />
      <Mines />
      <Market />
    </div>
  );
};
