import { buildingsSlice } from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';

interface ServiceBuilderTableForgeRowProps {
  onCloseModal: () => void;
}

export const ServiceBuilderTableForgeRow = ({ onCloseModal }: ServiceBuilderTableForgeRowProps) => {
  const dispatch = useAppDispatch();

  const onBuildForge = useCallback(() => {
    dispatch(buildingsSlice.actions.buildForge());
    onCloseModal();
  }, [dispatch]);

  const forgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);
  const isBuildForgeDisabled = Number(forgeLevel) >= 1;

  return (
    <ServiceBuilderTableBodyRow
      buildingTitle={DECK_CARD_INFOS.forge.title}
      buildingDescription={DECK_CARD_INFOS.forge.description}
      buildingImageSrc={DECK_CARD_INFOS.forge.imageSrc}
      onBuild={onBuildForge}
      isBuildDisabled={isBuildForgeDisabled}
    />
  );
};
