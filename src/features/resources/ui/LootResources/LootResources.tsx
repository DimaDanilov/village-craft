import { Mines } from './Mines';
import { Forest } from './Forest';

export const LootResources = () => {
  return (
    <div className="flex flex-col gap-2">
      <Forest />
      <Mines />
    </div>
  );
};
