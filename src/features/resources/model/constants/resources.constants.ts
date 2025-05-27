import type { ResourcesState } from '../slice';

import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import ForestImageSrc from '@assets/locations/Forest.png';
import MinesImageSrc from '@assets/locations/Mines.png';
import MarketImageSrc from '@assets/locations/Market.png';
import ForgeImageSrc from '@assets/locations/Forge.png';

export const WOOD_TRADE_MULTIPLIER: number = 1;
export const STONE_TRADE_MULTIPLIER: number = 1;

export const RESOURCES_IMAGES: Record<keyof ResourcesState['resources'], string> = {
  wood: WoodImageSrc,
  stone: StoneImageSrc,
  coins: CoinsImageSrc,
};

export const LOCATIONS_IMAGES = {
  forest: ForestImageSrc,
  mines: MinesImageSrc,
  market: MarketImageSrc,
  forge: ForgeImageSrc,
} as const;
