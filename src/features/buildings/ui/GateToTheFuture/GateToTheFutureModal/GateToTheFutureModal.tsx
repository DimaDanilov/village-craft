import { Modal } from '@shared/Modal/Modal';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import VictoryImageSrc from '@assets/locations/Gate_to_the_future_2.png';

interface GateToTheFutureModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const GateToTheFutureModal = ({ isModalOpen, setIsModalOpen }: GateToTheFutureModalProps) => {
  const { t } = useTranslation('Buildings');

  const onCloseGateToTheFuture = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <Modal
      title={t('buildings.gateToTheFuture.title')}
      description={t('modal.modalDescription', { ns: 'GateToTheFuture' })}
      isOpen={isModalOpen}
      onClose={onCloseGateToTheFuture}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-amber-600">{t('modal.victoryMessage', { ns: 'GateToTheFuture' })}</h2>
        <img className="w-160 mx-auto" src={VictoryImageSrc} />
      </div>
    </Modal>
  );
};
