import { ForgeTableHeaderRow } from './ForgeTableHeaderRow';
import { ForgeTableBodyRow } from './ForgeTableBodyRow';

export const ForgeTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
      <thead>
        <ForgeTableHeaderRow />
      </thead>
      <tbody>
        <ForgeTableBodyRow instrumentName="axe" />
        <ForgeTableBodyRow instrumentName="pickaxe" />
        <ForgeTableBodyRow instrumentName="shovel" />
      </tbody>
    </table>
  );
};
