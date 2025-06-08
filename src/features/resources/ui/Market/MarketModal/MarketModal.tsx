import { clearResourcesError, resourcesSlice } from '@features/resources/model';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { MarketTable } from '../MarketTable';
import { useTranslation } from 'react-i18next';

interface MarketModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const MarketModal = ({ isModalOpen, setIsModalOpen }: MarketModalProps) => {
  const { t } = useTranslation('Buildings');
  const dispatch = useAppDispatch();

  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(false);
  }, [dispatch, setIsModalOpen]);

  return (
    <Modal
      title={t('buildings.market.title')}
      description={t('buildings.market.description')}
      displayResourcesPanel
      error={error}
      isOpen={isModalOpen}
      onClose={onCloseMarket}
    >
      <MarketTable />
    </Modal>
  );
};
