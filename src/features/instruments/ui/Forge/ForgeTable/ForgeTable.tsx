import { ForgeTableHeaderRow } from './ForgeTableHeaderRow';
import { ForgeTableAxeUpgradeRow, ForgeTablePickaxeUpgradeRow } from './ForgeTableBodyRow';

export const ForgeTable = () => {
  return (
    <table className="mx-auto text-center">
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
