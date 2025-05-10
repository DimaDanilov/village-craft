import { MarketTableHeaderRow } from './MarketTableHeaderRow';
import { MarketTableStoneSellRow, MarketTableWoodSellRow } from './MarketTableBodyRow';

export const MarketTable = () => {
  return (
    <table className="mx-auto text-center">
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
