import { ServiceBuilderTableHeaderRow } from './ServiceBuilderTableHeaderRow';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';

export const ServiceBuilderTable = () => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
      <thead>
        <ServiceBuilderTableHeaderRow />
      </thead>
      <tbody>
        <ServiceBuilderTableBodyRow buildingName="forge" />
        <ServiceBuilderTableBodyRow buildingName="market" />
        <ServiceBuilderTableBodyRow buildingName="gateToTheFuture" />
      </tbody>
    </table>
  );
};
