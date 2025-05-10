import { ForgeTableHeaderRow } from './ForgeTableHeaderRow';
import { ForgeTableAxeUpgradeRow, ForgeTablePickaxeUpgradeRow } from './ForgeTableBodyRow';

export const ForgeTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-4">
      <thead>
        <ForgeTableHeaderRow />
      </thead>
      <tbody className="gap-6">
        <ForgeTableAxeUpgradeRow />
        <ForgeTablePickaxeUpgradeRow />
      </tbody>
    </table>
  );
};
