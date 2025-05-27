import type { DeckCardInfo, DeckCardInfos, DeckCardPalette } from '../types';
import { LOCATIONS_IMAGES } from '@features/resources/model';

export const DECK_CARD_RESOURCE_PALETTE: DeckCardPalette = {
  bgColorClassName: 'bg-orange-200',
  textColorClassName: 'text-amber-600',
  iconStrokeColorClassName: 'stroke-amber-600',
  borderColorClassName: 'border-amber-300',
  fillColorClassName: 'fill-amber-300',
};
export const DECK_CARD_SERVICE_PALETTE: DeckCardPalette = {
  bgColorClassName: 'bg-sky-200',
  textColorClassName: 'text-sky-600',
  iconStrokeColorClassName: 'stroke-sky-600',
  borderColorClassName: 'border-sky-300',
  fillColorClassName: 'fill-sky-300',
};

export const FOREST_INFO: DeckCardInfo = {
  imageSrc: LOCATIONS_IMAGES.forest,
  title: 'Forest',
  description: 'Forest full of high trees. Nice place to chop wood with axe.',
} as const;

export const MINES_INFO: DeckCardInfo = {
  imageSrc: LOCATIONS_IMAGES.mines,
  title: 'Mines',
  description: 'Mine stone with your pickaxe.',
} as const;

export const FORGE_INFO: DeckCardInfo = {
  imageSrc: LOCATIONS_IMAGES.forge,
  title: 'Forge',
  description: 'Upgrade your instruments to collect resources more easily.',
} as const;

export const MARKET_INFO: DeckCardInfo = {
  imageSrc: LOCATIONS_IMAGES.market,
  title: 'Market',
  description: 'Sell your resources to earn money.',
} as const;

export const DECK_CARD_INFOS: DeckCardInfos = {
  forest: FOREST_INFO,
  mines: MINES_INFO,
  forge: FORGE_INFO,
  market: MARKET_INFO,
};
