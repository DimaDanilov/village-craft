import { MarketTableHeaderRow } from './MarketTableHeaderRow';
import { MarketTableStoneSellRow, MarketTableWoodSellRow } from './MarketTableBodyRow';

export const MarketTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-4">
      <thead>
        <MarketTableHeaderRow />
      </thead>
      <tbody>
        <MarketTableWoodSellRow />
        <MarketTableStoneSellRow />
      </tbody>
    </table>
  );
};
