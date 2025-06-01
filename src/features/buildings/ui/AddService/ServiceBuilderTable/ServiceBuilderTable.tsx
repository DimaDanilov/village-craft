import { ServiceBuilderTableHeaderRow } from './ServiceBuilderTableHeaderRow';
import {
  ServiceBuilderTableForgeRow,
  ServiceBuilderTableGateToTheFutureRow,
  ServiceBuilderTableMarketRow,
} from './ServiceBuilderTableBodyRow';

export const ServiceBuilderTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
      <thead>
        <ServiceBuilderTableHeaderRow />
      </thead>
      <tbody>
        <ServiceBuilderTableForgeRow />
        <ServiceBuilderTableMarketRow />
        <ServiceBuilderTableGateToTheFutureRow />
      </tbody>
    </table>
  );
};
