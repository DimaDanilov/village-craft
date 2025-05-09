import { clearResourcesError, isSellAvailable, resourcesSlice, sellStone, sellWood } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';
import { COINT_RECEIVED, STONE_SELL_AMOUNT, WOOD_SELL_AMOUNT } from '@features/resources/model/constants';

interface MarketModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const MarketModal = ({ isModalOpen, setIsModalOpen }: MarketModalProps) => {
  const dispatch = useAppDispatch();
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);

  const isWoodSellAvailable = isSellAvailable({ currentResourcesAmount: woodCount, amountToSell: WOOD_SELL_AMOUNT });
  const isStoneSellAvailable = isSellAvailable({ currentResourcesAmount: stoneCount, amountToSell: STONE_SELL_AMOUNT });

  const onSellWood = useCallback(() => dispatch(sellWood({ woodCount: WOOD_SELL_AMOUNT })), [dispatch, sellWood]);
  const onSellStone = useCallback(() => dispatch(sellStone({ stoneCount: STONE_SELL_AMOUNT })), [dispatch, sellStone]);

  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(false);
  }, [dispatch, clearResourcesError]);

  return (
    <Modal title="Market" error={error} isOpen={isModalOpen} onClose={onCloseMarket}>
      <table className="mx-auto text-center">
        <thead>
          <tr>
            <th className="w-1/3 px-6">Sell</th>
            <th className="w-1/3 px-6"></th>
            <th className="w-1/3 px-6">Receive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">{WOOD_SELL_AMOUNT}</span>
                <img src={WoodImageSrc} width="90px" />
              </div>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={!isWoodSellAvailable} onClick={onSellWood}>
                Sell
              </Button>
            </td>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">{COINT_RECEIVED}</span>
                <img src={CoinsImageSrc} width="90px" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">{STONE_SELL_AMOUNT}</span>
                <img src={StoneImageSrc} width="90px" />
              </div>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={!isStoneSellAvailable} onClick={onSellStone}>
                Sell
              </Button>
            </td>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">{COINT_RECEIVED}</span>
                <img src={CoinsImageSrc} width="90px" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
