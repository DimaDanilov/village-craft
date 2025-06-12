import { MarketTableHeaderRow } from './MarketTableHeaderRow';
import { MarketTableSandSellRow, MarketTableStoneSellRow, MarketTableWoodSellRow } from './MarketTableBodyRow';

export const MarketTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-16 border-spacing-y-4">
      <thead>
        <MarketTableHeaderRow />
      </thead>
      <tbody>
        <MarketTableWoodSellRow />
        <MarketTableStoneSellRow />
        <MarketTableSandSellRow />
      </tbody>
    </table>
  );
};
