import { Button } from '@shared/Button/Button';

interface MarketTableBodyRowProps {
  sellAmount: number;
  receiveAmount: number;
  sellItemImageSrc: string;
  receiveItemImageSrc: string;
  onSell: () => void;
  sellBtnDisabled: boolean;
}

export const MarketTableBodyRow = ({
  sellAmount,
  receiveAmount,
  sellItemImageSrc,
  receiveItemImageSrc,
  onSell,
  sellBtnDisabled,
}: MarketTableBodyRowProps) => {
  return (
    <tr>
      <td>
        <div className="flex flex-row justify-center items-center gap-1">
          <span className="text-[40px]">{sellAmount}</span>
          <img src={sellItemImageSrc} width="90px" alt="Sell Item Image" />
        </div>
      </td>
      <td>
        <Button disabled={sellBtnDisabled} onClick={onSell}>
          Sell
        </Button>
      </td>
      <td>
        <div className="flex flex-row justify-center items-center gap-1">
          <span className="text-[40px]">{receiveAmount}</span>
          <img src={receiveItemImageSrc} width="90px" alt="Receive Item Image" />
        </div>
      </td>
    </tr>
  );
};
