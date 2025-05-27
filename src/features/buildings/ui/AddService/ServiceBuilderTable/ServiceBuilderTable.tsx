import { ServiceBuilderTableHeaderRow } from './ServiceBuilderTableHeaderRow';
import { ServiceBuilderTableForgeRow, ServiceBuilderTableMarketRow } from './ServiceBuilderTableBodyRow';

interface ServiceBuilderTableProps {
  onCloseModal: () => void;
}

export const ServiceBuilderTable = ({ onCloseModal }: ServiceBuilderTableProps) => {
  return (
    <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
      <thead>
        <ServiceBuilderTableHeaderRow />
      </thead>
      <tbody>
        <ServiceBuilderTableForgeRow onCloseModal={onCloseModal} />
        <ServiceBuilderTableMarketRow onCloseModal={onCloseModal} />
      </tbody>
    </table>
  );
};
