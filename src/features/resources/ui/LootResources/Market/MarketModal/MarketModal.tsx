import { clearResourcesError, resourcesSlice, sellStone, sellWood } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

interface MarketModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const MarketModal = ({ isModalOpen, setIsModalOpen }: MarketModalProps) => {
  const dispatch = useAppDispatch();
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(false);
  }, [dispatch, clearResourcesError]);

  const onSellWood = useCallback(() => dispatch(sellWood({ woodCount: 1 })), [dispatch, sellWood]);
  const onSellStone = useCallback(() => dispatch(sellStone({ stoneCount: 1 })), [dispatch, sellStone]);

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
                <span className="text-[40px]">1</span>
                <img src={WoodImageSrc} width="90px" />
              </div>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={woodCount <= 0} onClick={onSellWood}>
                Sell
              </Button>
            </td>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">1</span>
                <img src={CoinsImageSrc} width="90px" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">1</span>
                <img src={StoneImageSrc} width="90px" />
              </div>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={stoneCount <= 0} onClick={onSellStone}>
                Sell
              </Button>
            </td>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="text-[40px]">1</span>
                <img src={CoinsImageSrc} width="90px" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
