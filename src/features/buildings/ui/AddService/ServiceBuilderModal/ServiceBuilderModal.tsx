import { buildingsSlice } from '@features/buildings/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface AddServiceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ServiceBuilderModal = ({ isModalOpen, setIsModalOpen }: AddServiceModalProps) => {
  const dispatch = useAppDispatch();

  const onCloseServiceBuilder = useCallback(() => {
    setIsModalOpen(false);
  }, [dispatch]);

  const onBuildForge = useCallback(() => {
    dispatch(buildingsSlice.actions.buildForge());
    onCloseServiceBuilder();
  }, [dispatch]);

  const onBuildMarket = useCallback(() => {
    dispatch(buildingsSlice.actions.buildMarket());
    onCloseServiceBuilder();
  }, [dispatch]);

  const forgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);
  const isBuildForgeDisabled = Number(forgeLevel) >= 1;

  const marketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);
  const isBuildMarketDisabled = Number(marketLevel) >= 1;

  return (
    <Modal title="Service Builder" isOpen={isModalOpen} onClose={onCloseServiceBuilder}>
      <table className="text-center border-separate border-spacing-x-8 border-spacing-y-8">
        <thead>
          <tr>
            <th className="w-1/5 px-6">Service Building</th>
            <th className="w-1/5 px-6">Description</th>
            <th className="w-2/5 px-6">Cost</th>
            <th className="w-1/5 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="w-60 flex flex-col gap-1 justify-center items-center">
                <img width={300} src={DECK_CARD_INFOS.forge.imageSrc} alt="Forge Image" />
                <span className="text-lg">{DECK_CARD_INFOS.forge.title}</span>
              </div>
            </td>
            <td>{DECK_CARD_INFOS.forge.description}</td>
            <td></td>
            <td>
              <Button onClick={onBuildForge} disabled={isBuildForgeDisabled}>
                Build {DECK_CARD_INFOS.forge.title}
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="w-60 flex flex-col gap-1 justify-center items-center">
                <img width={300} src={DECK_CARD_INFOS.market.imageSrc} alt="Market Image" />
                <span className="text-lg">{DECK_CARD_INFOS.market.title}</span>
              </div>
            </td>
            <td>{DECK_CARD_INFOS.market.description}</td>
            <td></td>
            <td>
              <Button onClick={onBuildMarket} disabled={isBuildMarketDisabled}>
                Build {DECK_CARD_INFOS.market.title}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};
