import { clearResourcesError, resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import AxeImageSrc from '@assets/instruments/Axe.png';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import {
  AXE_LEVEL_EFFICIENCY,
  instrumentsSlice,
  isInstrumentUpgradeAvailable,
  PICKAXE_LEVEL_EFFICIENCY,
  upgradeAxe,
  upgradePickaxe,
} from '@features/instruments/model';

interface ForgeModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ForgeModal = ({ isModalOpen, setIsModalOpen }: ForgeModalProps) => {
  const dispatch = useAppDispatch();
  const axeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  const axeNextLevel = Number(axeLevel) + 1;
  const pickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  const pickaxeNextLevel = Number(pickaxeLevel) + 1;

  const isAxeUpgradeAvailable = isInstrumentUpgradeAvailable(axeNextLevel, AXE_LEVEL_EFFICIENCY);
  const isPickaxeUpgradeAvailable = isInstrumentUpgradeAvailable(pickaxeNextLevel, PICKAXE_LEVEL_EFFICIENCY);

  const onUpgradeAxe = useCallback(() => dispatch(upgradeAxe()), [dispatch, upgradeAxe]);
  const onUpgradePickaxe = useCallback(() => dispatch(upgradePickaxe()), [dispatch, upgradePickaxe]);

  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(false);
  }, [dispatch, clearResourcesError]);

  return (
    <Modal title="Forge" error={error} isOpen={isModalOpen} onClose={onCloseMarket}>
      <table className="mx-auto text-center">
        <thead>
          <tr>
            <th className="w-1/3 px-6">Current Tool</th>
            <th className="w-1/3 px-6">Cost</th>
            <th className="w-1/3 px-6"></th>
            <th className="w-1/3 px-6">Receive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/3 px-6">
              <div className="flex flex-col gap-1 items-center">
                <img src={AxeImageSrc} width="80px" />
                <span className="text-xl">level {axeLevel}</span>
                <span className="text-sm">Wood: {AXE_LEVEL_EFFICIENCY[axeLevel]}</span>
              </div>
            </td>
            <td className="w-1/3 px-6">
              <span>Free</span>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={!isAxeUpgradeAvailable} onClick={onUpgradeAxe}>
                Upgrade
              </Button>
            </td>
            <td className="w-1/3 px-6">
              {isAxeUpgradeAvailable ? (
                <div className="flex flex-col gap-1 items-center">
                  <img src={AxeImageSrc} width="80px" />
                  <span className="text-xl">level {axeNextLevel}</span>
                  <span className="text-sm">Wood: {AXE_LEVEL_EFFICIENCY[axeNextLevel]}</span>
                </div>
              ) : (
                <span>MAX</span>
              )}
            </td>
          </tr>

          <tr>
            <td className="w-1/3 px-6">
              <div className="flex flex-row justify-center items-center gap-1">
                <div className="flex flex-col gap-1 items-center">
                  <img src={PickaxeImageSrc} width="80px" />
                  <span className="text-xl">level {pickaxeLevel}</span>
                  <span className="text-sm">Stone: {PICKAXE_LEVEL_EFFICIENCY[pickaxeLevel]}</span>
                </div>
              </div>
            </td>
            <td className="w-1/3 px-6">
              <span>Free</span>
            </td>
            <td className="w-1/3 px-6">
              <Button disabled={!isPickaxeUpgradeAvailable} onClick={onUpgradePickaxe}>
                Upgrade
              </Button>
            </td>
            <td className="w-1/3 px-6">
              {isPickaxeUpgradeAvailable ? (
                <div className="flex flex-col gap-1 items-center">
                  <img src={AxeImageSrc} width="80px" />
                  <span className="text-xl">level {pickaxeNextLevel}</span>
                  <span className="text-sm">Stone: {PICKAXE_LEVEL_EFFICIENCY[pickaxeNextLevel]}</span>
                </div>
              ) : (
                <span>MAX</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
