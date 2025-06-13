import { MarketTableHeaderRow } from './MarketTableHeaderRow';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-16 border-spacing-y-6">
      <thead>
        <MarketTableHeaderRow />
      </thead>
      <tbody>
        <MarketTableBodyRow resourceName="wood" />
        <MarketTableBodyRow resourceName="stone" />
        <MarketTableBodyRow resourceName="sand" />
      </tbody>
    </table>
  );
};
