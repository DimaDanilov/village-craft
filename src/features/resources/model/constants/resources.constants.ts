import WoodImageSrc from '@assets/resources/Wood.png';
import StoneImageSrc from '@assets/resources/Stone.png';
import CoinsImageSrc from '@assets/resources/Coins.png';

import ForestImageSrc from '@assets/locations/Forest.png';
import MinesImageSrc from '@assets/locations/Mines.png';
import MarketImageSrc from '@assets/locations/Market.png';
import ForgeImageSrc from '@assets/locations/Forge.png';
import GateToTheFutureImageSrc from '@assets/locations/Gate_to_the_future.png';
import type { ResourceInfos } from '../types';

export const WOOD_TRADE_MULTIPLIER: number = 1;
export const STONE_TRADE_MULTIPLIER: number = 1;

export const LOCATIONS_IMAGES = {
  forest: ForestImageSrc,
  mines: MinesImageSrc,
  market: MarketImageSrc,
  forge: ForgeImageSrc,
  gateToTheFuture: GateToTheFutureImageSrc,
} as const;

export const RESOURCE_INFOS: ResourceInfos = {
  wood: {
    imageSrc: WoodImageSrc,
    instrumentMining: 'axe',
  },
  stone: {
    imageSrc: StoneImageSrc,
    instrumentMining: 'pickaxe',
  },
  coins: {
    imageSrc: CoinsImageSrc,
  },
};
