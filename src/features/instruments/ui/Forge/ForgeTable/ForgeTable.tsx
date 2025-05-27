import { ForgeTableHeaderRow } from './ForgeTableHeaderRow';
import { ForgeTableAxeUpgradeRow, ForgeTablePickaxeUpgradeRow } from './ForgeTableBodyRow';

export const ForgeTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
      <thead>
        <ForgeTableHeaderRow />
      </thead>
      <tbody>
        <ForgeTableAxeUpgradeRow />
        <ForgeTablePickaxeUpgradeRow />
      </tbody>
    </table>
  );
};
